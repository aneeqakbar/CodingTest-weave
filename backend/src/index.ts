import dotenv from "dotenv";

dotenv.config();

import express from "express";
import router from "./routes";

const port = 3000;

const app = express();

app.use(router);

// INFO: for health check purpose
app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.listen(port, () => {
  console.log(`Weave code test listening on port ${port}`);
});
