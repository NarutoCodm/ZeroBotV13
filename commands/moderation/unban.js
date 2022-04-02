const { Discord, MessageEmbed } = require("discord.js")

const { Permissions } = require("discord.js")

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "unban",
  category: "moderation",
  description: "unbans a member",
  timeout: "5000",
  usage: "unban <user>",
  run: async (client, message, args) => {
    let check = "<a:yes:915553544210358294>"
    let cross = "<:no:915579751886880858>"
    let warn = "<a:warn:915553541127557180>"
    try {




      if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You do not have ban members permissions**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **I do not have ban members permissions**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      const target = args[0]
      if (!target) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You must provide the user ID**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (target === message.member.id) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You can not unban yourself**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }


      if (target === client.user.id) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You must unban the interaction manually**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }


      setTimeout(async () => {
        message.member.guild.members.unban(target)
      }, 10)

      let embed = new MessageEmbed()
        .setDescription(`**${check} Unbanned ${target.username}**`)
        .setColor(green)
      message.channel.send({ embeds: [embed] })






    } catch (err) {
      let check = client.emojis.cache.get("886812691262496850");
      let cross = client.emojis.cache.get("886812692000686140");
      let warn = client.emojis.cache.get("890917122337833000");

      console.log(err)
      let embed = new MessageEmbed()
        .setDescription(`**${cross} I can not unban the user**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] })
    }
  }
}