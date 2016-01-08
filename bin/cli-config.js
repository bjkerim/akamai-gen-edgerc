#! /usr/bin/env node

/**
Copyright 2015 Akamai Technologies, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.

You may obtain a copy of the License at 

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var commandLineArgs = require('command-line-args');

// Returns an object containing the parameters that were passed in
// via the command line.
exports.getArguments = function() {
  // Configure accepted arguments
  var cli = commandLineArgs([{
    name: 'file',
    alias: 'f',
    type: String,
    defaultValue: ""
  }, {
    name: 'section',
    alias: 's',
    type: String,
    defaultValue: "default"
  }, {
    name: 'path',
    alias: 'p',
    type: String,
    defaultValue: "~/.edgerc"
  }]);

  // Return the parse arguments
  return cli.parse();
};
