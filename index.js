const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("Made By ZeroBot Development")
})

app.listen(3000, () => {
 console.log("Bot is being made 24/7")
})

const Discord = require("discord.js") // otherwise we can't make discord embeds
const { Client, Collection } = Discord
const { prefix, token } = require("./config.json")


const client = new Client({
    intents: "32767",
});


module.exports = client;




// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json")
client.color = require("./color.json")

const simplydjs = require("simply-djs")


client.on("interactionCreate", async interaction =>{
  
  simplydjs.clickBtn(interaction, {
    embedDesc: 'This Is Description',
    embedColor: '#fffff', // default: #075FFF
    closeColor: '', //default: blurple
    closeEmoji: '🔒', // default: 🔒
    
    delColor: '', // default: grey
    delEmoji: '948815382037278720', // default: ❌
    openColor: '' , // default: green
    openEmoji: '947853974906744842', // default: 🔓
    timeout: true, // default: true | Needs to be boolean (true/false)
  
    cooldownMsg: 'Bruh Mate',
    categoryID: '939872526601977866',
    role: '939872488266018836' // Role which sees the ticket channel (like Support Role)
  })
})



// Initializing the project
require("./handler")(client);

const { mongooseConnectionString } = require("./config.json");

client.login(process.env.token || token);
