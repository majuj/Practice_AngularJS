//Function to compare the current Url with the expected one
var compareUrl = function(expectedUrl){
	browser.getCurrentUrl().then(function(url){
		return expect(url).toEqual(expectedUrl);
	})
};
module.exports.compareUrl = compareUrl;

//Function to compare the current Url with one we don't expect
var notCompareUrl = function(expectedUrl){
	browser.getCurrentUrl().then(function(url){
		return expect(url).not.toEqual(expectedUrl);
	})
};
module.exports.notCompareUrl = notCompareUrl;

//Get the desired page
var getPage = function(url){
	browser.get(url);
};
module.exports.getPage = getPage;

// Function to wait for an element to be present and displayed. Timeout = 10s
var waitUntilReady = function (elm) {
    browser.wait(function () {
        return elm.isPresent();
    },10000);
    browser.wait(function () {
        return elm.isDisplayed();
    },10000);
};
module.exports.waitUntilReady = waitUntilReady;
