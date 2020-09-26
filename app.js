require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fetch = require("node-fetch");
const { stringify } = require("querystring");
const csrf = require("csurf");
const helmet = require('helmet');
const compression = require('compression');

const nodemailer = require("nodemailer");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views/pages");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());
app.use(compression());

app.post('/', (req, res) => {
  console.log('got a request');
});

app.post("/contact", async (req, res) => {
  if (!req.body.captcha) {
    return res.json({ success: false, msg: "Please select captcha" });
  }

  const secretKey = process.env.G_SECRET_KEY;

  const query = stringify({
    secret: secretKey,
    response: req.body.captcha,
    remoteip: req.connection.remoteAddress,
  });

  const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;

  const body = await fetch(verifyURL).then((res) => res.json());

  if (body.success !== undefined && !body.success) {
    return res.json({ success: false, msg: "Failed captcha verification" });
  }

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const output = `
    <h1>Message from ${name}</h1>
    <h2>Email from ${email}</h2>
    <h3>Message content: ${message}</h3>
  `;

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter
    .sendMail({
      from: "<eddie@eddiecleary.com>",
      to: "eddie@eddiecleary.com",
      subject: "New Form|eddiecleary.com",
      html: output,
    })
    .then((result) => {
      return res.json({
        success: true,
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
      });
    });
});

app.listen(32000, () => {
  console.log("Server started for eddiecleary.com @ port 32000");
});
