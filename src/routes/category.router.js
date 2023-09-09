const { Router } = require("express");
const { categoryCreate, categoryGet, categoryGetOne, categoryUpdate, categoryDelete } = require("../controllers/categorys.controller");
const isUser = require("../middlewares/isUser.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");

const router = Router();

router.post("/create/category", isUser, isAdmin, categoryCreate);
router.get("/get/category", isUser, categoryGet);
router.get("/get/category/:id", isUser, categoryGetOne);
router.put("/update/category/:id", isUser, isAdmin, categoryUpdate);
router.delete("/delete/category/:id", isUser, isAdmin, categoryDelete);

module.exports = router;