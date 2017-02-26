module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        // https://github.com/TypeStrong/grunt-ts/blob/master/sample/Gruntfile.js
        ts: {
            default: {
                src: [
                    'src/**/*.ts'
                ],
                //outDir: 'bld/',
                // When bundeling: https://www.npmjs.com/package/grunt-ts#out
                // Order of files seems to work for us though (test-b.ts is dependant of test-a.ts)
                out: 'bld/app.js',
                options: {
                    // module amd -- this option requires require.js, and is handle async at runtime
                    // module commonjs -- this option requies a build time module loader like https://www.npmjs.com/package/grunt-browserify
                    // module system -- this option requires systemjs module loader, https://github.com/systemjs/systemjs
                    // module '' -- this option does NOT require module loader, BUT IT DOES require the use of namespaces in our .ts files
                    // infact, the very usage of namespaces hinders module loading for internal code
                    module: '',
                    target: 'es5',
                    fast: 'never',
                }
            }
        }
    });

    grunt.registerTask('tsc', ['ts']);

};
