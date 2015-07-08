# AwfulPicks

<div>
<a href="http://opensource.org/licenses/gpl-3.0" target="_blank"><img src="http://img.shields.io/badge/license-GPL_3.0-blue.svg?style=flat" alt="License" align="right" hspace="2" /></a>
<a href="https://github.com/andrewvaughan/awfulpicks/releases" target="_blank"><img src="http://img.shields.io/badge/release-0.1.0-blue.svg?style=flat" alt="Current Release" align="right" hspace="2" /></a>
</div>
<br clear="left"><br>

[AwfulPicks](http://awfulpicks.com/) is a competitive site for competing against friends in NCAA college football.


### Code Quality Report

<div>
<a href="http://travis-ci.org/andrewvaughan/awfulpicks" target="_blank"><img src="https://travis-ci.org/andrewvaughan/awfulpicks.png?branch=master" alt="Build Status" align="left" hspace="2" vspace="2" /></a>
<a href="https://codeclimate.com/github/andrewvaughan/awfulpicks" target="_blank"><img src="https://codeclimate.com/github/andrewvaughan/awfulpicks/badges/gpa.svg" alt="Code Climate" align="left" hspace="2" vspace="2" /></a>
<a href="https://codeclimate.com/github/andrewvaughan/awfulpicks" target="_blank"><img src="https://codeclimate.com/github/andrewvaughan/awfulpicks/badges/coverage.svg" alt="Test Coverage" align="left" hspace="2" vspace="2" /></a>
<a href="http://inch-ci.org/github/andrewvaughan/awfulpicks" target="_blank"><img src="http://inch-ci.org/github/andrewvaughan/awfulpicks.svg?branch=master" alt="Inline docs" align="left" hspace="2" vspace="2" /></a>
</div>
<br clear="left">

<div>
<a href="https://david-dm.org/andrewvaughan/awfulpicks" target="_blank"><img src="https://david-dm.org/andrewvaughan/awfulpicks.svg" alt="Dependencies" align="left" hspace="2" vspace="2" /></a>
<a href="https://david-dm.org/andrewvaughan/awfulpicks#info=devDependencies" target="_blank"><img src="https://david-dm.org/andrewvaughan/awfulpicks/dev-status.svg" alt="Development Dependencies" align="left" hspace="2" vspace="2" /></a>
</div>
<br clear="left"><br>


### Quick Start

Vagrant and Docker files are provided for easy installation and server creation.  To create a development environment:

1. Ensure [VirtualBox](https://www.virtualbox.org/wiki/Downloads), [Vagrant](https://www.vagrantup.com/), and [Docker](https://www.docker.com/) are installed
2. Run `vagrant up --provider=docker`

Alternatively, you can deploy the Docker image to a server for production use.


### Building from Source

You can also build AwfulPicks from source with NPM:

1. Ensure [Node.js](https://nodejs.org/) is installed with NPM
2. Run `npm install`
3. Run `npm start`

Tests and coverage analysis can be performed by invoking the `npm test` command.


### Release Policy

Releases of AwfulPicks follow [Semantic Versioning](http://semver.org/) standards in a `MAJOR.MINOR.PATCH` versioning
scheme of the following format:

* `MAJOR` - modified when major, incompatible changes are made to the library,
* `MINOR` - modified when functionality is added in a backwards-compatible mannder, and
* `PATCH` - patches to existing functionality, such as documentation and bug fixes.


### License

Please refer to the AwfulPicks [license agreement](LICENSE).