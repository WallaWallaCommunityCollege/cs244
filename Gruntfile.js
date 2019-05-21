module.exports = myTasks;
function myTasks(grunt) {
    grunt.initConfig({
        browserify: {
            main: {
                src: ['client/app.js'],
                dest: 'dist/app.js'
            }
        },
        clean: {
            all: ['dist/*'],
            main: ['dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'client/**/*.html',
                            'client/**/*.js'
                        ],
                        dest: 'dist/'
                    }
                ]
            },
            vendor: {
                files: [
                    {
                        expand: true,
                        src: ['node_modules/jquery/dist/jquery.js'],
                        dest: 'dist/vendor/',
                        flatten: true
                    }
                ]
            }
        },
        watch: {
            main: {
                files: ['client/**/*.js', 'client/**/*.html'],
                tasks: ['clean:main', 'browserify:main', 'copy:main'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.registerTask('default', ['clean', 'build']);
    grunt.registerTask('build', ['copy']);
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('test', ['lint', 'prettify']);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
}