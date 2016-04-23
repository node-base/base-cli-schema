# base-cli-schema [![NPM version](https://img.shields.io/npm/v/base-cli-schema.svg?style=flat)](https://www.npmjs.com/package/base-cli-schema) [![NPM downloads](https://img.shields.io/npm/dm/base-cli-schema.svg?style=flat)](https://npmjs.org/package/base-cli-schema) [![Build Status](https://img.shields.io/travis/jonschlinkert/base-cli-schema.svg?style=flat)](https://travis-ci.org/jonschlinkert/base-cli-schema)

> Schema for the base-cli plugin, used for normalizing argv values before passing them to cli.process().

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install base-cli-schema --save
```

## Usage

```js
var argv = require('minimist')(process.argv.slice(2));
var Base = require('base');
var cliSchema = require('base-cli-schema');

var app = new Base();
app.use(cli());
var schema = cliSchema(app);

var obj = schema.normalize(argv);
console.log(obj);
```

### Custom fields

Field names correspond to properties on the parsed `argv` object.

```js
var schema = cliSchema(app)
  .field('foo', 'string', {
    normalize: function(val, key, config, schema) {
      // do stuff to val
      return 'bar';
    }
  })

var obj = schema.normalize(argv);
console.log(obj);
//=> {foo: 'bar'}
```

## Related projects

You might also be interested in these projects:

* [base-cli-process](https://www.npmjs.com/package/base-cli-process): Normalizers for common argv commands handled by the base-cli plugin. Also pre-processes the given object… [more](https://www.npmjs.com/package/base-cli-process) | [homepage](https://github.com/jonschlinkert/base-cli-process)
* [base-cli](https://www.npmjs.com/package/base-cli): Plugin for base-methods that maps built-in methods to CLI args (also supports methods from a… [more](https://www.npmjs.com/package/base-cli) | [homepage](https://github.com/node-base/base-cli)
* [base-option](https://www.npmjs.com/package/base-option): Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme… [more](https://www.npmjs.com/package/base-option) | [homepage](https://github.com/node-base/base-option)
* [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://www.npmjs.com/package/base) | [homepage](https://github.com/node-base/base)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/base-cli-schema/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/base-cli-schema/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on April 22, 2016._