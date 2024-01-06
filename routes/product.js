const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

const auth = (req, res, next) => {
  console.log("in AUTHH:::" + req.body.password);
  // if (req.body.password == "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

router
  .post("/", auth, productController.createProduct)
  //Products ---- GET
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProductById)
  // PUT------------- UPDATE
  .put("/:id", auth, productController.updateProduct)
  // DELETE------------Delete
  .delete("/:id", productController.deleteProduct);

exports.router = router;
