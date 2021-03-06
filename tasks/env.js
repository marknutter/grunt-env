/*
 * grunt-env
 * https://github.com/onehealth/grunt-env
 *
 * Copyright (c) 2012 OneHealth Solutions, inc
 * Licensed under the Apache 2.0 license.
 */

"use strict";

module.exports = function (grunt) {
  grunt.registerMultiTask('env', 'Specify an ENV configuration for future tasks in the chain', function() {
    grunt.util._.extend(process.env, this.options(), this.data);
  });
};
