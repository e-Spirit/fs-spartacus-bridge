/* jshint esversion: 9 */

// IMPORTANT:
// Please keep this file in sync with all of its copies:
// <fs-spartacus-common>/build-scripts/uglify.js
// <fs-spartacus-view-components>/build-scripts/uglify.js
// <fs-spartacus-bridge>/build-scripts/uglify.js

/*
  Call usage:

  node uglify.js <src> [options]

  src: The source directory that will be looked up for *.js files

  Options:
  --source-map: If passed, SourceMaps will be generated for all processed JS files.
                Otherwise, no SourceMaps will be generated and all existing SourceMaps will be deleted.


  Examples (called in project root):

  node ./build-scripts/uglify.js ./dist --source-map
  -> This will uglify and minify all *.js files in ./dist
  -> SourceMaps will be generated

  node ./build-scripts/uglify.js ./dist
  -> This will uglify and minify all *.js files in ./dist
  -> No SourceMaps will be generated
  -> Existing SourceMaps will be deleted
*/

const glob = require('glob');
const { minify } = require('terser');
const { writeFileSync, readFileSync, unlinkSync, existsSync } = require('fs-extra');
const { basename, resolve } = require('path');
const commandLineArgs = require('command-line-args');

const cliOptions = commandLineArgs([
  { name: 'src', type: String, defaultOption: true, defaultValue: './dist/' },
  { name: 'source-map', type: Boolean },
]);

const srcDir = resolve(cliOptions.src);
const sourceMapGenerationEnabled = !!cliOptions['source-map'];
const globFilter = `**/{bundles,esm*,fesm*}/**/*.js`;

const minifyOptions = {
  parse: {
    bare_returns: true,
  },
  mangle: true,
  warnings: false,
  module: true,
  toplevel: true,
};

console.info(`Source directory: ${srcDir}`);
console.info(`SourceMap generation is ${sourceMapGenerationEnabled ? 'enabled' : 'disabled'}!`);

glob(`${srcDir}${globFilter}`, {}, async function (err, files) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  files.forEach(async (filePath) => {
    console.info(`Processing file '${filePath}'`);
    await uglifyAndMinify(filePath);
  });
});

async function uglifyAndMinify(filePath) {
  const sourceMapPath = `${filePath}.map`;
  const inputFileBuffer = readFileSync(filePath, { encoding: 'utf8' });
  const sourceMapExists = existsSync(sourceMapPath);
  const isEcma2015 = filePath.indexOf('esm2015') > 0 || filePath.indexOf('fesm2015') > 0;
  const ecmaVersion = isEcma2015 ? 2015 : 5;
  console.debug(`Using ECMA-Version ${ecmaVersion} for current file`);
  let sourceMapOptions;
  if (sourceMapGenerationEnabled) {
    sourceMapOptions = {
      sourceMap: {
        filename: basename(filePath),
        url: basename(sourceMapPath),
      },
    };
    if (sourceMapExists) {
      const inputSourceMapBuffer = readFileSync(sourceMapPath, { encoding: 'utf8' });
      sourceMapOptions.sourceMap.content = inputSourceMapBuffer.toString();
    }
  }
  const result = await minify(inputFileBuffer.toString(), {
    ...minifyOptions,
    ...sourceMapOptions,
    ...{ ecma: ecmaVersion },
  }).catch((e) => console.error(e));

  if (result.error) {
    console.error(`Error processing file ${filePath}`);
    console.error(result.error);
    process.exit(1);
  }

  writeFileSync(filePath, result.code, { encoding: 'utf8' });
  if (sourceMapGenerationEnabled) {
    console.debug(`Writing sourceMap to ${sourceMapPath}`);
    writeFileSync(sourceMapPath, result.map, { encoding: 'utf8' });
  } else {
    if (sourceMapExists) {
      console.debug(`Deleting sourceMap ${sourceMapPath}`);
      unlinkSync(sourceMapPath);
    }
  }
}
