var gulp = require('gulp');
var server = require('gulp-express');
var exec = require('child_process').exec;

gulp.task('default', function(cb){
    server.run(['server/main.js']);
});

gulp.task('angular', function(cb){
    exec('(cd angular.js && ng serve --port 8080 )',function(err){
		if (err) return cb(err); // return error
	});	
});

gulp.task('aurelia', function(cb){
    server.run(['server/main.js']);
    exec('(cd aurelia.js && http-server -o -c-1 -p 8080)',function(err){
		if (err) return cb(err); // return error
	});	
});
