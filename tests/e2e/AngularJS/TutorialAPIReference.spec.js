  var Url = function(){
	  //we recover some helper functions
	  this.homeUrl = browser.params.homePageObject.homeUrl;
	  this.tutorialUrl = browser.params.tutorialAPIReference.tutorialUrl;
	  this.apiUrl = browser.params.tutorialAPIReference.apiUrl;
  };

  var TopBannerHome = function(){
	  this.topBanner = $('.navbar-inner');
	  this.learnButton = this.topBanner.element(by.linkText('Learn'));
	  this.developButton = this.topBanner.element(by.linkText('Develop'));
	  this.allDropDown = this.topBanner.all(by.css('.dropdown-menu'));
	  this.learnDropDown = this.allDropDown.get(0);
	  this.developDropDown = this.allDropDown.get(1);
	  this.apiReferenceButton = this.developDropDown.element(by.linkText('API Reference'));
	  this.tutorialButton = this.learnDropDown.element(by.linkText('Tutorial'));
  };
  //the menu changes on other pages
  var TopBannerOther = function(){
	  this.topBanner = $('.col-md-9');
	  this.learnButton = this.topBanner.element(by.linkText('Learn'));
	  this.developButton = this.topBanner.element(by.linkText('Develop'));
	  this.allDropDown = this.topBanner.all(by.css('.dropdown-menu'));
	  this.learnDropDown = this.allDropDown.get(0);
	  this.developDropDown = this.allDropDown.get(1);
	  this.apiReferenceButton = this.developDropDown.element(by.linkText('API Reference'));
	  this.tutorialButton = this.learnDropDown.element(by.linkText('Tutorial'));
	  this.searchField = element(by.css('.search-query'));
	  this.searchButton = element(by.css('.search-icon'));
	  this.searchResult = element(by.css('.search-results-container'));
	  this.searchResults = this.searchResult.all(by.repeater('item in value'));
	  this.searchClose = this.searchResult.element(by.css('.search-close'));
  };
  

  xdescribe('Navigate between Pages', function() {
	var url = new Url();
	global.helper.getPage(url.homeUrl);
	var topBannerHome = new TopBannerHome();
	var topBannerOther = new TopBannerOther();

	  it('From Home to Tutorial', function() {
		  //we click on the button first, then the choice in the list
		  topBannerHome.learnButton.click().then(function() {
		  topBannerHome.tutorialButton.click();
		  });

		 global.helper.compareUrl(url.tutorialUrl);
		 global.helper.notCompareUrl(url.homeUrl);

		 });

	  it('From Tutorial to API Reference', function(){
		  topBannerOther.developButton.click().then(function() {
		  topBannerOther.apiReferenceButton.click();
		  });

		 global.helper.compareUrl(url.apiUrl);
		 global.helper.notCompareUrl(url.tutorialUrl);
	  });
  });
  
  describe('Search Field', function(){
	  var url = new Url();
	  global.helper.getPage(url.apiUrl);
	  var topBanner = new TopBannerOther();
	  it('displays a frame with the results of the search', function(){
		topBanner.searchField.click();
		//topBanner.searchField.sendKeys('angular');
		//topBanner.searchField.evaluate('trigger(\'input\')');
		//topBanner.searchField.evaluate('$scope.$apply()');
		//simulate the pressure on the ENTER key
		//topBanner.searchField.sendKeys(protractor.Key.RETURN);
		
		 
		topBanner.searchField.evaluate('search("angular")');
		global.helper.waitUntilReady(topBanner.searchResult);
		
		expect(topBanner.searchResult.isPresent()).toBe(true);
		expect(topBanner.searchResult.isDisplayed()).toBe(true);
		
		expect(topBanner.searchResults.count()).toBeGreaterThan(3); //arbitrary number
		topBanner.searchResults.get(2).click();
		global.helper.compareUrl(browser.params.tutorialAPIReference.equalsUrl);
	});
	
	it('closes the search result frame', function(){
		topBanner.searchField.click();
		topBanner.searchField.evaluate('search("angular")');
		global.helper.waitUntilReady(topBanner.searchResult);
		
		expect(topBanner.searchResult.isPresent()).toBe(true);
		expect(topBanner.searchResult.isDisplayed()).toBe(true);
		
		topBanner.searchClose.click();
		
		expect(topBanner.searchResult.isDisplayed()).toBe(false);
		
	});
});
