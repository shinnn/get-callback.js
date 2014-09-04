# get-callback.js

[![Build Status](https://travis-ci.org/shinnn/get-callback.js.svg?branch=master)](https://travis-ci.org/shinnn/get-callback.js)
[![Build status](https://ci.appveyor.com/api/projects/status/q5d0o8mtvpf43rre)](https://ci.appveyor.com/project/ShinnosukeWatanabe/get-callback-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-callback.js.svg)](https://coveralls.io/r/shinnn/get-callback.js)
[![devDependency Status](https://david-dm.org/shinnn/get-callback.js/dev-status.svg)](https://david-dm.org/shinnn/get-callback.js#info=devDependencies)

Get a callback function from arguments

```javascript
function printCallback() {
  var cb = getCallback(arguments);
  console.log(cb.toString());
}

printCallback('foo', {some: 'options'}, function cb(x, y) { return x + y; });

//yields: 'function cb(x, y) { return x + y; }'
```

This module is useful to create a function which takes a callback as its last argument.

## Installation

### Package managers

### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/get-callback.svg)](https://www.npmjs.org/package/get-callback)

```
npm install --save get-callback
```

### [bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/get-callback.svg)](https://github.com/shinnn/get-callback.js/releases)

```
bower install --save get-callback
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/get-callback.js/master/get-callback.js)

## API

### getCallback(*args*)

*args*: `Array` or [array-like object](https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-7/array-like-objects) (e.g. [`arguments`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments))  
Return: `Function`

It returns the last element of *args*, when the element is a function.

It throws an error when the last element is not a function.

```javascript
function cb() {
  //... Something to do in the callback
}

(function() {
  getCallback(arguments); //=> [Function: cb]
})('foo', {some: 'options'}, cb);
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
