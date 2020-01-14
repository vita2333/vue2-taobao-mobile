const gulp = require('gulp')
const conventionalChangelog = require('gulp-conventional-changelog')
const bump = require('gulp-bump')
const gutil = require('gulp-util')
const git = require('gulp-git')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

const releaseBranch = 'release'
const devBranch = 'dev'

gulp.task('checkout-to-release', (cb) => {
  git.revParse({ args: '--abbrev-ref HEAD' }, (err, currentBranch) => {
    git.checkout(releaseBranch, () => {
      // git checkout [release]
      git.merge(currentBranch, () => {
        if (currentBranch !== releaseBranch) {
          git.branch(currentBranch, { args: '-D' })
        }
        cb()
      })
    })
  })
})

gulp.task('checkout-to-dev', (cb) => {
  git.checkout(devBranch, { args: '-b' }, () => {
    cb()
  })
})

gulp.task('bump-version', () =>
  // 这里我们硬编码了版本更新类型为 'patch'，但是更好的方式是
  // 使用 (https://www.npmjs.com/package/minimist) 模块，定义一个
  // 命令行参数来确定你是需要 'major'，'minor'，还是 'patch' 类型的更新
  gulp
    .src(['./package.json'])
    .pipe(bump({ type: argv.type }).on('error', gutil.log))
    .pipe(gulp.dest('./'))
)

gulp.task('changelog', () =>
  gulp
    .src('CHANGELOG.md', {
      buffer: true,
      allowEmpty: true,
    })
    .pipe(
      conventionalChangelog({
        preset: 'angular', // 或者其他任何你在使用的 commit 信息规范
      })
    )
    .pipe(gulp.dest('./'))
)

gulp.task('commit-changes', () => {
  function getPackageJsonVersion() {
    // 我们自己解析这个 json 文件，因为使用 require 会有缓存
    // 在多次调用的时候，版本号并不会改变
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
  }

  const version = getPackageJsonVersion()
  return gulp.src('.').pipe(git.commit(version))
})

gulp.task('push-changes', (cb) => {
  git.push('origin', releaseBranch, cb) // git push origin [release]
})

gulp.task('create-new-tag', (cb) => {
  function getPackageJsonVersion() {
    // 我们自己解析这个 json 文件，因为使用 require 会有缓存
    // 在多次调用的时候，版本号并不会改变
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
  }

  const version = getPackageJsonVersion()
  git.tag(version, 'Created Tag for version: ' + version, (error) => {
    if (error) {
      return cb(error)
    }
    git.push('origin', { args: '--tags' })
    cb()
  })
})

gulp.task(
  'release',
  gulp.series(
    'checkout-to-release',
    'bump-version',
    'changelog',
    'commit-changes',
    'push-changes',
    'create-new-tag',
    'checkout-to-dev'
    // 'github-release',
  )
)

// //////////////deploy//////////////////
