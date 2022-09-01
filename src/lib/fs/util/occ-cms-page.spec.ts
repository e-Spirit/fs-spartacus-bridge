import { PageContext, PageType } from '@spartacus/core';
import { extractPageUniqueId } from './occ-cms-pages';

function generatePageContext(id: string | null | undefined, pageType?: PageType): PageContext {
  return { id, type: pageType };
}

describe('OccCmsPage utility test', () => {
  it('should return only the ID as pageId for non-numeric IDs', () => {
    const pageContext = generatePageContext('homepage', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: 'homepage', firstSpiritPageId: 'homepage' });
  });

  it('should return the ID and pageType merged with an underscore for numeric IDs', () => {
    const pageContext = generatePageContext('1234', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({
      pageId: `${PageType.CONTENT_PAGE}_1234`,
      firstSpiritPageId: `${PageType.CONTENT_PAGE}_1234`,
    });
  });

  it('should return only the ID if no pageType is set', () => {
    const pageContext = generatePageContext('1234');
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: `1234`, firstSpiritPageId: '1234' });
  });

  it('should return null as pageId if no id was provided', () => {
    const pageContext = generatePageContext(null);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: null, firstSpiritPageId: null });
  });

  it('should return undefined as pageId if no id was provided', () => {
    const pageContext = generatePageContext(undefined);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: undefined, firstSpiritPageId: undefined });
  });

  it('should merge the params with an underscore', () => {
    const pageContext = generatePageContext('homepage', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: 'homepage', firstSpiritPageId: 'homepage' });
  });

  it('should not add an underscore if only one param is present', () => {
    const pageContext = generatePageContext('homepage', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: 'homepage', firstSpiritPageId: 'homepage' });
  });

  it('should return no pageParams if the params object has no entries', () => {
    const pageContext = generatePageContext('homepage', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: 'homepage', firstSpiritPageId: 'homepage' });
  });

  it('should replace dashes by underscores in firstSpiritPageId', () => {
    const pageContext = generatePageContext('homepage-foo-bar', PageType.CONTENT_PAGE);
    expect(extractPageUniqueId(pageContext)).toEqual({ pageId: 'homepage-foo-bar', firstSpiritPageId: 'homepage_foo_bar' });
  });
});
