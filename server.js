//VARIABLES
const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helper.js");
const sequelize = require("./config/connection");
// const socket = require("socket.io")
const server = http.createServer(app);
const { Server } = require("socket.io");


//INTIALIZING VARIABLES
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const io = new Server(server);
// const io = socket()
const PORT = process.env.PORT || 3001;

//run when user login
// io.on('connected', socket => {
//   console.log("New server connection")

io.on('connection', (socket) => {
  console.log('a user connected');


  //Welcome user message
  socket.emit('message', 'Welcome to fAIM!')

  //Let users know when other user connects
  socket.broadcast.emit('message', 'Another user has joined the chat');

  //Run on user logout
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')

  })
  //Listen for message
  socket.on('chatMessage', (chat) => {
    console.log(chat);
  })
})

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
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () =>
    console.log(`Now listening http://localhost:${PORT}/`)
  );
});