### Include gulp and plugins ###
gulp         = require 'gulp'
gutil        = require 'gulp-util'
concat       = require 'gulp-concat'
sass         = require 'gulp-sass'
compass      = require 'gulp-compass'
less         = require 'gulp-less'
sourcemaps   = require 'gulp-sourcemaps'
coffee       = require 'gulp-coffee'
image        = require 'gulp-image'
uglify       = require 'gulp-uglify'
rjs          = require 'requirejs'
rename       = require 'gulp-rename'
cache        = require 'gulp-cached'
changed      = require 'gulp-changed'
gulpif       = require 'gulp-if'
minifyCSS    = require 'gulp-minify-css'
plumber      = require 'gulp-plumber'
notify       = require 'gulp-notify'
eco          = require 'gulp-eco'
autoprefixer = require 'gulp-autoprefixer'
inject       = require 'gulp-inject'
rev          = require 'gulp-rev'
revReplace   = require 'gulp-rev-replace'
version      = require 'gulp-version-append'
fingerprint  = require 'gulp-fingerprint'
htmlmin      = require 'gulp-htmlmin'
bower        = require 'gulp-bower'
rsync        = require 'gulp-rsync'
browserSync  = require('browser-sync').create()
argv         = require('yargs').alias('e', 'env').default('e', 'dev').argv


### Config ###
reload = browserSync.reload

paths =
  src:
    self: './src'
    js: './src/js/**/*.js'
    coffee: './src/coffee/**/*.coffee'
    templates: './src/coffee/**/*.eco'
    less: './src/less/*.less'
    sass: './src/sass'
    images: './src/images/**'
    html: './src/*.html'
    fonts: './src/fonts/**'
    videos: './src/videos/**'
    static: './src/static/**'

  dest:
    self: "./#{argv.env}"
    js: "./#{argv.env}/js"
    css: "./#{argv.env}/css"
    images: "./#{argv.env}/images"
    html: "./#{argv.env}"
    fonts: "./#{argv.env}/fonts"
    videos: "./#{argv.env}/videos"
    bower: "./#{argv.env}/components"
    static: "./#{argv.env}/static"

  deploy_to: "/srv/www/front_prezz_tv"

  maps: "./#{argv.env}/js/maps"
  manifest: "./#{argv.env}/rev-manifest.json"

deploy =
  src: paths.dest.self + '/**'
  options:
    hostname: 'prezz'
    username: 'deploy'
    root: "#{argv.env}"
    destination: "/srv/www/front_prezz_tv"
    incremental: true
    progress: true
    relative: true
    emptyDirectories: true
    recursive: true
    clean: true,
    exclude: ['.DS_Store']
    include: []


### Helpers ###
isProd = ->
  argv.env == 'prod'

isRev = ->
  return true if argv.rev


### HTML ###
gulp.task 'html', ['css', 'js', 'assets'], ->
  gulp.src paths.src.html
    .pipe inject gulp.src(["#{paths.dest.css}/*.css"]), { ignorePath: "/#{argv.env}" }
    .pipe version ['html', 'js', 'css']
    .pipe gulpif isProd(), htmlmin
      collapseWhitespace: true

    .pipe gulp.dest paths.dest.html

### Replace by revision ###
gulp.task 'rev:replace', ['html'], ->
  return unless isRev()

  gulp.src ["!#{paths.dest.bower}/**", "#{paths.dest.self}/**/*.+(js|html|css)"]
    .pipe version ['html', 'js', 'css']

    .pipe revReplace
      manifest: gulp.src(paths.manifest)

    .pipe gulp.dest paths.dest.self

gulp.task 'html:clean', ->
  del ["#{paths.dest.html}/*.html"]


### Assets ###

# Images
gulp.task 'images', ->
  gulp.src paths.src.images
    .pipe gulpif isProd(), image()
    .pipe gulpif isRev(), rev()
    .pipe gulp.dest paths.dest.images

    .pipe gulpif isRev(), rev.manifest
      path: paths.manifest
      merge: true

    .pipe gulpif isRev(), gulp.dest './'

gulp.task 'images:clean', ->
  del [paths.dest.images]


# Static
gulp.task 'static', ->
  gulp.src paths.src.static
    .pipe gulp.dest paths.dest.static

gulp.task 'static:clean', ->
  del [paths.dest.static]

# Videos
gulp.task 'videos', ->
  gulp.src paths.src.videos
    .pipe gulpif isRev(), rev()
    .pipe gulp.dest paths.dest.videos

    .pipe gulpif isRev(), rev.manifest
      path: paths.manifest
      merge: true

    .pipe gulpif isRev(), gulp.dest './'

gulp.task 'videos:clean', ->
  del [paths.dest.videos]


# Fonts
gulp.task 'fonts', ['bower'], ->
  gulp.src [
    paths.src.fonts
    "#{paths.dest.bower}/video.js/build/video-js/font/*"
    "#{paths.dest.bower}/semantic/src/themes/default/assets/fonts/*"
  ]
    .pipe gulpif isRev(), rev()
    .pipe gulp.dest paths.dest.fonts

    .pipe gulpif isRev(), rev.manifest
      path: paths.manifest
      merge: true

    .pipe gulpif isRev(), gulp.dest './'

