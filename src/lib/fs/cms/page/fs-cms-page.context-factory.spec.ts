import { FsCmsPageContextFactory } from './fs-cms-page.context-factory';
import { TestBed } from '@angular/core/testing';
import { PageType } from '@spartacus/core';

describe('FsCmsPageContextFactory', () => {
  it('should wrap all passed values into a PageContext object', () => {
    const contextFactory: FsCmsPageContextFactory = TestBed.inject(FsCmsPageContextFactory);
    expect(contextFactory.createPageContextFor('myPage', PageType.CATALOG_PAGE)).toEqual({ id: 'myPage', type: PageType.CATALOG_PAGE });
    expect(contextFactory.createPageContextFor('myPage', PageType.CATEGORY_PAGE)).toEqual({ id: 'myPage', type: PageType.CATEGORY_PAGE });
    expect(contextFactory.createPageContextFor('myPage', PageType.CONTENT_PAGE)).toEqual({ id: 'myPage', type: PageType.CONTENT_PAGE });
    expect(contextFactory.createPageContextFor('myPage', PageType.PRODUCT_PAGE)).toEqual({ id: 'myPage', type: PageType.PRODUCT_PAGE });
    expect(contextFactory.createPageContextFor(null, null)).toEqual({ id: null, type: null });
    expect(contextFactory.createPageContextFor({ prop: 'value' } as any, 'unknownPageType' as any)).toEqual({
      id: { prop: 'value' } as any,
      type: 'unknownPageType' as any,
    });
  });
});
