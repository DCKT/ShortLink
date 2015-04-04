/**
* Links Route
* path: /links
******************** */

import express from "express";
import Controller from "../controllers/LinksController";

var router = express.Router();


router.get('/new', Controller.new.get);
router.post('/new', Controller.new.post);
router.post('/delete', Controller.delete.post);

export default router;
