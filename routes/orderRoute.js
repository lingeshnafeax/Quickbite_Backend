import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder", authMiddleware, placeOrder);
orderRouter.post("/verifyPayment", verifyOrder);
orderRouter.get("/myOrders", authMiddleware, userOrders);
orderRouter.get("/allOrders", listOrders);
orderRouter.patch("/changeOrderStatus", updateStatus);

export default orderRouter;
