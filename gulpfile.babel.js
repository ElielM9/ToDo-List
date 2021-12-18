const { src, dest, watch, parallel } = require(`gulp`);

//CSS
const sass = require(`gulp-sass`)(require(`sass`));
const plumber = require(`gulp-plumber`);
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const postcss = require(`gulp-postcss`);
const sourcemaps = require(`gulp-sourcemaps`);

//JAVASCRIPT
const babel = require(`gulp-babel`);
const terser = require(`gulp-terser-js`);

//CONCAT
const concat = require(`gulp-concat`);

function css(done) {
  src(`src/scss/**/*.scss`) //Identificar el archivo sass a compilar
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass()) //Compilar
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write(`.`))
    .pipe(dest(`public/styles`)); //Almacenar en el disco duro

  done();
}

function javaScript(done) {
  src(`src/js/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(concat("scripts-min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest(`public/js`));

  done();
}

function dev(done) {
  watch(`src/scss/**/*.scss`, css);
  watch(`src/js/**/*.js`, javaScript);

  done();
}

exports.css = css;
exports.js = javaScript;
exports.dev = parallel(dev);
