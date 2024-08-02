import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add/:itemId", authMiddleware, addToCart);
cartRouter.delete("/remove/:itemId", authMiddleware, removeFromCart);
cartRouter.get("/getCart", authMiddleware, getCart);

export default cartRouter;
