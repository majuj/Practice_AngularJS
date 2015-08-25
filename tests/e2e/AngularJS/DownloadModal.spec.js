var DownloadModal = function() {
	this.downloadModal = element(by.css('.download-modal'));
};

var HomePage = function() {
  this.centerStageButtons = element(by.css('.center.stage-buttons'));
  this.viewOnGitHubButton = this.centerStageButtons.all(by.css('.btn.btn-large')).get(0);
  this.downloadButton = this.centerStageButtons.element(by.css('.btn-primary'));
  this.designDocsButton = this.centerStageButtons.element(by.css('.btn-warning')); 
  this.homeUrl = browser.params.homePageObject.homeUrl;
  this.getPage = require('./helper.js').getPage; 
  this.waitUntilReady = require('./helper.js').waitUntilReady;
  };
  
describe('Download button', function() {
    	var homePage = new HomePage();
    	var downloadModal = new DownloadModal();
    
    	beforeEach(function() {
        		homePage.getPage(homePage.homeUrl);
    	}); 

    	it('should open up a download modal', function() {
        	expect(downloadModal.downloadModal.isPresent()).toBe(false); 
       		homePage.downloadButton.click();
			homePage.waitUntilReady(downloadModal.downloadModal);
        	expect(downloadModal.downloadModal.isPresent()).toBeTruthy();
        	expect(downloadModal.downloadModal.isDisplayed()).toBeTruthy();
    	});    
});

