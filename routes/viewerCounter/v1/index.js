const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const items = []; // {id:"beep", value:10}

function findId(id) {
  const item = items.find(i => i.id === id);

  if (!item) {
    const newItem = { id: id || uuidv4(), value: 0 };
    items.push(newItem);
    return newItem;
  }

  return item;
}

router.get("/", (req, res, next) => {
  const item = findId(req.query.id);
  item.value++;
  res.json(item);
});

module.exports = router;
