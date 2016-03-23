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
    nodemon = require('gulp-nodemon'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
    //responsive = require('gulp-responsive');

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

// Image min
gulp.task('image-min', function () {
    return gulp.src('./public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/dist/images/'))
        .pipe(notify({
            message: 'Image min task complete'
        }));
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

    gulp.src(['./public/js/appStart.js', './public/js/app.js', './public/js/appRoutes.js', './public/js/appPage.js', './public/js/appGet.js', './public/js/appServiceworker.js', './public/js/sw.js'])
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

// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function () {
    watch('./public/styles/*.css', function () {
        gulp.src(['./public/styles/*.css', './public/icons/sprite/sprite.css'])
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/dist/css/'))
        .pipe(notify({
            message: 'Styles compiling complete'
        }));
    });
    watch('./public/js/*.js', function () {
        gulp.src(['./public/js/appStart.js', './public/js/app.js', './public/js/appRoutes.js', './public/js/appPage.js', './public/js/appGet.js', './public/js/appServiceworker.js', './public/js/sw.js'])
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
});
