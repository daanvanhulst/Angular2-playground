var gulp = require('gulp');
var rimraf = require('rimraf');
var ts = require('gulp-typescript');
var inject = require('gulp-inject');
var connect = require('gulp-connect');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['build']);
gulp.task('build', ['clean', 'scripts', 'copy', 'copy-assets', 'index']);

gulp.task('clean', function(cb) {
    rimraf('./tmp', cb)
});

gulp.task('scripts', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('tmp'));
});

gulp.task('copy', function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js'
    ],{base: './'})
        .pipe(gulp.dest('tmp/'));
});

gulp.task('copy-assets', function () {
    return gulp.src([
            'app/**/*.html',
            'app/**/*.css'
        ],{base: './'})
        .pipe(gulp.dest('tmp/'));
});

gulp.task('index', function() {
    var target = gulp.src('index.html');
    var sources = gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js'
    ], {read: false});
    return target.pipe(inject(sources))
        .pipe(gulp.dest('tmp/'));
});

gulp.task('webserver', function() {
    connect.server({
        port: 3030,
        livereload: true,
        root: ['tmp']
    });
});