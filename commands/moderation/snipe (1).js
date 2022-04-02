const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
let snipe = new Discord.Collection();
let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

const { Permissions } = require('discord.js');
module.exports = {
  name: "snipe",
  category: "moderation",
  description: "Snipe deleted messages and get the criminal red handed",
  usage: "snipe",
  run: async (client, message, args) => {
    let check = "<a:yes:915553544210358294>"
    let cross = "<:no:915579751886880858>"
    let warn = "<a:warn:915553541127557180>"
       try {
    
    

client.on("messageDelete", message => {
  snipe.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null,
    date: new Date().toLocaleString("en-GB", {
      dataStyle: "full",
      timeStyle: "short"
    })
  });
});

    const msg = snipe.get(message.channel.id);
    
    const embed = new MessageEmbed()
        .setDescription(`**${cross} No messages found**`)
        .setColor(red)
    if (!msg) return message.channel.send({ embeds: [embed] })
    // Send message
    const embed1 = new Discord.MessageEmbed()
      .setColor('2F3136')
      .setAuthor(`${msg.author.tag}`)
      .setDescription(`${msg.content}`)


      if (msg.image) embed.setImage(msg.image);

    
    message.channel.send({embeds : [embed1]});

       } catch (err) {
         console.log(err)
       }
  }
}