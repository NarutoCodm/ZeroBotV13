const Discord = require('discord.js')
const simplydjs = require("simply-djs")
module.exports = {
    name: 'tictactoe',
    category: "tictactoe",
    description: 'Creates some random bruh moment',
    usage: 'w?ticket',
    run : async (client, message, args) => {

simplydjs.tictactoe(message, {
    xEmoji: '', //default: ❌
    oEmoji: '', //default: ⭕
    idleEmoji: '', //default: ➖
    embedColor: '', //default: #075FFF
    embedFoot: 'Subscrab' //default: 'Make sure to win ;)' 
})
    }
}