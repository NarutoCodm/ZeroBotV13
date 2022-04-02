const { Message, Client } = require("discord.js");
const { WillYouPressTheButton } = require('weky')

module.exports = {
    name: "willyoupressthebutton",
    aliases: ["willyoupress"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {


        await WillYouPressTheButton({
            message: message,
            embed: {
                title: 'Will you press the button?',
                description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
                color: '#5865F2',
                footer: '©️ Made By ZeroBot Development',
                timestamp: true
            },
            button: { yes: 'Yes', no: 'No' },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
    }
}