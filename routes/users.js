import { Router } from "express";

import db from "../models";

const router  = Router();

router .get("/", async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});
router .get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await db.User.findByPk(id);
  res.json(user);
});
router .post("/", async (req, res) => {
  const { username } = req.body;
  const user = await db.User.create({ username: username });
  res.json(user).statusCode(201);
});

export default router ;
