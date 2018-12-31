const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Linting to Nodejs Appication demo" });
});

app.listen(port, () => {
  console.log(`Linstening on port ${port}`);
});
