const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');

function reactComponents(cb) {
  const babelOpts = {
    presets: [
      [
        "react-app",
        {
          "absoluteRuntime": false
        }
      ]
    ],
    ignore: [
      "**/*.test.js",
      "src/setupTests.js"
    ]
  }

  src('src/**/*.js', { ignore: babelOpts.ignore })
    .pipe(babel(babelOpts))
    .pipe(dest('dist'));

  cb();
}

function css(cb) {
  src('src/**/*.css')
    .pipe(dest('dist'));

  cb();
}

function assets(cb) {
  src('src/assets/**')
    .pipe(dest('dist/assets'));

  cb();
}

exports.default = parallel(reactComponents, css, assets)
