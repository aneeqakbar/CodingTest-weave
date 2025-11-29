import express from "express";
import { fetchUsersFromApi } from "../../managers/users";

const router = express.Router();

router.get("/", async (_req, res) => {
  const data = await fetchUsersFromApi();
  res.json(data);
});

export default router;
