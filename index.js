const http = require("http");
const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.static("public"));
server.use("/api/v1/products", productRouter.router);
server.use("/api/v1/users", userRouter.router);

// MVC----------Model view Controller

//API---- End Point   C R U D

//Products ---- POST

server.get("/demo", (req, res) => {
  res.status(404).send("Not Founddd :(");
  res.json(products);
  //res.sendFile("D:Node Appindex.html");
});

server.listen(8080, () => {
  console.log("Server started!!");
});
