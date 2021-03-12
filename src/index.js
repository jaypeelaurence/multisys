const express = require("express");
const next = require("next");
const { enableStaticRendering } = require("mobx-react");

const dev = "development";
const app = next({ dev });
const handle = app.getRequestHandler();

enableStaticRendering(true);

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000);
});
