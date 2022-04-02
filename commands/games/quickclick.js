const { Message, Client } = require("discord.js");
const { QuickClick } = require('weky')

module.exports = {
    name: "quickclick",
    aliases: ["quick click","click"],
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

        await QuickClick({
            message: message,
            embed: {
                title: 'Quick Click',
                color: '#5865F2',
                footer: '©️ Made by WHITE DEVIL',
                timestamp: true
            },
            time: 60000,
            waitMessage: 'The buttons may appear anytime now!',
            startMessage:
                'First person to press the correct button will win. You have **{{time}}**!',
            winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
            loseMessage: 'No one pressed the button in time. So, I dropped the game!',
            emoji: '👆',
            ongoingMessage:
                "A game is already runnning in <#{{channel}}>. You can't start a new one!"
        });
    }
}