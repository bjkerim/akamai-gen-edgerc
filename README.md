# akamai-gen-edgerc

![npm](https://img.shields.io/npm/v/akamai-gen-edgerc.svg) ![travis-status](https://img.shields.io/travis/akamai-open/akamai-gen-edgerc.svg) 

A command-line tool for creating and adding sections to an Akamai .edgerc file.

![nodei.co](https://nodei.co/npm/akamai-gen-edgerc.png?downloads=true&downloadRank=true&stars=true)


## Install

`npm install -g akamai-gen-edgerc`

## Usage

#### Help and Usage Guide
To view the usage guide for the program, you can pass the parameter `--help` or
`-h`:

```
➜  akamai-gen-edgerc git:(master) ✗ gen_edgerc --help

Options

  -f, --file string      Full path to the credentials file.                           
  -s, --section string   Title of the section that will be added to the .edgerc file. 
  -p, --path string      Full path to the .edgerc file.                               
  -h, --help             Display help and usage information.    
```

#### Using Default Values
If no options are supplied, `gen_edgerc` will add a section named 'default' to the
.edgerc file in the users home directory.

```
➜  akamai-gen-edgerc git:(master) ✗ gen_edgerc

This script will create a section named 'default'in the local file /Users/ktyacke/.edgerc.

After authorizing your client in the OPEN API Administration tool, 
export the credentials and paste the contents of the export file below (making sure to include the final blank line). 
Then enter control-D to continue: 

>>>
Client Information

Name: Sample Client
Base URL: https://xxxx-xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx.luna.akamaiapis.net/

Access Tokens:

    akab-xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx


Client Credentials:

    Client token: akab-xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx     Secret: xxxxxxxxxxxxxxxxxxxxxxxxxxxx+xxxxxxxxxxxxxx=


<<<


The section 'default' has been succesfully added to /Users/ktyacke/.edgerc
```

#### Using Custom Arguments
`gen_edgerc` also accepts the following optional arguments:
```
  -f, --file string      Full path to the credentials file.                           
  -s, --section string   Title of the section that will be added to the .edgerc file. 
  -p, --path string      Full path to the .edgerc file.                               
  -h, --help             Display help and usage information. 
``` 

In the following example, we will use the arguments above to pass in a custom 
section title, .edgerc file path, and client authorization file path. 
```
➜  akamai-gen-edgerc git:(master) ✗ gen_edgerc --section FooSection --path ~/bar/.edgerc --file ~/bar/clientAuthorization.txt
This script will create a section named 'FooSection'in the local file /Users/ktyacke/bar/.edgerc.

+++ Found authorization file: /Users/ktyacke/bar/clientAuthorization.txt
The section 'FooSection' has been succesfully added to /Users/ktyacke/bar/.edgerc
```

## Scripts

 - **npm run test** : `mocha`
 - **npm run start** : `gen_edgerc`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. 
If your pull request contains JavaScript patches or features, you should include 
relevant unit tests. Thanks!

## Author

Kyle Tyacke: [ktyacke@gmail.com](mailto:ktyacke@gmail.com)

## License
Copyright 2015 Akamai Technologies, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.