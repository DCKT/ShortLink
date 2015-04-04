/**
* Home Route
* path: /
******************** */

import express from "express";
import Controller from "../controllers/IndexController";
import LinksController from "../controllers/LinksController";

var router = express.Router();


router.get('/', Controller.index.get);
router.get('/:alias', LinksController.alias.get);

export default router;
