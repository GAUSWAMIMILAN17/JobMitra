import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"

dotenv.config({})
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser)

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions))

const PORT = process.env.PORT || 5001

// api's
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);


app.listen(PORT, () => {
  connectDB()
  console.log(`✅ Server is running on port ${PORT}`);
});
