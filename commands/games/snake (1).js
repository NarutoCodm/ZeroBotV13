const { Snake } = require('discord-gamecord');
const { Message, Client } = require("discord.js");

module.exports = {
    name: "snake",
    aliases: [''],
    permissions : [""],
    category: "Discord Games",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
            new Snake({
              message: message,
              slash_command: false,
              embed: {
                title: 'Snake Game',
                color: '#5865F2',
                OverTitle: 'Game Over',
              },
              snake: { head: '🐸', body: '🟩', tail: '🟢' },
              emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️', 
                down: '⬇️',
                right: '➡️',
                left: '⬅️',
              }
            }).startGame();
          
    },
};