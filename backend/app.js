const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoSanitize = require("express-mongo-sanitize");
const key = require("./utils/libs/gen-keys");

const globalErrorHandler = require("./controllers/error.controller");

dotenv.config();

if (process.env.NODE_ENV === "production") {
  process.env.ACCESS_TOKEN_SECRET = key(64);
  process.env.COOKIE_SECRET = key(64);
}

const app = express();

// Set Security HTTP Headers
app.use(helmet());

// Development logging using morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));

// Data sanitize against NoSQL Query Injection
app.use(mongoSanitize()); // Checks the request headers, query strings, params for malicious codes

// Import all routes
const { authRouter } = require("./routes/auth/index");
const { userRouter } = require("./routes/user/user.route");
const { productRouter } = require("./routes/product/product.route");
const { commentRouter } = require("./routes/comment/comment.route");
const { ReplyRouter } = require("./routes/reply/reply.route");

//default Route
app.get("/", (req, res) => {
  res.json({ message: `Welcome to Product Management API v1` });
});

// Home Route
app.get("/api/v1/home", (req, res) => {
  res.json({ message: `Welcome to Product Management API v1` });
});

//   Routes Middleware
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/reply", ReplyRouter);

// Unhandled Routes
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ message: `Can't find resource ${req.originalUrl} on this server` });
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
