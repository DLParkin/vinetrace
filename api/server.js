import express from "express";
import { json, urlencoded } from "body-parser";
var cors = require("cors");

const app = express();

import fs from "fs";

// Allow cors so we can send data to the frontend
app.use(cors());

// Apply middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Add routes
const routes = require("./routes/routes.js").default(app, fs);

// serve on port 5000.
const server = app.listen(5000, () => {
  console.log("listening on port %s...", server.address().port);
});
