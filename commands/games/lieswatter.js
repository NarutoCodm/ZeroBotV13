const { Message, Client } = require("discord.js");
const { LieSwatter } = require('weky')

module.exports = {
    name: "lieswatter",
    aliases: ["lie","swatter","lie swatter"],
	category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

		await LieSwatter({
			message: message,
			embed: {
				title: 'Lie Swatter',
				color: '#5865F2',
				footer: '©️ Made By ZeroBot Development',
				timestamp: true
			},
			thinkMessage: 'I am thinking',
			winMessage:
				'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
			loseMessage: 'Better luck next time! It was a **{{answer}}**.',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
			buttons: { true: 'Truth', lie: 'Lie' }
		});
		
    }
}