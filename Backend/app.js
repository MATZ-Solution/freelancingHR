const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const jobRoutes = require("./routes/jobRoutes");
const { getConnectionFromPool } = require("./config/connection");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); // Use http.createServer to create the server

app.use(cookieParser());
app.use(bodyParser.json());
// app.use(cors()); 
// app.use(cors({ credentials: true, origin: '*' }))
app.use(cors({ credentials: true, origin: "*" }))

app.use((req, res, next) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Pragma", "no-cache");
  res.header("Expires", "0");
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});
getConnectionFromPool();

app.use("/", userRoutes);
app.use("/project", projectRoutes);
app.use("/job", jobRoutes);

server.listen(5500, () => {
  console.log("Server is running on port 5500");
});
