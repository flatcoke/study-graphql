import { Router } from "express";

import db from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const comments = await db.Comment.findAll();
  res.json(comments);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const comment = await db.Comment.findByPk(id);
  res.json(comment);
});
router.post("/", async (req, res) => {
  const { userId, postId, content } = req.body;
  const user = await db.Comment.create({
    userId: userId,
    postId: postId,
    content: content
  });
  res.json(user).statusCode(201);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await db.Comment.findOne({ where: { id: id } });
  if (comment === null) {
    res.json({ message: "not found" }).statusCode(404);
  }
  comment.update({
    content: content
  });
  res.json(comment);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const comment = await db.Comment.findOne({ where: { id: id } });
  if (comment === null) {
    res.json({ message: "not found" }).statusCode(404);
  }
  comment.destroy();
  res.json({});
});

export default router;
