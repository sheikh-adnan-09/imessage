const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./lib/db");
const authMiddleware = require("./middlewares/authMiddleware");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
