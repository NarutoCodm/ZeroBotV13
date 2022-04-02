const { Message, Client } = require("discord.js");
const { NeverHaveIEver } = require('weky')

module.exports = {
    name: "neverhaveiever",
    aliases: ["never"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

        await NeverHaveIEver({
            message: message,
            embed: {
                title: 'Never Have I Ever',
                color: '#5865F2',
                footer: '©️ Made by WHITE DEVIL',
                timestamp: true
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttons: { optionA: 'Yes', optionB: 'No' }
        });
    }
}