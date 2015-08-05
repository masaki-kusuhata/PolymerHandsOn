'use strict';

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  var option = {
    paths: {
      app: 'app',
      dist: 'dist',
    }
  };

  var configs = require('load-grunt-configs')(grunt, option);
  grunt.initConfig(configs);
  grunt.registerTask('serve', function(targer) {
    grunt.task.run([
      'wiredep',
      'browserSync:dev',
      'watch',
    ]);
  });
};
