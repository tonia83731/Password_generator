import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import generatePassword from "./generate_password.js";

const app = express();
const port = 3000;
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set("views", "./views");

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
  // res.send(`This will be a random password generator`);
});

app.post("/", (req, res) => {
  // console.log("req.body", req.body);
  // console.log(`password id ${generatePassword(req.body)}`);
  const options = req.body
  const password = generatePassword(options)
  res.render("index", {password: password, options: options});
});

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`);
});
