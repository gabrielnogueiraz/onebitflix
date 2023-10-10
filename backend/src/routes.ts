import express from "express";
import { categoriesControler } from "./controlers/categoriesControler";
import { coursesController } from "./controlers/coursesControler";

const router = express.Router();

router.get("/categories", categoriesControler.index);
router.get("/categories/:id", categoriesControler.show);
router.get("/courses/:id", coursesController.show);

export { router };
