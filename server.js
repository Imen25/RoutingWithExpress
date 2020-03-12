const express = require("express");
const hbs = require("hbs");

const app = express();

// app.use(express.static(__dirname + "/public"), () => {
//   console.log(new Date());
// });
app.use(
  (middleware = (req, resp, next) => {
    // if (err) console.log("error");
    // else {
    const date = new Date();
    const time = date.getHours();
    // console.log(date.getHours() + " " + date.getMinutes());
    if (time >= 8 && time <= 17) next();
    else resp.send("Our office is not open now");
  })
);
app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/public/home.html");
});
app.get("/services", (req, resp) => {
  resp.sendFile(__dirname + "/public/ourservices.html");
});
app.get("/contact", (req, resp) => {
  resp.sendFile(__dirname + "/public/contact.html");
});

app.listen(3000, err => {
  err
    ? console.log("server is not running")
    : console.log("server is running on port 3000");
});
