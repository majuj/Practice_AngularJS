  var DropDown = function(){
	  this.header = $('.sup-header');
	  this.banner = this.header.$('.grid-left');
	  this.buildList = this.banner.element(by.tagName('select'));
	  this.latestBuild = this.buildList.$('option[selected="selected"]');
	  //$('option[selected="selected"]') searches for an element, by css, 
	  //starting with option and having the attribute selected=selected
  };
  
  describe('DropDown List', function() {
	  var dropDown = new DropDown();
	  var valueDD = browser.params.dropDown.valueDD;
	  var lastValueDD = browser.params.dropDown.lastValueDD;
	  var originUrl = browser.params.dropDown.originUrl;
	  var expectedUrl = browser.params.dropDown.expectedUrl;
	  var newUrl = '';
	  
	  browser.get(originUrl);
	  	  	  
	  it('changes the version of the build displayed', function() {
		  expect(dropDown.latestBuild.getText()).toEqual(lastValueDD);
		  
		//we search the value in the list with label=the value we want
		//click on the value to change the selection for the dropdown list
		  dropDown.buildList.$('option[label="'+valueDD+'"]').click()
		  .then(function(){
			  		browser.getCurrentUrl()
					.then(function(url) {
						expect(url).not.toEqual(originUrl); 
						expect(url).toEqual(expectedUrl);  
					});
		  });
		  expect(dropDown.latestBuild.getText()).toEqual(valueDD);
		   
		 });
  });
  