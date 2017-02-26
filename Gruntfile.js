module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts']
            }
        }
    });

    grunt.registerTask('tsc', ['ts']);

};
