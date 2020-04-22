const express = require("express");
const app = express();

const mockUserData = [
  {
    name: "Mark",
  },
  {
    name: "Jill",
  },
];

app.get("/users", function (req, res) {
  res.status(200).send({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.status(200).send({
    success: true,
    message: "successfully got users. Nice!",
    users: req.params.id,
  });
});

app.listen(3000, function () {
  console.log("Server is running");
});
