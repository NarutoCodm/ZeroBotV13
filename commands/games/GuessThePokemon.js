const { GuessThePokemon } = require('discord-gamecord')

module.exports = {
    name: "guessthepokemon",
    aliases: ['guessthe','pokemon'],
    permissions : [""],
    category: "Discord Games",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
new GuessThePokemon({
  message: message,
  slash_command: false,
  embed: {
    title: 'Who\'s This Pokemon?',
    footer: 'You have only 1 chance',
    color: '#5865F2',
  },
  time: 60000,
  thinkMessage: '**Thinking...**',
  winMessage: 'Nice! The pokemon was **{pokemon}**',
  stopMessage: 'Better luck next time! It was a **{pokemon}**',
  incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
}).startGame();
     }
    }