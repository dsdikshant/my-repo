const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  console.log("Inside POST!!!!");
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(products.find((p) => p.id == req.body.id));
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = products.find((p) => p.id == id);
  res.json(product);
};

exports.updateProduct = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ PUT: "Product Updated" });
};

exports.deleteProduct = (req, res) => {
  res.json({ type: "DELETE" });
};
