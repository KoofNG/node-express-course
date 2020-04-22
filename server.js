const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const mockUserData = [
  {
    name: "Mark",
  },
  {
    name: "Jill",
  },
];

app.post("/register", function (req, res) {
  const user = req.body;

  res.status(201).json({ user: user });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.status(200).json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "password and username does notmatch!",
    });
  }
});

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
