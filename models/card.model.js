const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  example: {
    type: String,
  },
  learned: {
    type: Boolean,
    default: false,
  },
  deck: [
    {
      type: Schema.Types.ObjectId,
      ref: "Deck",
    },
  ],
});

module.exports = mongoose.model("Card", cardSchema);
