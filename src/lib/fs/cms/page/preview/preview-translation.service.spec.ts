import { TestBed } from '@angular/core/testing';

import { PreviewTranslationService, PreviewTranslationKey } from './preview-translation.service';
import { TranslationService } from '@spartacus/core';
import { of, combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { errorToString } from 'fs-spartacus-common';

class MockTranslationService extends TranslationService {
  constructor() {
    super();
  }
  translate = (key: string, replacements?: any): Observable<string> => of(`${key}__${JSON.stringify(replacements)}`);
}

async function setupTestBed() {
  await TestBed.configureTestingModule({
    declarations: [],
    imports: [],
    providers: [
      {
        provide: TranslationService,
        useValue: new MockTranslationService(),
      },
    ],
  }).compileComponents();
}

describe('PreviewTranslationService', () => {
  it('should be created', async () => {
    await setupTestBed();
    const service: PreviewTranslationService = TestBed.inject(PreviewTranslationService);
    expect(service).toBeTruthy();
  });

  it('should try to resolve all translations for a given dialog key', async () => {
    await setupTestBed();
    const service: PreviewTranslationService = TestBed.inject(PreviewTranslationService);
    const replacements = { errorMessage: errorToString(new Error('Just a test error')) };
    const [title$, message$, detailedMessage$] = service.resolveDialogTexts(PreviewTranslationKey.MISSING_FS_PAGE_MAPPING, replacements);
    combineLatest([title$, message$, detailedMessage$])
      .pipe(take(1))
      .subscribe((resultData) => {
        const [title, message, detailedMessage] = resultData;
        expect(title).toEqual(`${PreviewTranslationKey.MISSING_FS_PAGE_MAPPING}.title__${JSON.stringify(replacements)}`);
        expect(message).toEqual(`${PreviewTranslationKey.MISSING_FS_PAGE_MAPPING}.message__${JSON.stringify(replacements)}`);
        expect(detailedMessage).toEqual(
          `${PreviewTranslationKey.MISSING_FS_PAGE_MAPPING}.detailedMessage__${JSON.stringify(replacements)}`
        );
      });
  });
});
