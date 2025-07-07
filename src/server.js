import nodemailer from "nodemailer";
import dotenv from "dotenv";
import getTimeNow from "./time.js";

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nagdista@gmail.com",
    pass: process.env.G_PASS,
  },
});

const mailOpt = {
  from: "Mhmoud Alnagdy <nagdista@gmail.com>",
  to: "nagdista@gmail.com",
  subject: "Today Reminder",
  html: `Today is: <strong>${getTimeNow().today}/${getTimeNow().month}/${
    getTimeNow().year
  } </strong>and The
Hour is: <strong>${getTimeNow().hour} :  ${getTimeNow().minute} : ${
    getTimeNow().second
  }</strong>

`,
};

setInterval(() => {
  if (
    getTimeNow.hour === (1 || 2 || 3 || 4||5||6||7||8||9||10||11||12) &&
    getTimeNow().minute === getTimeNow().minute &&
    getTimeNow().second === 0
  ) {
    transporter.sendMail(mailOpt, (err, info) => {
      if (err) {
        console.log(`err from send mail ${err} , ${err.message}`);
      } else {
        console.log(`mail Sended`);
      }
    });
  } else {
    console.log(`${getTimeNow().minute} , ${getTimeNow().second}`);
  }
}, 1000);
