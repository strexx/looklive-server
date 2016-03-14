var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cssnano = require('gulp-cssnano'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    svgSprite = require('gulp-svg-sprite'),
    nodemon = require('gulp-nodemon');

var svgConfig = {
    dest: '.',
    shape: {
        dimension: {
            maxWidth: 15,
            maxHeight: 15
        },
        spacing: {
            padding: 1,
        },
    },
    mode: {
        css: {
            dest: '.',
            sprite: 'sprite.svg',
            render: {
                css: true
            },
            example: true,
            prefix: '.icn-'
        }
    }
};

// Icon sprite
gulp.task('icons', function () {
    gulp.src('./public//icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

// Styles
gulp.task('styles', function (cb) {
    gulp.src(['./public/styles/*.css', './public/icons/sprite/sprite.css'])
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/dist/css/'))
        .pipe(notify({
            message: 'Styles compiling complete'
        }));
});

// Scripts
gulp.task('scripts', function (cb) {
        gulp.src(['./public/js/appStart.js', './public/js/app.js', './public/js/appRoutes.js', './public/js/appPage.js', './public/js/appGet.js'])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./public/dist/js/'))
            .pipe(notify({
                message: 'Scripts task complete'
            }));
});

// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function () {
    watch('./public/styles/*.css', function () {
        gulp.src(['./public/styles/*.css', './public/icons/sprite/sprite.css'])
            .pipe(concat('style.css'))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(postcss([autoprefixer({
                browsers: ['> 1%', 'IE 7']
            })]))
            .pipe(gulp.dest('./public/dist/css/'))
            .pipe(notify({
                message: 'Styles compiling complete'
            }));
    });
    watch('./public/js/*.js', function () {
        gulp.src(['./public/js/appStart.js', './public/js/app.js', './public/js/appRoutes.js', './public/js/appPage.js', './public/js/appGet.js'])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./public/dist/js/'))
            .pipe(notify({
                message: 'Scripts task complete'
            }));
    });
});
