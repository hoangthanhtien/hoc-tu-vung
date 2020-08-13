const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Set view engine to ejs and use body-parser
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const deckRoutes = require("./routes/deck.route");
app.use("/decks", deckRoutes);

// Connect to database
mongoose.connect("mongodb://localhost/deck", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  res.send("This is home page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
