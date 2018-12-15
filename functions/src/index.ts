import * as express from "express";
import * as bodyParser from "body-parser";

import { dialogflow } from "actions-on-google";
const app = dialogflow({ debug: true });

app.intent("test-fulfillment", conv => {
  conv.ask("hello world!");
  return;
});

const expressApp = express().use(bodyParser.json());
expressApp.post("/fulfillment", app);
expressApp.listen(3000);
