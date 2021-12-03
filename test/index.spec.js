const { expect } = require('chai');
const fs = require('fs');
const { greetings } = require('./config');

describe("gulp-edit-file", () => {
  it("Test edit file", () => {
    const distContent = fs.readFileSync('test/dist/index.js', { encoding: 'utf-8' });
    const content = fs.readFileSync('test/src/index.js', { encoding: 'utf-8' });
    expect(distContent).to.be.equal(greetings + content);
  });
});
