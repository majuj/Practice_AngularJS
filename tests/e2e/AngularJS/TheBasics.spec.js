  var TheBasics = function(){
	  this.helloBox = element.all(by.css('.row.example')).get(0);
	  this.nameField = this.helloBox.element(by.model('yourName'));
	  this.helloOutput = this.helloBox.element(by.tagName('h1'));
  };
  
  var HomePage = function() {
  this.centerStageButtons = element(by.css('.center.stage-buttons'));
  this.viewOnGitHubButton = this.centerStageButtons.all(by.css('.btn.btn-large')).get(0);
  this.downloadButton = this.centerStageButtons.element(by.css('.btn-primary'));
  this.designDocsButton = this.centerStageButtons.element(by.css('.btn-warning')); 
  };
  
  describe('In The Basics Tutorial', function() {
	  beforeEach(function() {
		  browser.get('https://angularjs.org/');
	  });
	  var homePage = new HomePage();
	  var theBasics = new TheBasics();
	  var name = 'yourname';
	  it('entering a name should output "Hello Name"', function() {
		  theBasics.nameField.click();
		  theBasics.nameField.sendKeys(name);
		  expect(theBasics.helloOutput.getText()).toContain(name);
		  expect(theBasics.helloOutput.getText()).toEqual('Hello ' + name + '!');
	  });	  
  });