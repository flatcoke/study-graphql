import { Router } from "express";

import commentRouter from "./comments";
import postRouter from "./posts";
import userRouter from "./users";

const apiRouter = Router();

apiRouter.use("/v1/users", userRouter);
apiRouter.use("/v1/posts", postRouter);
apiRouter.use("/v1/comments", commentRouter);

export default apiRouter;
