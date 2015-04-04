/**
* Login Route
* path: /login
******************** */

import express from "express";
import Controller from "../controllers/LoginController";

var router = express.Router();


router.get('/', Controller.index.get);
router.post('/', Controller.index.post);

export default router;
