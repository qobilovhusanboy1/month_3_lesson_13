const { Router } = require("express");

const isUser = require("../middlewares/isUser.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { bookCreate, bookGet, bookGetOne, bookUpdate, bookDelete } = require("../controllers/book.controller");

const router = Router();

router.post("/create/book", isUser, isAdmin, bookCreate);
router.get("/get/book", isUser, bookGet);
router.get("/get/book/:id", isUser, bookGetOne);
router.put("/update/book/:id", isUser, isAdmin, bookUpdate);
router.delete("/delete/book/:id", isUser, isAdmin, bookDelete);

module.exports = router;