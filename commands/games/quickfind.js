const { Message, Client } = require("discord.js");
const { QuickFind } = require('weky')

module.exports = {
    name: "quickfind",
    aliases: ["quick find","find"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

await QuickFind({
    message: message,
    embed: {
        title: 'Quick Find',
        color: '#5865F2',
        footer: '©️ Made by Jerlech#4716',
        timestamp: true
    },
    backgroundhex: 'f5f5f5', // Without "#"
    texthex: '5865F2', // Without "#"
    textlength: 7,
    time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the correct button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!"
});
    }
}