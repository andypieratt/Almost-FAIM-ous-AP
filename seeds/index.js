const { User } = require("../models");

//create some users to test things out
const userData = [
  {
    username: "~T-swift-cutie~",
    password: "1234",
    // "email": "ted@ted.com"
  },
  {
    username: "o0Cool-Hand-DEEzines0o",
    password: "1234",
    // "email": "luke@luke.com"
  },
  {
    username: "xXJaRODXx",
    password: "1234",
    // "email": "jarryod@jarryod.com"
  },
  {
    username: "J_Tal-montana",
    password: "1234",
    // "email": "jason@jason.com"
  },
  {
    username: "A-Pie_inTheSky",
    password: "1234",
    // "email": "andy@andy.com"
  },
];

const seedUser = () => User.bulkCreate(userData);

seedUser();
