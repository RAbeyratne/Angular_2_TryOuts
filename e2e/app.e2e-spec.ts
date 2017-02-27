import { AngularBetaTestPage } from './app.po';

describe('angular-beta-test App', () => {
  let page: AngularBetaTestPage;

  beforeEach(() => {
    page = new AngularBetaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
