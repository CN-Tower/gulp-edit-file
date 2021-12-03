const gulp = require('gulp');
require('./test');

gulp.task('testEditFile', gulp.series('clean', 'edit'));
