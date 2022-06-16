//VARIABLES
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helper.js");
const sequelize = require("./config/connection");

//INTIALIZING VARIABLES
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use(express.join());

app.use(session(sess));
app.use(routes);

//LISTENING
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening http://localhost:${PORT}/`)
  );
});
