import { AdhousePage } from './app.po';

describe('adhouse App', () => {
  let page: AdhousePage;

  beforeEach(() => {
    page = new AdhousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
