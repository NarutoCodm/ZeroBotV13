const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "vote",
  aliases: [],
  usage: "vote",
  description: "Vote for the bot",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<a:yes:915553544210358294>"


      const invite = new MessageButton()
					.setLabel('top.gg')
					.setStyle('LINK')
          .setURL("https://top.gg/bot/933351535109373972/vote")
      


      

      const row1 = new MessageActionRow()
      .addComponents([invite])


    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("**Vote for our bot**!")
      .setThumbnail('https://cdn.discordapp.com/avatars/933351535109373972/33684552207bb75a5dacc12a3b71b155.webp')
      .setDescription('↷₊˚ʚ Support ZeroBot by voting our bot in [top.gg](https://top.gg/bot/933351535109373972/vote)\n ・Exclusive role in our [support server](https://dsc.gg/zerobotdev)   ')


  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });














    

  }
}