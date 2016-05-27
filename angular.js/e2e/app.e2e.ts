import { AngularJsPage } from './app.po';

describe('angular-js App', function() {
  let page: AngularJsPage;

  beforeEach(() => {
    page = new AngularJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-js works!');
  });
});
