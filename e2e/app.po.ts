import { browser, by, element } from 'protractor';

export class MyDreamAppPage {
  navigateTo() {
    return browser.get('/');
  }


getTodos() {
    return element(by.css('app-root h1')).getText();
  }
}
