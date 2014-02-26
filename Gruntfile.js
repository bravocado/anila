module.exports = function(grunt) {
  var hljs = require('highlight.js');
  hljs.LANGUAGES['scss'] = require('./build/lib/scss.js')(hljs);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //anila
    anila: {
      js: ['build/js/anila/anila.js', 'build/js/anila.*.js'],
      scss: ['build/scss/anila.scss']
    },

    // assemble config
    assemble: {
      options: {
        marked: {
          gfm: true,
          sanitize: false,
          highlight: function(code, lang) {
            if (lang === undefined) lang = 'bash';
            if (lang === 'html') lang = 'xml';
            if (lang === 'js') lang = 'javascript';
            return '<div class="code-wrapper">' + hljs.highlight(lang, code).value + '</div>';
          }
        }
      },
      dist_docs: {
        options: {
          flatten: false,
          assets: 'dist/docs/assets',
          data: ['build/doc/data/*.json'],
          partials: ['build/doc/includes/**/**/*.{html,scss}'],
          helpers: ['build/doc/helpers/*.js'],
          layout: 'build/doc/layouts/default.html'
        },
        expand: true,
        cwd: 'build/doc/pages',
        src: '**/*.{html,md}',
        dest: 'dist/docs/'
      },
      sass: {
        options: {
          flatten: false,
          assets: 'dist/docs/assets',
          data: ['build/doc/data/*.json'],
          partials: ['build/doc/includes/sass/**/*.{html,scss}'],
          helpers: ['build/doc/helpers/*js']
        },
        expand: true,
        cwd: 'build/doc/pages/sass',
        src: '**/*.{html,md}',
        dest: 'dist/docs/sass'
      },
      css: {
        options: {
          flatten: false,
          assets: 'dist/docs/assets',
          data: ['build/doc/data/*.json'],
          partials: ['build/doc/includes/css/**/*.{html,scss}'],
          helpers: ['build/doc/helpers/*js']
        },
        expand: true,
        cwd: 'build/doc/pages/css',
        src: '**/*.{html,md}',
        dest: 'dist/docs/css'
      },
      photoshop: {
        options: {
          flatten: false,
          assets: 'dist/docs/assets',
          data: ['build/doc/data/*.json'],
          partials: ['build/doc/includes/photoshop/**/*.{html,scss}'],
          helpers: ['build/doc/helpers/*js']
        },
        expand: true,
        cwd: 'build/doc/pages/photoshop',
        src: '**/*.{html,md}',
        dest: 'dist/docs/photoshop'
      },
      dist_download: {
        options: {
          assets: 'dist/assets'
        },
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },

    // sass config
    sass: {
      dist: {
        options: {
          loadPath: ['build/scss']
        },
        files: {
          'dist/assets/css/anila.css': '<%= anila.scss %>',
          'dist/docs/assets/css/docs.css': 'build/doc/assets/scss/docs.scss'
        }
      },
      dist_compressed: {
        options: {
          style:'compressed',
          loadPath: ['build/scss']
        },
        files: {
          'dist/assets/css/anila.min.css': '<%= anila.scss %>'
        }
      }
    },

    // webfont config
    webfont: {
      icons: {
        src: 'build/icons/*.svg',
        //dest: 'dist/docs/assets/fonts',
        dest: 'build/fonts/',
        destCss: 'build/scss/anila/fonts',
        options: {
          hashes: false,
          stylesheet: 'scss',
          syntax: 'bootstrap',
          font: 'anila',
          ligature: true,
          embed: false,
          relativeFontPath: '../../../assets/fonts/'
        }
      }
    },

    // concat config
    concat: {
      dist: {
        files: {
          'dist/assets/js/anila.js': '<%= anila.js %>'
        }
      }
    },

    // uglify config
    uglify: {
      dist: {
        files: {
          'dist/assets/js/jquery.min.js': ['build/js/vendor/jquery.js'],
          'dist/assets/js/modernizr.min.js': ['build/js/vendor/modernizr.js'],
          'dist/assets/js/anila.min.js': ['<%= anila.js %>'],
          'dist/assets/js/legacy.min.js': ['build/js/vendor/legacy.js'],
          'dist/assets/js/iconfont-fallback.min.js': ['build/js/vendor/iconfont-fallback.js'],
          'dist/docs/assets/js/all.min.js': ['<%= anila.js %>', 'build/doc/assets/js/docs.js', 'build/doc/assets/js/prism.js']
        }
      }
    },

    // copy config
    copy: {
      dist: {
        files: [
          {cwd: 'build/doc/assets/', expand:true, filter: 'isFile', src: 'img/**/*', dest: 'dist/docs/assets/'},
          {cwd: 'build/js/', expand:true, filter: 'isFile', src: ['{anila,vendor}/**/*.js'], dest: 'dist/assets/js'},
          {cwd: 'build/js/vendor/', expand:true, filter: 'isFile', src: ['**/*.js'], dest: 'dist/docs/assets/js/'},
          {cwd: 'build/scss/', expand:true, filter: 'isFile', src: '**/*.scss', dest: 'dist/assets/scss/'},
          {src: 'bower.json', dest: 'dist/assets/'},
          {cwd: 'build/fonts/', expand:true, filter: 'isFile', src:['*'], dest: 'dist/assets/fonts'}
        ]
      }
    },

    // clean config
    clean: ['dist/'],

    /*
    // karma config
    karma: {
      options: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
      },
      continuous: {
        singleRun: true,
        browsers: ['TinyPhantomJS', 'SmallPhantomJS']
      },
      dev: {
        singleRun: true,
        browsers: ['TinyPhantomJS', 'SmallPhantomJS', 'TinyChrome', 'Firefox'],
        reporters: 'dots'
      },
      dev_watch: {
        background: true,
        browsers: ['TinyPhantomJS', 'SmallPhantomJS', 'TinyChrome', 'Firefox']
      },
      mac: {
        singleRun: true,
        browsers: ['TinyPhantomJS', 'SmallPhantomJS', 'TinyChrome', 'Firefox', 'Safari'],
        reporters: 'dots'
      }
    },
    */

    // watch config
    watch_start: {
      grunt: { files: ['Gruntfile.js'] },
      karma: {
        files: [
          'dist/assets/js/*.js',
          'dist/assets/css/*.css'
        ],
        /*
        tasks: ['karma:dev_watch:run']
        */
      },

      styles: {
        files: ['build/scss/**/*.scss', 'build/doc/assets/**/*.scss'],
        tasks: ['sass'],
        options: {livereload:true}
      },
      js: {
        files: ['build/js/**/*.js', 'build/doc/assets/js/**/*.js'],
        tasks: ['copy', 'concat', 'uglify'],
        options: {livereload:true}
      },
      dist_docs: {
        files: ['build/doc/{includes,layouts}/**/*.html'],
        tasks: ['assemble'],
        options: {livereload:true}
      },
      dist_docs_pages: {
        files: ['build/doc/pages/**/*.html'],
        tasks: ['newer:assemble'],
        options: {livereload:true}
      },
      dist_sass_docs: {
        files: ['build/doc/{includes,layouts}/sass/**/*.html'],
        tasks: ['assemble:sass'],
        options: {livereload:true}
      },
      dist_css_docs: {
        files: ['build/doc/{includes,layouts}/css/**/*.html'],
        tasks: ['assemble:css'],
        options: {livereload:true}
      },
      dist_photoshop_docs: {
        files: ['build/doc/{includes,layouts}/photoshop/**/*.html'],
        tasks: ['assemble:photoshop'],
        options: {livereload:true}
      },
      dist_download: {
        files: ['build/index.html'],
        tasks: ['assemble:dist_download']
      },
      assets: {
        files: ['build/doc/assets/{img}/**/*'],
        tasks: ['copy'],
        options: {livereload:true}
      }
    },

    // compress config
    compress: {
      dist: {
        options: {
          archive: 'dist/anila.tar.gz'
        },
        files: [
          {expand: true, cwd: 'dist/assets/', src: ['**'], dest: 'anila/'}
        ]
      }
    }


  });

  // Load the plugin

  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  //grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-newer');

  grunt.task.renameTask('watch', 'watch_start');
  grunt.task.registerTask('watch', [/*'karma:dev_watch:start',*/ 'watch_start']);

  grunt.registerTask('compile:assets', ['clean', 'sass', 'concat', 'uglify', 'copy', 'webfont']);
  grunt.registerTask('compile', ['compile:assets', 'assemble']);
  grunt.registerTask('build', ['compile', 'compress']);
  grunt.registerTask('default', ['compile', 'watch']);
  grunt.registerTask('travis', ['compile'/*, 'karma:continuous'*/]);

};