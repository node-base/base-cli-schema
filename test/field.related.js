'use strict';

require('mocha');
var assert = require('assert');
var cliSchema = require('..');
var App = require('./support');
var app;

describe('.related', function() {
  beforeEach(function() {
    app = new App();
  });

  describe('argv', function() {
    it('should move a string value to `related.list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related=foo']);
      assert.deepEqual(obj, {related: { list: ['foo']}});
    });

    it('should return an object when the value is `false`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related=false']);
      assert.deepEqual(obj, {related: false});
    });

    it('should add `show` property when related is a boolean', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related']);
      assert.deepEqual(obj, {related: {show: true}});
    });

    it('should move comma-separated values to `related.list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related=foo,bar']);
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });

    it('should filter falsey values', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related=foo,']);
      assert.deepEqual(obj, {related: {list: ['foo']}});
    });

    it('should convert object to keys', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related.list=foo:true']);
      assert.deepEqual(obj, {related: {list: ['foo']}});
    });

    it('should arrayify a single list value', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related.list=foo']);
      assert.deepEqual(obj, {related: {list: ['foo']}});
    });

    it('should split comma-separated values on `related.list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related.list=foo,bar']);
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });

    it('should split comma-separated values on `related=list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related=list:foo,bar']);
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });

    it('should split comma-separated values on `related:list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related.list=foo,bar']);
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });

    it('should split comma-separated values on `related list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize(['--related list:foo,bar']);
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });
  });

  describe('options object', function() {
    it('should move a string value to `related.list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize({related: 'foo'});
      assert.deepEqual(obj, {related: { list: ['foo']}});
    });

    it('should move comma-separated values to `related.list`', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize({related: 'foo,bar'});
      assert.deepEqual(obj, {related: {list: ['bar', 'foo']}});
    });

    it('should filter falsey values', function() {
      var schema = cliSchema(app);
      var obj = schema.normalize({related: 'foo,'});
      assert.deepEqual(obj, {related: {list: ['foo']}});
    });
  });
});
