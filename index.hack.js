/** @jest-environment jsdom */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

describe('addH1', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    jest.resetModules();
    require('./index.js');
  });

  it('should add an h1 to the body', () => {
    console.log(document.body.innerHTML);
  });

  it('should add an h1 to the body', () => {
    console.log(document.body.innerHTML);
  });
});
