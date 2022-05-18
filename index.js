const express = require("express");
const app = express();
const port = 3000;

const secure = (req, res, next) => {
  const { token } = req.query;
  if (!token) return res.status(403).send("Forbidden. No token provided.");
  next();
};

app.use(secure);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
