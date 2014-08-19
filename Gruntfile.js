module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'public/assets/css/main.css': 'less/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};