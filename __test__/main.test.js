'use strict';

const { reporter } = require('@a11ycore/reporter');
const { runA11yJest } = require('@a11ycore/jest');
const { normaliseBuild } = require('@a11ycore/utils');
const React = require("react");
const ReactDOMServer = require("react-dom/server");

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const projectId = 'txkzDWgrLdj20biu3Aa8';
    const projectApiKey = 'c64d84f3-bdfd-4b95-b451-1e2fbe94dce1';
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    const normalisedResults = normaliseBuild(projectId, results);
    await reporter(projectId, projectApiKey, normalisedResults);
  });
});
