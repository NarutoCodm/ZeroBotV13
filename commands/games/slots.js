const { Slots } = require('discord-gamecord')


module.exports = {
    name: "slots",
    aliases: ['slot'],
    permissions : [""],
    category: "Discord Games",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
new Slots({
    message: message,
    slash_command: false,
    embed: {
        title: '🎰 Slot Machine',
        color: '#5865F2'
    }
}).startGame();
    }
}