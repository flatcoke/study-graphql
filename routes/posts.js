import { Router } from "express";

import db from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const posts = await db.Post.findAll();
  res.json(posts);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await db.Post.findByPk(id);
  res.json(post);
});
router.post("/", async (req, res) => {
  const { userId, title, content } = req.body;
  const user = await db.Post.create({
    userId: userId,
    title: title,
    content: content
  });
  res.json(user).statusCode(201);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await db.Post.findOne({ where: { id: id } });
  if (post === null) {
    res.json({ message: "not found" }).statusCode(404);
  }
  post.update({
    title: title,
    content: content
  });
  res.json(post);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await db.Post.findOne({ where: { id: id } });
  if (post === null) {
    res.json({ message: "not found" }).statusCode(404);
  }
  post.destroy();
  res.json({});
});
export default router;
