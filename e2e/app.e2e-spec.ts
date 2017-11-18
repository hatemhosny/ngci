import { NgciPage } from './app.po';

describe('ngci App', () => {
  let page: NgciPage;

  beforeEach(() => {
    page = new NgciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
