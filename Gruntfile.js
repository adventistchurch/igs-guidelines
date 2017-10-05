module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

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
        tasks: ['sass']
      },
      jekyll: {
        files: ['**/*.{md,html}'],
        tasks: ['shell:jekyllBuild']
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
    },

    // Run tasks in parallel.
    concurrent: {
      serve: [
        'sass',
        'watch',
        'shell:jekyllBuild'
      ],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Grunt serve task.
  grunt.registerTask('serve', [
    'browserSync',
    'concurrent:serve'
  ]);

  // Grunt build task.
  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass'
  ]);

  // Register build as the default task fallback.
  grunt.registerTask('default', 'serve');
};
