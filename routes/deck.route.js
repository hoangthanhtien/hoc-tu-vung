const express = require("express");
const router = express.Router();
// database model
const Deck = require("../models/deck.model");
const Card = require("../models/card.model");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const decks = await Deck.find({});
  res.render("deck/deck.ejs", { decks: decks });
});

router.get("/:id/cards", async (req, res) => {
  const cards = await Card.find({
    deck: req.params.id,
  });
  res.render("deck/card", { cards: cards });
});
router.get("/:id/cards/add-card", async (req, res) => {
  const cards = await Card.find({
    deck: req.params.id,
  });
  console.log(cards.deck);
  res.render("deck/add-card", { cards: cards });
});
router.post("/:id/cards/add-card", async (req, res) => {
  const newCard = new Card({
    deck: req.params.id,
    title: req.body.title,
    meaning: req.body.meaning,
    example: req.body.example,
  });
  newCard.save();
  res.redirect("/decks");
});

router.post("/", async (req, res) => {
  const newDeck = new Deck({ name: req.body.name });
  await newDeck.save();
  console.log(newDeck);
  res.redirect("/decks");
});

router.get("/test", async (req, res) => {
  const decks = await Deck.find({});
  Card.findOne({ title: "Hello" }).populate("");
  res.send(decks);
});

router.post("/test", async (req, res) => {
  const deck = new Deck({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  await deck.save(async (err) => {
    const card = new Card({
      title: req.body.title,
      meaning: req.body.meaning,
      example: req.body.example,
      deck: deck._id,
    });
    await card.save();
  });
  res.redirect("/decks/test");
});

module.exports = router;
