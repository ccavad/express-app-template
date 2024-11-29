const express = require("express");
const config = require("./config");
const apiRouter = require("./routers");
require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(config.port, () => {
  console.log(`Application runs on http://localhost:${config.port}`);
});
