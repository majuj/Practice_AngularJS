  var Url = function(){
	  //we recover some helper functions
	  this.compareUrl = require('./helper.js').compareUrl;
	  this.notCompareUrl = require('./helper.js').notCompareUrl;
	  this.getPage = require('./helper.js').getPage;
	  this.homeUrl = browser.params.homePageObject.homeUrl;
	  this.blogUrl = browser.params.blog.blogUrl;
  };

  var TopBannerHome = function(){
	  this.topBanner = $('.navbar-inner');
	  this.discussButton = this.topBanner.element(by.linkText('Discuss'));
	  this.allDropDown = this.topBanner.all(by.css('.dropdown-menu'));
	  this.discussDropDown = this.allDropDown.get(2);
	  this.blogButton = this.discussDropDown.element(by.linkText('Blog'));
  };

  describe('Blog', function() {
	var url = new Url();
	url.getPage(url.homeUrl);
	var topBannerHome = new TopBannerHome();

	  it('is reached from the home page', function() {
		  //we click on the button first, then the choice in the list
		  topBannerHome.discussButton.click().then(function() {
		  topBannerHome.blogButton.click();
		  });

		 browser.driver.isElementPresent(by.css('.blog-admin')).then(function(isPresent){
			url.compareUrl(url.blogUrl);
			url.notCompareUrl(url.homeUrl);
			});
		 });

	  xit('search function shows a preview of the result', function() {
		  //we click on the button first, then the choice in the list
		  topBannerHome.learnButton.click().then(function() {
		  topBannerHome.tutorialButton.click();
		 
		 url.compareUrl(url.tutorialUrl);
		 url.notCompareUrl(url.homeUrl);

		 });

		});
  });
