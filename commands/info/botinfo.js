const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "botinfo",
  aliases: ["bi"],
  usage: "botinfo",
  description: "Bot Info",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"

    let servercount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
    const servers = await client.guilds.cache.size

    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("zerobotInfo")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`\n・**Bot Developers**: MArutoCodez\n・**Bot Server Count**: ${servers}\n**・Bot Membercount**: ${servercount}`)
      .setImage('https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif')


  let menumsg = await message.channel.send({ embeds: [embed]});














    

  }
}