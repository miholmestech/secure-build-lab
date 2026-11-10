import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/greet.js';

test('greets a normal name', () => {
  assert.equal(greet('Alex'), 'Hello, Alex');
});
test('rejects absent input', () => {
  assert.throws(() => greet(null));
});
test('rejects oversized input', () => {
  assert.throws(() => greet('A'.repeat(41)));
});
test('keeps HTML-like input as data', () => {
  assert.equal(greet('<b>Alex</b>'), 'Hello, <b>Alex</b>');
});
