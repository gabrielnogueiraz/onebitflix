import express from "express";
import { categoriesControler } from "./controlers/categoriesControler";

const router = express.Router();

router.get("/categories", categoriesControler.index);

export { router };
