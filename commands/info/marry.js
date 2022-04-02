const { Message, Client } = require("discord.js");

module.exports = {
    name: "marry",
    aliases: [],
    run: async (client, message, args) => {
        message.channel.send(`I don't think anyone would wanna marry you tho. Why not trying a dog?`);
    },
};//same 