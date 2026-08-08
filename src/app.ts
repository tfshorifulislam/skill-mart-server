import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Skill Mart Server is running!");
});

export default app;