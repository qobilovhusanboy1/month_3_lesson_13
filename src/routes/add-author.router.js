const { Router } = require("express");

const isUser = require("../middlewares/isUser.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { authorCreate, authorGet, authorGetOne, authorUpdate, authorDelete } = require("../controllers/add-author.controller");

const router = Router();

router.post("/create/author",isUser, isAdmin, authorCreate);
router.get("/get/author",isUser, authorGet);
router.get("/get/author/:id",isUser, authorGetOne);
router.put("/update/author/:id", isUser, isAdmin, authorUpdate);
router.delete("/delete/author/:id", isUser, isAdmin, authorDelete);

module.exports = router;