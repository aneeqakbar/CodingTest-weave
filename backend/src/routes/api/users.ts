import express from "express";
import usersController from "../../controllers/users";

const router = express.Router();

router.get("/", async (_req, res) => {
  const data = await usersController.fetchUsersFromApi();
  res.json(data);
});

export default router;
