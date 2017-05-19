import { AngularPhpEmailExamplePage } from './app.po';

describe('angular-php-email-example App', () => {
  let page: AngularPhpEmailExamplePage;

  beforeEach(() => {
    page = new AngularPhpEmailExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
