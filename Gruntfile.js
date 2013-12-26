module.exports = function(grunt) {
  var hljs = require('highlight.js');
  hljs.LANGUAGES['scss'] = require('./build/lib/scss.js')(hljs);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //anila
    anila: {
      js: ['build/js/anila/anila.js', 'build/js/anila.*.js'],
      scss: ['build/scss/style.scss', 'build/scss/noscript.scss']
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
          partials: ['build/doc/inc/**/*.{html,scss}'],
          helpers: ['build/doc/helpers/*.js'],
          layout: 'build/doc/layouts/default.html'
        },
        expand: true,
        cwd: 'build/doc/pages',
        src: '**/*.{html,md}',
        dest: 'dist/docs/'
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
          includePaths: ['build/scss']
        },
        files: {
          'dist/assets/css/style.css': '<%= anila.scss %>',
          'dist/docs/assets/css/docs.css': 'build/doc/assets/scss/docs.scss'
        }
      },
      dist_compressed: {
        options: {
          outputStyle:'compressed',
          includePaths: ['build/scss']
        },
        files: {
          'dist/assets/css/style.min.css': '<%= anila.scss %>'
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
          'dist/assets/js/anila.min.js': ['<%= anila.js %>'],
          'dist/assets/js/html5.min.js': ['build/js/vendor/html5.js'],
          'dist/assets/js/legacy.min.js': ['build/js/vendor/legacy.js'],
          'dist/assets/js/iconfont-fallback.min.js': ['build/js/vendor/iconfont-fallback.js'],
          'dist/docs/assets/js/all.js': ['<%= anila.js %>', 'build/doc/assets/js/docs.js']
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
          {src: 'bower.json', dest: 'dist/assets/'}
        ]
      }
    },

    // clean config
    clean: ['dist/'],

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

    // watch config
    watch_start: {
      grunt: { files: ['Gruntfile.js'] },
      karma: {
        files: [
          'dist/assets/js/*.js',
          'dist/assets/css/*.css'
        ],
        tasks: ['karma:dev_watch:run']
      },

      styles: {
        files: ['build/scss/**/*.scss', 'doc/assets/**/*.scss'],
        tasks: ['sass'],
        options: {livereload:true}
      },
      js: {
        files: ['build/js/**/*.js', 'doc/assets/js/**/*.js'],
        tasks: ['copy', 'concat', 'uglify'],
        options: {livereload:true}
      },
      dist_docs: {
        files: ['build/doc/{inc,layouts}/**/*.html'],
        tasks: ['assemble'],
        options: {livereload:true}
      },
      dist_docs_pages: {
        files: ['build/doc/pages/**/*.html'],
        tasks: ['newer:assemble'],
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
    },


    // webfont config
		webfont: {
		  icons: {
		    src: 'build/icons/*.svg',
		    dest: 'build/fonts',
		    destCss: 'build/fonts/public',
		    options: {
		    	hashes: false,
		      stylesheet: 'scss',
		      syntax: 'bootstrap',
		      font: 'anilaicon',
		      ligature: true,
		      embed: false,
		      relativeFontPath: '/build/fonts'
		    }
		  }
		}

  });

  // Load the plugin

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-newer');

  grunt.task.renameTask('watch', 'watch_start');
  grunt.task.registerTask('watch', ['karma:dev_watch:start', 'watch_start']);

  grunt.registerTask('compile:assets', ['clean', 'sass', 'concat', 'uglify', 'copy', 'webfont']);
  grunt.registerTask('compile', ['compile:assets', 'assemble']);
  grunt.registerTask('build', ['compile', 'compress']);
  grunt.registerTask('default', ['compile', 'watch']);
  grunt.registerTask('travis', ['compile', 'karma:continuous']);

};