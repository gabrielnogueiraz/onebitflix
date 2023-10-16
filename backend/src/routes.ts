import express from "express";
import { categoriesControler } from "./controlers/categoriesControler";
import { coursesController } from "./controlers/coursesControler";
import { episodesController } from "./controlers/episodesControler";
import { authControler } from "./controlers/authControler";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";

const router = express.Router();

router.post("/auth/register", authControler.register);
router.post("/auth/login", authControler.login);

router.get("/categories", ensureAuth, categoriesControler.index);
router.get("/categories/:id", ensureAuth, categoriesControler.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery,episodesController.stream);

export { router };

