/*
@NOTE: THIS WON'T WORK UNLESS YOU HAVE AN INTERACTION EVENT IN index.js FILE! [You can make a event handler and make in it aswell]
*/

/* Paste This In Index.js [If you don't have the event]
Make sure it's not pasted inside events, put it outside a event.
===============================================
const simplydjs = require("simply-djs")

client.on("interactionCreate", async interaction =>{
  simplydjs.clickBtn(interaction, {
    embedDesc: 'This Is Description',
    embedColor: '#fffff', // default: #075FFF
    closeColor: '', //default: blurple
    closeEmoji: '😃', // default: 🔒
    
    delColor: '', // default: grey
    delEmoji: '', // default: ❌
    openColor: '' , // default: green
    openEmoji: '', // default: 🔓
    timeout: true, // default: true | Needs to be boolean (true/false)
  
    cooldownMsg: 'Bruh Mate',
    categoryID: '881801380841541632',
    role: '859824835802562590' // Role which sees the ticket channel (like Support Role)
    })
})
===================================================
*/
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
module.exports = {
    name: 'codesyt2',
    category: "info",
    run : async (client, message, args, interaction) => {
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
      .addField("<a:arrow:934812215171751957>  Server Cloner | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/ExoCord-Discord-Server-Cloner-1?v=1)")
      .addField("<a:arrow:934812215171751957>  Manager Bot | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/Manager?v=1)")
      .addField("<a:arrow:934812215171751957>  Uptimer Bot | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/Uptimer-Botv12?v=1)")
      .addField("<a:arrow:934812215171751957>  ZerobotV13 | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/ZeroBot-V13?v=1)")
      .setColor("cccfff")
      .setImage("https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '949630264345243708',
        label: 'Leaks Role', // default: *role name*
        color: 'PRIMARY', // default: SECONDARY
        emoji: '950207089312149514',
      }, // etc..
      {
        role: '949297805036507196',
        label: 'Random Role', // default: *role name*
        color: 'SECONDARY', // default: SECONDARY
        emoji: '944952202559111219',
      }
      //Keep adding here more
    ],
  })
    }
}