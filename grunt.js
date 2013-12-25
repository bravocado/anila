module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		webfont: {
		  icons: {
		    src: 'fonts/build/svg/*.svg',
		    dest: 'fonts',
		    destCss: 'font/build/css',
		    options: {
		    	hashes: false,
		      stylesheet: 'scss',
		      syntax: 'bootstrap',
		      font: 'your-font-name',
		      ligature: true,
		      embed: false,
		      relativeFontPath: '/build/fonts'
		    }
		  }
		}
  });

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};