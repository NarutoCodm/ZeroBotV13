const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "ytcodes",
  aliases: ["code"],
  usage: "botinfo",
  description: "Bot Info",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"

    let servercount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
    const servers = await client.guilds.cache.size

    let embed = new Discord.MessageEmbed()
    .setTitle("━━━━<a:728495315711164437:934812216899797012>  Download Links <a:728495315711164437:934812216899797012> ━━━━━" )
      .setDescription("NArutoCodm")
      .setThumbnail("https://cdn.discordapp.com/avatars/933351535109373972/0b734020dcf83b8246abc29e06bb4961.webp?size=1024")
      .addField("<a:arrow:934812215171751957>  DropDown Roles | Credits: https://github.com/Nuggies-bot", "> [Click here for repl](https://replit.com/@akg1111/DropDown-Roles?v=1)")
      .addField("<a:arrow:934812215171751957>  Invite Manager | Credits: https://github.com/TheShadowGamer ", "> [Click here for repl](https://replit.com/@akg1111/Invite-Manager-1?v=1)")
      .addField("<a:arrow:934812215171751957>  Button Music Bot | Credits: https://discord.gg/B2mQ8BGdVj ", "> [Click here for repl](https://replit.com/@akg1111/MUSICBOT-WITHBUTTONS-XD-1?v=1)")
      .addField("<a:arrow:934812215171751957>  Even Better Music Bot | Credits: https://discord.com/invite/2YEcB3D7eNg ", "> [Click here for repl](https://replit.com/@akg1111/Music-Bot-With-Buttons-3?v=1)")
      .addField("<a:arrow:934812215171751957>  Giveaway Bot | Credits: NarutoCodm ", "> [Click here for repl](https://github.com/NarutoCodm/GiveawayBotWithReq.git)")
      .addField("<a:arrow:934812215171751957>  ZeroBot Code | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/ZeroBotV12?v=1)")
      .addField("<a:arrow:934812215171751957>  Modmail Bot | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/MODMAILBOT?v=1)")
      .setColor("cccfff")
      .setImage("https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif")
      
      


  let menumsg = await message.channel.send({ embeds: [embed]});














    

  }
}