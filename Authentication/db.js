const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://satyamkr:satyamkumar@cluster0.8dhk6j6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(express.json());
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({
    email: username,
  });

  if (existingUser) {
    return res.status(400).send("UserName already Exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();

  res.json({
    msg: "User created SuccessFully",
  });
});

app.listen(3000);