gulp.task 'fonts:clean', ->
  del [paths.dest.fonts]

# Others
gulp.task 'others', ->
  gulp.src [
    "#{paths.src.self}/*.+(xml|txt|ico)"
  ]
    .pipe gulp.dest paths.dest.self

gulp.task 'others:clean', ->
  del ["#{paths.dest.self}/*.+(xml|txt|ico)"]

gulp.task 'assets', ['images', 'videos', 'fonts', 'others', 'static']
gulp.task 'assets:clean', ['images:clean', 'videos:clean', 'fonts:clean', 'others:clean', 'static:clean']


### LESS ###
gulp.task 'less', ['bower'], ->
  gulp.src paths.src.less
    .pipe cache 'less'
    .pipe less paths: [
      "#{paths.dest.bower}"
      "#{paths.dest.bower}/semantic/src"
      "./src/less/semantic/src"
    ]

    .pipe autoprefixer
      browsers: ['> 5%', 'last 2 versions']

    .pipe concat 'main.css'
    .pipe gulpif !isProd(), sourcemaps.init()
    .pipe gulpif isProd(), minifyCSS()
    .pipe gulpif !isProd(), sourcemaps.write()
    .pipe gulpif isRev(), rev()
    .pipe gulp.dest paths.dest.css

    .pipe gulpif isRev(), rev.manifest
      path: paths.manifest
      merge: true

    .pipe gulpif isRev(), gulp.dest './'
    .pipe browserSync.stream()

gulp.task 'less:clean', ->
  del [paths.dest.css]


### SASS ###
gulp.task 'compass', ->
  gulp.src paths.src.sass
    .pipe cache 'compass'
    .pipe compass
      config_file: './compass_config.rb'
      css: "#{paths.dest.self}/css"
      sass: "#{paths.src.self}/sass"
      font: "#{paths.src.self}/fonts"
      image: "#{paths.src.self}/images"
      sourcemap: true
      import_path: [
        "#{paths.dest.bower}"
        "#{paths.dest.bower}/foundation/scss"
      ]
      require: ['sass-css-importer']

    .pipe gulpif isProd(), minifyCSS()
    .pipe gulp.dest paths.dest.css
    .pipe browserSync.stream()

gulp.task 'css', ['less']
gulp.task 'css:clean', ['less:clean']


### JavaScript ###
gulp.task 'js:libs', ->
  gulp.src paths.src.js
    .pipe changed paths.dest.js
    .pipe gulp.dest paths.dest.js
    .pipe browserSync.stream()

gulp.task 'coffee', ->
  gulp.src paths.src.coffee
    .pipe cache 'coffee'
    .pipe gulpif !isProd(), sourcemaps.init()
    .pipe coffee bare: true
    .pipe changed paths.dest.js
    .pipe gulpif !isProd(), sourcemaps.write()
    .pipe gulp.dest paths.dest.js
    .pipe browserSync.stream()


gulp.task 'templates', ->
  gulp.src paths.src.templates
    .pipe cache 'templates'
    .pipe eco
      basePath: "src/coffee/app/modules"

    .pipe changed paths.dest.js
    .pipe gulp.dest paths.dest.js
    .pipe browserSync.stream()

gulp.task 'js', ['coffee', 'js:libs', 'templates', 'bower'], ->
  return unless isProd()

  rjsOption =
    baseUrl: './'
    appDir: paths.dest.js
    mainConfigFile: "#{paths.dest.js}/main.js"
    dir: paths.dest.js
    optimize: "uglify2"
    wrap: false
    wrapShim: true
    preserveLicenseComments: false
    generateSourceMaps: false
    keepBuildDir: true
    allowSourceOverwrites: true

  rjs.optimize rjsOption

gulp.task 'js:clean', ->
  del [paths.dest.js]


### Bower components ###
gulp.task 'bower', ->
  bower directory: paths.dest.bower

gulp.task 'bower:list', ->
  bower
    cmd: 'list'
    directory: paths.dest.bower

gulp.task 'bower:clean', ->
  del [paths.dest.bower]


### RSYNC ###
gulp.task 'rsync', ->
  gulp.src deploy.src
    .pipe rsync deploy.options


### Clean ###
gulp.task 'clean', ->
  del [paths.dest.self]


### Build ###
gulp.task 'build', ['html', 'js', 'css', 'assets', 'rev:replace']


### Deploy ###
gulp.task 'deploy', ['rsync']


### Server ###
gulp.task 'serve', ->
  browserSync.init
    server: { baseDir: argv.env }
    port: 9000
    open: false

  gulp.watch ["#{paths.src.self}/*.html"], ["html"]
  gulp.watch ["#{paths.src.self}/images/*"], ["images"]
  gulp.watch ["#{paths.src.self}/videos/*"], ["videos"]
  gulp.watch ["#{paths.src.self}/js/**/*.js"], ["js:libs"]
  gulp.watch ["#{paths.src.self}/coffee/**/*.eco"], ["templates"]
  gulp.watch ["#{paths.src.self}/coffee/**/*.coffee"], ["coffee"]
  gulp.watch ["#{paths.src.self}/less/**/*.less"], ["less"]
  gulp.watch ["*.html"], { cwd: argv.env }, browserSync.reload


### Default ###
gulp.task 'default', ['serve']
