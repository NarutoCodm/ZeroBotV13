const config = require("./config.json") 

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 
const client = require("../../index") 
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://dsc.gg/zerobotdev')
 .setDescription(`<:cookie:921311220814979084> Thank You For Inviting Me. My prefix is \`${config.prefix}\`
Run ${config.prefix} help for more info about me!`)
 
 .addFields(
 { name: 'Creator', value: '<@835164331741413426>' }
 )

 .setImage('https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif')
 .setTimestamp()
 .setFooter('MoonLight', 'https://dsc.gg/zerobotdev');
channel.send({embeds : [embed]});
}) 
