import express from "express";
import { mongoConnect } from "./src/configs/mongoDB.js";
import { authRouter } from "./src/routes/Auth/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 6500;

// mongoConnect :: connecting the mongodb database
mongoConnect();

app.use(express.json());
// -----root route for the express app
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(` app is running on https://localhost:${PORT}`);
});
