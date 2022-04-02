const { Message, Client } = require("discord.js");
const { Sudo } = require('weky')

module.exports = {
    name: "sudo",
    aliases: ["su"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {


await Sudo({
	message: message,
	member: message.mentions.members.first(),
	text: 'This is text!',
	deleteMessage: false
});
    }
}