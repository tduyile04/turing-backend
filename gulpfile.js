const { task, watch, src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');

require('dotenv').config();

task('clean:build', () => {
  return del(['dist']);
});

task('build:dev', () => {
  return src('src/**/*', { sourcemaps: true })
    .pipe(babel())
    .pipe(dest('./dist/src', { sourcemaps: true }));
});

task('build:prod', () => {
  return src('src/**/*')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('./dist/src'));
});

// Watch the file changes in the src folder
task('watch:dev', cb => {
  watch('src/**/*.js', series(task('clean:build'), task('build:dev')));
  cb();
});

let run;

switch (process.env.NODE_ENV) {
  case 'development':
    run = series(task('clean:build'), task('build:dev'), task('watch:dev'));
    break;
  case 'production':
    run = task('build:prod');
    break;
  default:
    run = task('watch:dev');
    break;
}

exports.default = run;
