import { FsSpartacusBridgeModule } from '../../../../fs-spartacus-bridge.module';
import { TppWrapperService } from '../tpp-wrapper-service';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

import { PreviewDialogService } from './preview-dialog.service';
import createSpy = jasmine.createSpy;
import { of } from 'rxjs';
import { ConfigModule, CmsService } from '@spartacus/core';
import { RouterTestingModule } from '@angular/router/testing';

class MockTppWrapperService extends TppWrapperService {
  showErrorMessageDialog = createSpy('TppWrapperService.showErrorMessageDialog').and.returnValue(async () => Promise.resolve());
}

describe('PreviewDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: { baseUrl: 'baseUrl', project: 'project', apiKey: 'apiKey', tenantId: 'defaultTenant' },
              firstSpiritManagedPages: [],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: CmsService, useValue: { getCurrentPage: () => of({}) } },
        { provide: TppWrapperService, useClass: MockTppWrapperService },
      ],
    });
  });

  it('should be created', () => {
    const service: PreviewDialogService = TestBed.inject(PreviewDialogService);
    const wrapperService: TppWrapperService = TestBed.inject(TppWrapperService as Type<MockTppWrapperService>);
    expect(service).toBeTruthy();
    expect(wrapperService).toBeTruthy();
  });

  it('should try to show an error detailed dialog via tpp', () => {
    const service: PreviewDialogService = TestBed.inject(PreviewDialogService);
    const wrapperService: TppWrapperService = TestBed.inject(TppWrapperService);
    service.showDetailedErrorDialog(of('title'), of('message'), of('detailedMessage'));
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith('title', 'message', 'detailedMessage');
    service.showDetailedErrorDialog(of('title2'), of('message2'));
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith('title2', 'message2', '');
    service.showDetailedErrorDialog(null, null);
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith('', '', '');
    service.showDetailedErrorDialog(of(null), of(null));
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith(null, null, '');
  });

  it('should try to show an error dialog via tpp', () => {
    const service: PreviewDialogService = TestBed.inject(PreviewDialogService);
    const wrapperService: TppWrapperService = TestBed.inject(TppWrapperService);
    service.showErrorDialog(of('title'), of('message'));
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith('title', 'message');
    service.showErrorDialog(null, null);
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith('', '');
    service.showErrorDialog(of(null), of(null));
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalled();
    expect(wrapperService.showErrorMessageDialog).toHaveBeenCalledWith(null, null);
  });
});
