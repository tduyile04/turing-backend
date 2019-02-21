const { task, watch, src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

require('dotenv').config();

task('build:dev', () => {
  return src('src/**/*.js', { sourcemaps: true })
    .pipe(babel())
    .pipe(dest('./dist/src', { sourcemaps: true }));
});

task('build:prod', () => {
  return src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('./dist/src'));
});

// Watch the file changes in the src folder
task('watch:dev', cb => {
  watch('src/**/*.js', task('build:dev'));
  cb();
});

let run;

switch (process.env.NODE_ENV) {
  case 'development':
    run = task('watch:dev');
    break;
  case 'production':
    run = task('build:prod');
    break;
  default:
    run = task('watch:dev');
    break;
}

exports.default = run;