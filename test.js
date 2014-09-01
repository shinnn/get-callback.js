'use strict';

var test = require('tape');

var getCallback = require('require-main')();

test('getCallback()', function(t) {
  t.plan(5);

  var cb = require('nop');

  t.equal(
    getCallback(['foo', {}, cb]), cb,
    'should return the last element when it is a function.'
  );

  (function() {
    t.equal(
      getCallback(arguments), cb,
      'should handle array-like object.'
    );
  })('foo', {}, cb);

  t.throws(
    getCallback.bind(null, ['foo']), /The last argument should be a callback function\./,
    'should throw an error when the last element is not a function.'
  );

  t.throws(
    getCallback.bind(null, []), /More than one argument is required\./,
    'should throw an error when the array has no element.'
  );

  t.throws(
    getCallback.bind(null), /Cannot read property 'length'/,
    'should throw an error when it doesn\'t take neither array nor array-like object.'
  );

  t.end();
});
