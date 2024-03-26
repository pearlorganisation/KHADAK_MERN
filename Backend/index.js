import express from "express";
import { mongoConnect } from "./src/configs/mongoDB.js";
import { authRouter } from "./src/routes/Auth/authRoutes.js";
import cors from "cors"
import heroSectionRouter from "./src/routes/HeroSection/heroSectionroutes.js";

const app = express();
const PORT =  6500;

// mongoConnect :: connecting the mongodb database
mongoConnect();

app.use(express.json());

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5010"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
        
      : {
          origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5010"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
  )
);
// -----root route for the express app
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/heroSection", heroSectionRouter);



app.listen(PORT, () => {
  console.log(` app is running on https://localhost:${PORT}`);
});
