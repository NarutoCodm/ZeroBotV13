const simplydjs = require("simply-djs");
module.exports = {
  name: "tictactoe",
  aliases: ['ttt'],
  run: async (client, message, args) => {
    // messageCreate Event

simplydjs.tictactoe(message, {
  xEmoji: "❌", //default: ❌
  oEmoji: "⭕", //default: ⭕
  idleEmoji: "➖", //default: ➖
  embedColor: "#075FFF", //default: #075FFF
  embedFoot: "Lets see Who wins" //default: 'Make sure to win ;)'
});
  }
}