var gulp = require('gulp'),
	protractorQA = require('gulp-protractor-qa');

// Registering the task
gulp.task('protractor-qa', function() {
    protractorQA.init({
        testSrc : 'tests/e2e/AngularJS/*.spec.js',
		configFile: 'tests/e2e/conf.js',
        viewSrc : [ 'https://angularjs.org/']
    });
});

// Running it
gulp.task('default', ['protractor-qa']);