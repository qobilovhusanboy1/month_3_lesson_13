const { Router } = require("express");
const { readCreate, readGet, readGetOne, readUpdate, readDelete } = require("../controllers/read.controller");
const isUser = require("../middlewares/isUser.middleware");

const router = Router();

router.post("/create/read", isUser, readCreate);
router.get("/get/read", isUser, readGet);
router.get("/get/read/:id", isUser, readGetOne);
router.put("/update/read/:id", isUser, readUpdate);
router.delete("/delete/read/:id", isUser, readDelete);

module.exports = router;