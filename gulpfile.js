/**
 * @file file description here
 * @author winstar1688
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
 
gulp.task('webserver', function () {
    connect.server();
});
 
gulp.task('default', ['webserver']);