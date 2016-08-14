module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/styles.css' : 'sass/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass']
			},
            lint: {
				files: 'app/*.ts',
				tasks: ['tslint']
            }
        },
        tslint: {
                options: {
                    configuration: "tslint.json"
                },
                files: {
                    src: ['app/*.ts']
                }
            }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.registerTask('default',['watch']);
}