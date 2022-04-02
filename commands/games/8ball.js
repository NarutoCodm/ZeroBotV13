const { EightBall } = require('discord-gamecord')
const question = 'What\'s going on?'

module.exports = {
    name: "8ball",
    aliases: ['eightball'],
    permissions : [""],
    category: "Discord Games",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {

new EightBall({
    message: message,
    question: question,
    slash_command: false,
    embed: {
        title: '🎱 8Ball',
        color: '#5865F2'
    }
}).startGame();
     }
    }