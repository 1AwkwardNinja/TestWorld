import '../assets/globals';

export default function() {
  this.Given(/^I am on page$/, () => {
    global.browser.url(global.ROUTES.ROOT);
  });

  this.When(/^I search image$/, item => {
    global.browser.waitForExist('[data-bdd="image"]');
    global.browser.isVisible('[data-bdd="image"]');
  });
}
