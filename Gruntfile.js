module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            default: {
                src: [""]
            }
        }
    });

    grunt.registerTask('tsc', ['ts']);

};
