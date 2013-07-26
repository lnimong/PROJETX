module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          watchedExtensions: [ 'js' ],
          watchedFolders: [ 'routes', 'domain' ],
          debug: true,
          delayTime: 1,
          env: {
            PORT: '3000'
          },
          cwd: __dirname
        }
      }
    },

    watch: {
      assets: {
        files: [ 'public/**/*.js', 'public/**/*.css', 'public/**/*.html' ],
        options: {
          livereload: true
        }
      }
    },

    concurrent: {
      dev: {
        tasks: [ 'nodemon:dev', 'watch:assets' ],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', [ 'concurrent:dev' ]);
};
