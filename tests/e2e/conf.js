exports.config = {
  
  directConnect: true,
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
  HomePageObject: './AngularJS/HomePageObject.spec.js',
  DownloadModal: './AngularJS/DownloadModal.spec.js',
  TheBasics: './AngularJS/TheBasics.spec.js',
  ToDoList: './AngularJS/ToDoList.spec.js',
  DropDown: './AngularJS/DropDown.spec.js',
  TutorialAPIReference: './AngularJS/TutorialAPIReference.spec.js'
  },
  multiCapabilities: [
  {browserName: 'chrome'}
  ], 
  onPrepare: function() {
	global.helper = require('./AngularJS/helper.js');
	browser.waitForAngular;
	browser.driver.manage().window().setSize(1080, 860);
	browser.get(browser.params.homePageObject.homeUrl);
	},
	
	params: {
		dropDown: {
			originUrl: 'https://docs.angularjs.org/tutorial',
			expectedUrl: 'https://code.angularjs.org/1.4.0-beta.2/docs/tutorial',
			valueDD: 'v1.4.0-beta.2',
			lastValueDD : 'v1.4.5-build.4185 (snapshot)'
		},
		homePageObject: {
			homeUrl: 'https://angularjs.org/'
		},
		tutorialAPIReference: {
			tutorialUrl: 'https://docs.angularjs.org/tutorial',
			apiUrl: 'https://docs.angularjs.org/api',
			equalsUrl: 'https://docs.angularjs.org/api/ng/function/angular.equals'
		}
	}
};