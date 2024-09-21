import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages); //get the messages between logged in user and the user id specified in req
router.post("/send/:id", protectRoute, sendMessage); //send message from curr logged in user to the user whose id is specified in the req

export default router;
