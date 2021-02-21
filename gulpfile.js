const { src, dest, parallel, series, watch } = require('gulp')
const browserSync 	 = require('browser-sync').create();
const concat		 = require('gulp-concat');
const uglify		 = require('gulp-uglify-es').default;
const sass			 = require('gulp-sass');
const less			 = require('gulp-less');
const autoprefixer	 = require('gulp-autoprefixer');
const cleanCss	 	 = require('gulp-clean-css');

function browsersync() {
	browserSync.init({
		server: {baseDir: 'app/'},
		notify: false,
		// online: false // для работы без интернета
	})
}

function styles() {
	return src('app/scss/style.scss')
	.pipe(sass())
	// .pipe(concat('style.min.css'))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleanCss(( {level: { 1: {specialComments: 0 } },/* format: 'beautify' */ } ))) //format: 'beautify' Это для красивого развернутого кода
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream())
}

function normalize() {
	return src([
		'node_modules/normalize-css/normalize.css',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
	])
	.pipe(concat('libs.css'))
	.pipe(dest('app/css/'))
}

function scripts() {
	return src([		
		'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
		'app/js/main.js',
	])
	.pipe(concat('app.min.js'))
	// .pipe(uglify())
	.pipe(dest('app/js/'))
	.pipe(browserSync.stream())
}

function startwatch() {
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	watch('app/**/*.html').on('change', browserSync.reload);
	watch('app/**/*.scss', styles);
}

exports.browsersync = browsersync;
exports.scripts 	= scripts;
exports.styles 		= styles;
exports.normalize 	= normalize;

exports.default 	= parallel(scripts, normalize, styles, browsersync, startwatch);




