import express from "express";
import { mongoConnect } from "./src/configs/mongoDB.js";
import { authRouter } from "./src/routes/Auth/authRoutes.js";
import heroSectionRouter from "./src/routes/HeroSection/heroSectionroutes.js";
import cors from "cors";
import footerRouter from "./src/routes/Footer/footerRoutes.js";
import locationRouter from "./src/routes/location/locationRoutes.js";
import contactRouter from "./src/routes/contact/contactRoute.js";
import mailRouter from "./src/routes/Mail/mailRoutes.js";
import blogRouter from "./src/routes/blog/blogRoutes.js";

const app = express();
const PORT = 6500;

// mongoConnect :: connecting the mongodb database
mongoConnect();

app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5010",
            "http://localhost:5175/",
            "https://khadak-mern.vercel.app",
            "https://khadak-mern-s8ce.vercel.app/",
            "https://delhimazza.com",
            "https://delhimazza.com/admin",
            "https://admin.delhimazza.com/",
          ],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5010",
            "http://localhost:5176/",
            "https://khadak-mern.onrender.com/api/v1",
            "https://khadak-mern.vercel.app",
            "https://khadak-mern-s8ce.vercel.app",
            "https://delhimazza.com",
            "https://delhimazza.com/admin",
            "https://admin.delhimazza.com/",
          ],
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
app.use("/api/v1/footer", footerRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/mail", mailRouter);
app.use("/api/v1/blog", blogRouter);

app.listen(PORT, () => {
  console.log(` app is running on http://localhost:${PORT}`);
});
