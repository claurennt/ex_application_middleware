const express = require("express");
const app = express();
const port = 3000;

const secure = (req, res, next) => {
  const { token } = req.params;
  if (!token || token.length <= 3) return res.status(400).send("Invalid token");
  next();
};

app.get("/verify/:token", secure, (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
