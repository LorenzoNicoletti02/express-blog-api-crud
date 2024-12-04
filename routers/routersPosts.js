//Creo le rotte della risorsa ricette
const express = require("express");
const router = express.Router();
const postList = require("../data/posts");
const controller = require("../controller/postController");

// Index
router.get("/", controller.index);

// Show
router.get("/:id", controller.show)

// Create
router.post("/", controller.create)

// Update
router.put("/", controller.update)

// Modify
router.patch("/:id", controller.modify)

// Destroy
router.delete("/:id", controller.destroy)

module.exports = router;