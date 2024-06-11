/* eslint-disable unicorn/prefer-module */
const gulp = require('gulp')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync')

const sass = require('gulp-sass')(require('sass'))

let BUILD = false
let distDir = './.tmp'
let demoDir = './.tmp'
let srcDir = './ui'

function defaultTask(cb) {
  // place code for your default task here
  console.log('hello gulp')
  cb()
}
// 基本的构建相关的函数
exports.buildOn = (cb) => {
  BUILD = true
  distDir = './dist'
  demoDir = './demo'

  cb()
}
// 清理临时文件夹
exports.cleanDir = (cb) => {
  gulp.src(`{${distDir}/*,${demoDir}/*}`, { read: false }).pipe(clean())
  cb()
}

exports.taskSass = (cb) => {
  gulp
    .src(`${srcDir}/scss/demo.scss`)
    .pipe(
      sass({
        includePaths: ['node_modules'],
        style: 'expanded',
        precision: 7,
        importer: (url, prev, done) => {
          if (url[0] === '~') {
            url = path.resolve('node_modules', url.substr(1))
          }

          return { file: url }
        },
      }).on('error', sass.logError)
    )
    .pipe(postcss([require('autoprefixer')]))
    .pipe(gulp.dest(`${distDir}/css/`))
  cb()
}

exports.default = defaultTask
