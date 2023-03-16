const path = require('path');
const { JSDOM } = require('jsdom');
const htmlFile = path.resolve(__dirname, 'index.html');
const jsDomOpts = { runScripts: "dangerously", resources: "usable" };

const loadWindow = async () => {
  const { window } = await JSDOM.fromFile(htmlFile, jsDomOpts);
  await new Promise((res) => window.addEventListener("DOMContentLoaded", res));
  return { window, document: window.document };
};

describe('the right way', () => {
  it('should add an h1 to the body', async () => {
    const { document } = await loadWindow();
    expect(document.body.innerHTML).toContain('another one!');
  });

  it('should add an h1 to the body', async () => {
    const { document } = await loadWindow();
    expect(document.body.innerHTML).toContain('another one!');
  });
});

// This told the secret sauce of waiting for the load event to fire:
// https://oliverjam.es/articles/frontend-testing-node-jsdom