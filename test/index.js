const gulp = require('gulp');
const clean = require('gulp-clean');
const editFile = require('..');
const { greetings } = require('./config');

gulp.task('clean', () => {
  return gulp
    .src('test/dist/index.js', { allowEmpty: true })
    .pipe(clean());
});

gulp.task('edit', () => {
  return gulp
    .src('test/src/index.js')
    .pipe(editFile((content, fileName) => {
      return `${greetings}${content}`;
    }))
    .pipe(gulp.dest('test/dist'));
});
