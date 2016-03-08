var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    imageop = require('gulp-image-optimization'),
    svgSprite = require('gulp-svg-sprite');

var svgConfig = {
    dest: '.',
    shape: {
        dimension: {
            maxWidth: 20,
            maxHeight: 20
        },
        spacing: {
            padding: 1,
        },
    },
    mode: {
        css: {
            dest: '.',
            sprite: 'css/svg/sprite.svg',
            render: {
                css: {
                    dest: 'css/sprite.css'
                }
            },
            example: true,
            prefix: '.icn-'
        }
    }
};

gulp.task('icons', function () {
    gulp.src('./public/src/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/dist/'));
});

// Styles
gulp.task('styles', function (cb) {
    gulp.src(['./public/src/css/*.css', './public/dist/css/sprite.css'])
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/dist/css/'))
        .pipe(notify({
            message: 'styles task complete'
        }));
});

// Scripts
gulp.task('scripts', function (cb) {
    gulp.src('./public/src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

gulp.task('images', function (cb) {
    gulp.src(['./public/src/images/*.png', './public/src/images/*.jpg', './public/src/images/*.gif', './public/src/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./public/dist/images/')).on('end', cb).on('error', cb);
});


// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});
