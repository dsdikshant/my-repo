const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

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
  .post("/", auth, userController.createUser)
  //Products ---- GET
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  // PUT------------- UPDATE
  .put("/:id", auth, userController.updateUser)
  // DELETE------------Delete
  .delete("/:id", userController.deleteUser);

exports.router = router;
