//Creo le rotte della risorsa ricette
const express = require("express");
const router = express.Router();
const controller = require("../controller/postController");
const middlewareId = require("../middleware/middlewareCheckId");

// Index
router.get("/", controller.index);

// Show
router.get("/:id", middlewareId, controller.show)

// Create
router.post("/", controller.create)

// Update
router.put("/:id", middlewareId, controller.update)

// Modify
router.patch("/:id", middlewareId, controller.modify)

// Destroy
router.delete("/:id", middlewareId, controller.destroy)

module.exports = router;