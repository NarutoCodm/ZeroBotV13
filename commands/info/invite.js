const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "invite",
  aliases: ["inv"],
  usage: "invite",
  description: "Invites Link",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"


      const invite = new MessageButton()
					.setLabel('Invite the bot')
					.setStyle('LINK')
          .setURL(`https://discord.com/oauth2/authorize?client_id=933351535109373972&permissions=21411396854&scope=bot%20applications.commands`)
      

		  const server = new MessageButton()
					.setLabel('Support server')
					.setStyle('LINK')
          .setURL("https://dsc.gg/zerobotdev")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("**Welcome to ZeroBot Invite Panel**")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription('↷₊˚ʚ Bot Prefix ``-`` \n ・If you have any enquires about the bot, you could join our [support server](https://dsc.gg/zerobotdev) ')
      .setImage('https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif')


  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });














    

  }
}