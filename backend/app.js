import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shuting down due to uncaught exception");
  process.exit();
});

dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database
connectDatabase();

app.use(express.json());

// Imoprt all routes
import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down sever due to unhandled Promise Rejection");
  server.close(() => {
    process.exit();
  });
});
