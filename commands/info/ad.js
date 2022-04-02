const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "advertise",
  aliases: ["adv"],
  usage: "advertise",
  description: "Server Ad",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"


      const invite = new MessageButton()
					.setLabel('Invite the bot')
					.setStyle('LINK')
          .setURL("https://discord.com/oauth2/authorize?client_id=845153824742440991&permissions=534789877601&redirect_uri=https%3A%2F%2Fdiscord.gg%2F5x2BMD6PUR&response_type=code&scope=guilds.join%20applications.commands%20bot")
      

		  const server = new MessageButton()
					.setLabel('Vote Muzox')
					.setStyle('LINK')
          .setURL("https://top.gg/bot/845153824742440991/vote")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription('Hey there! I’m **DEVIL3**,\nI’m a bot that help to make server safe and easy! I am Sponsered By **MUZOX MUSIC** Invite The Bot Below ')


  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });














    

  }
}
/**
 * @INFO
 * Bot Coded by NarutoCodm#0989 |
 * https://www.youtube.com/channel/UCpW4KtW2TLxWi_B0WgDfWEQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */