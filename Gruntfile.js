module.exports = function(grunt) {

  // Show elapsed time after tasks run to measure performance.
  require('time-grunt')(grunt);

  // Load all Grunt tasks that are listed in package.json.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Shell commands for use in Grunt tasks.
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },

    // Configuration for sass (libsass).
    sass: {
      options: {
        outputStyle: 'nested',
        sourceMap: true,
        sassDir: '_sass',
        cssDir: '_site/css'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '_sass/',
          src: ['**/*.scss'],
          dest: '_site/css',
          ext: '.css'
        }]
      }
    },

    // Add browser prefixes to css automatically.
    autoprefixer: {
      options: {
        browsers: ['last 4 versions', 'ie 9']
      },
      dist: {
        src: '_site/css/*.css'
      }
    },

    // Watch for files to change and run tasks when they do.
    watch: {
      sass: {
        files: ['_sass/**/*.scss'],
        tasks: ['sass','autoprefixer']
      },
      jekyll: {
        files: ['**/*.{md,html}'],
        tasks: ['shell:jekyllBuild','sass','autoprefixer']
      }
    },

    // Update browser when files are changed.
    browserSync: {
      bsFiles: {
        src : [
          '_site/css/*.css',
          '_site/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './_site'
        }
      }
    }

  });

  // Grunt serve task.
  grunt.registerTask('serve', [
    'browserSync',
    'shell:jekyllBuild',
    'sass',
    'watch'
  ]);

  // Grunt build task.
  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass',
    'autoprefixer'
  ]);

  // Register build as the default task fallback.
  grunt.registerTask('default', 'serve');
};
