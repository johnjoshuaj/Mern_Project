const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register.js");

//upload
const multer = require("multer");
const path = require("path");
const userModel = require("./models/users.js");

const app = express();
app.use(cors());
app.use(express.json());

//upload
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/MgUserRegister");



///Create
app.post("/userdetails", (req, res) => {
  const { firstname, lastname, email, mobilenumber, reasonofmeeting } =
    req.body;
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json("Already have an account");
      } else {
        RegisterModel.create({
          firstname,
          lastname,
          email,
          mobilenumber,
          reasonofmeeting,
        })
          .then((res) => res.json(res))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

//upload


const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("file"), (req, res) => {
  userModel
    .create({ image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/getImage", (req, res) => {
  userModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});


app.get("/userdetails", (req, res) => {
  RegisterModel.find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});



app.listen(3001, () => {
  console.log("Server is Running");
});
