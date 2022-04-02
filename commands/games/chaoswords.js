const { Message, Client } = require("discord.js");
const { ChaosWords } = require('weky')

module.exports = {
    name: "chaoswords",
    aliases: ["chaosword","chaos"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

await ChaosWords({
    message: message,
    embed: {
        title: 'ChaosWords',
        description: 'You have **{{time}}** to find the hidden words in the below sentence.',
        color: '#5865F2',
        field1: 'Sentence:',
        field2: 'Words Found/Remaining Words:',
        field3: 'Words found:',
        field4: 'Words:',
        footer: '©️ Made by White Devil',
        timestamp: true
    },
    winMessage: 'GG, You won! You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    wrongWordMessage: 'Wrong Guess! You have **{{remaining_tries}}** tries left.',
    correctWordMessage: 'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).',
    time: 60000,
    words: ['hello', 'these', 'are', 'words'],
    charGenerated: 17,
    maxTries: 10,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
    }
}