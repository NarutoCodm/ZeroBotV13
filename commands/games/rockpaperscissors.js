const { RockPaperScissors } = require('discord-gamecord')
const { Message, Client } = require("discord.js");

module.exports = {
    name: "rockpaper",
    aliases: ['rpc'],
    permissions : [""],
    category: "Discord Games",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
        const member = message.mentions.members.first() 
        if(!member)  return  message.channel.send('Please mention a user to play!')
new RockPaperScissors({
  message: message,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Rock Paper Scissors',
    description: 'Press a button below to make a choice!',
    color: '#5865F2',
  },
  buttons: {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors',
  },
  emojis: {
    rock: '🌑',
    paper: '📃',
    scissors: '✂️',
  },
  othersMessage: 'You are not allowed to use buttons for this message!',
  chooseMessage: 'You choose {emoji}!',
  noChangeMessage: 'You cannot change your selection!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
  cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{winner} won the game!',
  gameEndMessage: 'The game went unfinished :(',
}).startGame();
     }
}