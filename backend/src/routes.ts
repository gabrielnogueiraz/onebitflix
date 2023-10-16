import express from "express";
import { categoriesControler } from "./controlers/categoriesControler";
import { coursesController } from "./controlers/coursesControler";
import { episodesController } from "./controlers/episodesControler";
import { authControler } from "./controlers/authControler";

const router = express.Router();

router.post("/auth/register", authControler.register);
router.post("/auth/login", authControler.login);

router.get("/categories", categoriesControler.index);
router.get("/categories/:id", categoriesControler.show);

router.get("/courses/featured", coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", coursesController.search);
router.get("/courses/:id", coursesController.show);

router.get("/episodes/stream", episodesController.stream);

export { router };
