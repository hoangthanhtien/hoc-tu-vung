// db.decks.insertOne({
// })

db.decks.insertOne({
  name: "Test Deck 2",
  cards: [
    {
      title: "Hello",
      meaning: "Xin chao",
      example: "Hello World",
    },
    {
      title: "hi",
      meaning: "Chao xin",
      example: "Hi World",
    },
  ],
});
// db.decks.insertOne({
//   name: "Test Deck",
//   word: [
//     {
//       title: "Hello",
//       meaning: "Xin chao",
//       example: "Hello World",
//     },
//   ],
// });
