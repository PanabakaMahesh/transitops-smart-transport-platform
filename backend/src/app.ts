import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes";
/** 
import notFoundMiddleware from "./middleware/notFound.middleware";
import errorMiddleware from "./middleware/error.middleware";
*/
const app = express();

/**
 * ==============================
 * Security Middleware
 * ==============================
 */
app.use(helmet());

/**
 * ==============================
 * Enable Cross-Origin Resource Sharing (CORS)
 * ==============================
 */
app.use(cors());

/**
 * ==============================
 * HTTP Request Logger
 * ==============================
 */
app.use(morgan("dev"));

/**
 * ==============================
 * Parse Incoming JSON Requests
 * ==============================
 */
app.use(express.json());

/**
 * ==============================
 * Parse URL Encoded Requests
 * ==============================
 */
app.use(express.urlencoded({ extended: true }));

/**
 * ==============================
 * API Routes
 * ==============================
 */
app.use("/", indexRoutes);

/**
 * ==============================
 * 404 Not Found Middleware
 * ==============================
 */
/** 
app.use(notFoundMiddleware);
*/
/**
 * ==============================
 * Global Error Handler
 * (Must Always Be Last)
 * ==============================
 */
/** 
app.use(errorMiddleware);
*/
export default app;