export class AngularJsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-js-app h1')).getText();
  }
}
