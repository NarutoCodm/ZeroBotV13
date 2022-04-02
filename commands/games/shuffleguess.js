const { Message, Client } = require("discord.js");
const { ShuffleGuess } = require('weky')

module.exports = {
    name: "shuffleguess",
    aliases: ["shuffle","shuffle guess"],
	category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

await ShuffleGuess({
	message: message,
	embed: {
		title: 'Shuffle Guess',
		color: '#5865F2',
        footer: '©️ Made by Jerlech#4716',
		timestamp: true
	},
	word: ['voice'],
	button: { cancel: 'Cancel', reshuffle: 'Reshuffle' },
	startMessage:
		'I shuffled a word it is **`{{word}}`**. You have **{{time}}** to find the correct word!',
	winMessage:
		'GG, It was **{{word}}**! You gave the correct answer in **{{time}}.**',
	loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
	incorrectMessage: "No {{author}}! The word isn't `{{answer}}`",
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	time: 60000
});
    }
}