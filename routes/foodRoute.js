import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import { paginateData } from "../middleware/pagination.js";
import foodModel from "../models/foodModel.js";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", paginateData(foodModel), listFood);
foodRouter.delete("/remove/:foodId", removeFood);

export default foodRouter;
