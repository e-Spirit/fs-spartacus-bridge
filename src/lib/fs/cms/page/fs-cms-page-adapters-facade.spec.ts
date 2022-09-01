import { TppStatusService } from './tpp-status-service';
import { TestBed } from '@angular/core/testing';
import { FsCmsPageAdaptersFacade, LIVE_FS_CMS_PAGE_ADAPTER, PREVIEW_FS_CMS_PAGE_ADAPTER } from './fs-cms-page-adapters-facade';
import { CmsPageAdapter, PageType } from '@spartacus/core';
import { of } from 'rxjs';
import { Type } from '@angular/core';
import createSpy = jasmine.createSpy;

class MockFsCmsPageAdapter extends CmsPageAdapter {
  constructor(private loadResult: any) {
    super();
  }
  load = createSpy('FsCmsPageAdapter.load').and.returnValue(of(this.loadResult));
}

describe('FsCmsPageAdaptersFacade', () => {
  let previewAdapter: CmsPageAdapter;
  let previewAdapter2: CmsPageAdapter;
  let liveAdapter: CmsPageAdapter;
  let liveAdapter2: CmsPageAdapter;
  const pageContext = { id: 'homepage', type: PageType.CONTENT_PAGE };

  beforeEach(() => {
    previewAdapter = new MockFsCmsPageAdapter('previewLoadResult');
    previewAdapter2 = new MockFsCmsPageAdapter('previewLoadResult2');
    liveAdapter = new MockFsCmsPageAdapter('liveLoadResult');
    liveAdapter2 = new MockFsCmsPageAdapter('liveLoadResult2');
    TestBed.configureTestingModule({
      providers: [
        FsCmsPageAdaptersFacade,
        { provide: PREVIEW_FS_CMS_PAGE_ADAPTER, useValue: previewAdapter, multi: true },
        { provide: PREVIEW_FS_CMS_PAGE_ADAPTER, useValue: previewAdapter2, multi: true },
        { provide: LIVE_FS_CMS_PAGE_ADAPTER, useValue: liveAdapter, multi: true },
        { provide: LIVE_FS_CMS_PAGE_ADAPTER, useValue: liveAdapter2, multi: true },
        { provide: TppStatusService, useValue: { isFirstSpiritPreview: () => of(false) } },
      ],
    });
  });

  describe('should call the correct adapters', () => {
    it('in the preview', (done) => {
      TestBed.overrideProvider(TppStatusService, {
        useValue: { isFirstSpiritPreview: () => of(true) },
      });

      const facade = TestBed.inject(FsCmsPageAdaptersFacade as Type<FsCmsPageAdaptersFacade>);
      facade.load(pageContext).subscribe(() => {
        expect(previewAdapter.load).toHaveBeenCalledWith(pageContext);
        expect(previewAdapter2.load).toHaveBeenCalledWith(pageContext);
        expect(liveAdapter.load).not.toHaveBeenCalled();
        expect(liveAdapter2.load).not.toHaveBeenCalled();
        done();
      });
    });

    it('in the live storefront', (done) => {
      const facade = TestBed.inject(FsCmsPageAdaptersFacade as Type<FsCmsPageAdaptersFacade>);
      facade.load(pageContext).subscribe(() => {
        expect(liveAdapter.load).toHaveBeenCalledWith(pageContext);
        expect(liveAdapter2.load).toHaveBeenCalledWith(pageContext);
        expect(previewAdapter.load).not.toHaveBeenCalled();
        expect(previewAdapter2.load).not.toHaveBeenCalled();
        done();
      });
    });
  });

  it('should merge all adapter results', (done) => {
    TestBed.overrideProvider(TppStatusService, {
      useValue: { isFirstSpiritPreview: () => of(true) },
    });

    const facade = TestBed.inject(FsCmsPageAdaptersFacade as Type<FsCmsPageAdaptersFacade>);
    let verifiedResults = 0;
    facade.load(pageContext).subscribe((result) => {
      expect(previewAdapter.load).toHaveBeenCalledWith(pageContext);
      expect(previewAdapter2.load).toHaveBeenCalledWith(pageContext);
      if (verifiedResults === 0) {
        expect(result).toEqual('previewLoadResult' as any);
        verifiedResults++;
      } else {
        expect(result).toEqual('previewLoadResult2' as any);
        verifiedResults++;
        done();
      }
    });
  });
});
