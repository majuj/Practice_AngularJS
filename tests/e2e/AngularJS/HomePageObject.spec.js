  var HomePage = function() {
  this.centerStageButtons = element(by.css('.center.stage-buttons'));
  this.viewOnGitHubButton = this.centerStageButtons.all(by.css('.btn.btn-large')).get(0);
  this.downloadButton = this.centerStageButtons.element(by.css('.btn-primary'));
  this.designDocsButton = this.centerStageButtons.element(by.css('.btn-warning')); 
  this.homeUrl = browser.params.homePageObject.homeUrl;
  this.getPage = require('./helper.js').getPage; 
  this.compareUrl = require('./helper.js').compareUrl; 
  
  };
  
  var HomeTopBanner = function() {
	  this.homeUrl = browser.params.homePageObject.homeUrl;
	  this.topBanner = element(by.css('.navbar-inner'));
	  this.homeButton = this.topBanner.element(by.css('.icon-home'));
  };

  describe('HomePage', function() {
	  var homePage = new HomePage();
	  beforeEach(function() {
		  homePage.getPage(homePage.homeUrl);
	  });
	  it('should have a three buttons displayed', function() {
		  expect(homePage.viewOnGitHubButton.isPresent()).toBe(true);
		  expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);
		  expect(homePage.downloadButton.isPresent()).toBe(true);
		  expect(homePage.downloadButton.isDisplayed()).toBe(true);
		  expect(homePage.designDocsButton.isPresent()).toBe(true);
		  expect(homePage.designDocsButton.isDisplayed()).toBe(true);
	  });
	  it('should have no button missing', function() {
		  expect(homePage.viewOnGitHubButton.isPresent()).not.toBe(false);
		  expect(homePage.viewOnGitHubButton.isDisplayed()).not.toBe(false);
		  expect(homePage.downloadButton.isPresent()).not.toBe(false);
		  expect(homePage.downloadButton.isDisplayed()).not.toBe(false);
		  expect(homePage.designDocsButton.isPresent()).not.toBe(false);
		  expect(homePage.designDocsButton.isDisplayed()).not.toBe(false);
	  });
  });
  
 
  describe('Home button',function(){
	  var homeTopBanner = new HomeTopBanner();
	  var homePage = new HomePage();
	  homePage.getPage(homePage.homeUrl);
	       it('takes back to Home', function(){
			homeTopBanner.homeButton.click().then(function(){
				homePage.compareUrl(homePage.homeUrl);
			}); 
		});
  });