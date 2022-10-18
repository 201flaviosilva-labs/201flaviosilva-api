const express = require("express");
const router = express.Router();

let count = 0;

router.get("/", (req, res, next) => {
  count++;
  res.send(`${count}`);
});

module.exports = router;
