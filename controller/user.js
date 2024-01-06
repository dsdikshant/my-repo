const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createUser = (req, res) => {
  console.log("Inside POST!!!!");
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(users.find((p) => p.id == req.body.id));
};

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = users.find((p) => p.id == id);
  res.json(product);
};

exports.updateUser = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id == id);
  users.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ PUT: "Product Updated" });
};

exports.deleteUser = (req, res) => {
  res.json({ type: "DELETE" });
};
