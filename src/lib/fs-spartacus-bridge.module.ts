import { FsCmsPageModule } from './fs/cms/page/fs-cms-page.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CmsConfig, Config, ConfigModule, HttpErrorHandler, provideConfig } from '@spartacus/core';
import { translations } from './fs/translations/translations';
import { FsEditingOverlayComponent } from './fs-editing-overlay/fs-editing-overlay.component';
import { CommonModule } from '@angular/common';
import { OutletModule, PageComponentModule } from '@spartacus/storefront';
import { CaasForbiddenHandler } from './fs/caas/caas-forbidden.handler';
import { CaasUnauthorizedHandler } from './fs/caas/caas-unauthorized.handler';
import { FsEditingAreaComponent } from './fs-editing-area/fs-editing-area.component';
import { FsSpartacusBridgeConfig, FsSpartacusCommonModule } from 'fs-spartacus-common';

/**
 * Base Module of the Library that configures the processing of CMS page by importing
 * {@link FsCmsPageModule} and sets up the error handlers
 */
@NgModule({
  declarations: [FsEditingOverlayComponent, FsEditingAreaComponent],
  imports: [
    FsSpartacusCommonModule,
    CommonModule,
    FsCmsPageModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FsEditingOverlay: {
          component: FsEditingOverlayComponent,
        },
        FsEditingArea: {
          component: FsEditingAreaComponent,
        },
      },
    } as CmsConfig),
    PageComponentModule,
    OutletModule,
  ],
  providers: [
    {
      provide: HttpErrorHandler,
      useClass: CaasForbiddenHandler,
      multi: true,
    },
    {
      provide: HttpErrorHandler,
      useClass: CaasUnauthorizedHandler,
      multi: true,
    },
    provideConfig({
      i18n: { resources: translations },
    }),
  ],
  exports: [FsEditingOverlayComponent, FsEditingAreaComponent],
  entryComponents: [FsEditingOverlayComponent, FsEditingAreaComponent],
})
export class FsSpartacusBridgeModule {
  static withConfig(config: FsSpartacusBridgeConfig): ModuleWithProviders<FsSpartacusBridgeModule> {
    return {
      ngModule: FsSpartacusBridgeModule,
      providers: [{ provide: FsSpartacusBridgeConfig, useExisting: Config }, provideConfig(config)],
    };
  }
}
