module.exports = function (grunt)
{
	// Dependencies
	// - - - - - - - - - - - - - - - - - - - - - - - - - -

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Configuration
	// - - - - - - - - - - - - - - - - - - - - - - - - - -

	grunt.initConfig(
	{
		less :
		{
			build :
			{
				options :
				{
					compress : true
				},

				files :
				{
					'artifact/styles.css' : 'src/styles/index.less'
				}
			}
		},

		copy :
		{
			build :
			{
				files :
				[
					// Root.
					{ expand : true, src : ['CNAME'], dest : 'artifact' },

					// Source.
					{ expand : true, cwd : 'src', src : ['assets/**', 'manifest.json'], dest : 'artifact' }
				]
			}
		},

		htmlmin :
		{
			build :
			{
				options :
				{
					keepClosingSlash          : true,
					removeComments            : true,
					collapseWhitespace        : true,
					collapseBooleanAttributes : true
				},

				files :
				{
					'artifact/index.html' : 'src/index.html'
				}
			}
		},

		watch :
		{
			build : { files : ['src/**/*'], tasks : ['build'] }
		}
	});

	// Task: `build`
	// - - - - - - - - - - - - - - - - - - - - - - - - - -

	grunt.registerTask('build', ['less:build', 'copy:build', 'htmlmin:build']);

	// Task: `develop`
	// - - - - - - - - - - - - - - - - - - - - - - - - - -

	grunt.registerTask('develop', ['build', 'watch:build']);

	// Task: `default`
	// - - - - - - - - - - - - - - - - - - - - - - - - - -

	grunt.registerTask('default', ['build']);
};
