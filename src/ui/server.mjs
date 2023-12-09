import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";

import * as build from "./build/index.js";

const app = express();
//just serve everything in the public folder, no fancy stuff
app.use(express.static("public"));

//app request handle everything else
app.all("*", createRequestHandler({ build }));

//listener for the handler to app.
app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  //when it's set up mention on server run that we're listening
  console.log("App listening on http://localhost:3000");
});
