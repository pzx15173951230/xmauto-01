// console.log('构建开发环境的包')
let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()
let del = require('del')

// 删除dist目录
task('delDist', async ()=>{
  await del('./dist')
})

// 处理图片
task('img', async ()=>{
  src('./images/*.*')
  .pipe(dest('./dist/images'))
  .pipe(load.connect.reload())
})
task('banner', async ()=>{
  src('./images/banner/*.*')
  .pipe(dest('./dist/images/banner'))
  .pipe(load.connect.reload())
})
task('images', async ()=>{
  src('./images/mitu_files/*.*')
  .pipe(dest('./dist/images/mitu_files'))
  .pipe(load.connect.reload())
})
task('dataimg', async ()=>{
  src('./data/upload/*.*')
  .pipe(dest('./dist/data/upload'))
  .pipe(load.connect.reload())
})
task('upload', async ()=>{
  src('./upload/*.*')
  .pipe(dest('./dist/upload'))
  .pipe(load.connect.reload())
})
task('uploadms', async ()=>{
  src('./upload/ms/*.*')
  .pipe(dest('./dist/upload/ms'))
  .pipe(load.connect.reload())
})
task('datasm', async ()=>{
  src('./data/upload/sm/*.*')
  .pipe(dest('./dist/data/upload/sm'))
  .pipe(load.connect.reload())
})

//处理json
task('json', async ()=>{
  src('./data/*.*')
  .pipe(dest('./dist/data'))
  .pipe(load.connect.reload())
})

//处理php
task('php', async ()=>{
  src('./php/*.*')
  .pipe(dest('./dist/php'))
  .pipe(load.connect.reload())
})
task('phpmod', async ()=>{
  src('./php/interface/model/*.*')
  .pipe(dest('./dist/php/interface/model'))
  .pipe(load.connect.reload())
})

// 处理JS
task('script', async ()=>{
  src('./js/*.js')
  .pipe(load.babel({ presets: ['@babel/env']}))
  .pipe(dest('./dist/js'))
  .pipe(load.connect.reload())
})

// 处理HTML
task('html', async ()=>{
  src('./pages/*.html')
  .pipe(dest('./dist'))
  .pipe(load.connect.reload())
})

// 编译sass
task('sass', async ()=>{
  src('./sass/*.scss')
  .pipe(load.sassChina()) // 把sass转成css
  .pipe(dest('./dist/css'))
  .pipe(load.connect.reload())
})

// 监听文件变化
task('watch', async ()=>{
  watch('./pages/*.html',series('html'))
  watch('./sass/*.scss',series('sass'))
  watch('./img/*.*',series('img'))
  watch('./js/*.js',series('script'))
})

// 自动刷新服务
task('connect', async ()=>{
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3000
  })
})

task('dev', series('delDist','img','banner','images','upload','uploadms','dataimg','datasm','json','phpmod','php','html','script','sass','connect','watch'))
