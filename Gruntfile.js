module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            lib: {
                src: ['lib/*', 'src/*.js*']
            } 
        },
        ts: {
            lib: {
                src: ['src/**/*.ts'],
                // :out: 'bin/ts.js',
                options: {
                    target: 'es3',
                    module: 'commonjs',
                    sourceMaps: true,
                    declaration: true,
                    removeComments: false
                }
            }
        },
        copy: {
            lib: {
                files: [
                    { expand: true, flatten: true, src: ['src/*.js'], dest: './lib/', filter: 'isFile' }
                ]
            }
        },
        watch: {
            lib: {
                files: ['src/**/*.ts', '!src/**/*.d.ts'],
                tasks: ['default']
            }
        }
    });
    grunt.registerTask('default', ['clean', 'ts:lib', 'copy:lib']);
};
