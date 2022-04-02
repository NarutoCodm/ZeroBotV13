const Discord = require('discord.js')
const simplydjs = require('simply-djs')
module.exports = {
    name: 'rr',
    category: "info",
    run : async (client, message, args, interaction) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Anything You Like")
      .setDescription("Hello World. Select your roles")
      .setFooter("HELLO")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '949297810874986507',
        label: 'discord.js', // default: *role name*
        color: 'PRIMARY', // default: SECONDARY
        emoji: '950207089312149514',
      }, // etc..
      {
        role: '949297809365016616',
        label: 'Python', // default: *role name*
        color: 'SECONDARY', // default: SECONDARY
        emoji: '950207090062946404',
      }
      //Keep adding here more
    ],
  })
    }
}