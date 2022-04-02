const Discord = require('discord.js')
const simplydjs = require("simply-djs")
module.exports = {
    name: 'ticket',
    category: "tickets",
    description: 'Creates Tickets',
    usage: 'w?ticket',
    run : async (client, message, args) => {
     

simplydjs.ticketSystem(message, message.channel, {
     embedDesc: 'Click The Button To Make Ticket', // default: '🎫 Create a ticket by clicking the button 🎫'
    embedColor: '#075FFFF', // default: #075FFFF
    embedFoot: 'By NarutoCodez', // default: message.guild.name
    emoji: '908346416827625562', // default:, 🎫
    color: '', // default: blurple
})
}
}
