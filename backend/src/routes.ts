import express from "express";
import { categoriesControler } from "./controlers/categoriesControler";
import { coursesController } from "./controlers/coursesControler";
import { episodesController } from "./controlers/episodesControler";
import { authControler } from "./controlers/authControler";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
import { favoritesController } from "./controlers/favoritesControler";
import { likesController } from "./controlers/likesControler";

const router = express.Router();

router.post("/auth/register", authControler.register);
router.post("/auth/login", authControler.login);

router.get("/categories", ensureAuth, categoriesControler.index);
router.get("/categories/:id", ensureAuth, categoriesControler.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/popular", ensureAuth, coursesController.popular);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);
router.get(
  "/episodes/:id/watchTime",
  ensureAuth,
  episodesController.getWatchTime
);
router.post(
  "/episodes/:id/watchTime",
  ensureAuth,
  episodesController.setWatchTime
);

router.get("/favorites", ensureAuth, favoritesController.index);
router.post("/favorites", ensureAuth, favoritesController.save);
router.delete("/favorites", ensureAuth, favoritesController.delete);

router.post("/likes", ensureAuth, likesController.save);
router.delete("/likes", ensureAuth, likesController.delete);

export { router };
