var gulp = require('gulp'),
    browserify = require('browserify');
    source = require('vinyl-source-stream');

var config = {
    js: {
        src: './app/app.js',
        outputDir: './',
        outputFile: 'bundle.js'
    }
}

gulp.task('bundle', function () {
    var bundler = browserify(config.js.src);
    bundler
        .bundle()
        .pipe(source(config.js.outputFile))
        .pipe(gulp.dest(config.js.outputDir));
});

gulp.task('watch-bundle', function () {
    gulp.watch('./app/**/*.js', ['bundle']);
});

