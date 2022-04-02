const client = require("../index")
const { Message, Client, MessageEmbed } = require("discord.js")
const db = require('quick.db')

const Discord = require("discord.js")
client.on('guildMemberRemove', async member => {
   let warn = "<:WarnMark:899691228826857512>"
  try {

let time = await db.get(`bantime_${member.guild.id}`)
if(!time || time == null) time = 432000000

 let msg = await db.get(`banmsg_${member.guild.id}`)
 if(!msg) msg = `**You were banned in ${member.guild.name} because of dank heist abuse**`

        let embed = new MessageEmbed()
          .setDescription(`${warn} **${msg}** `)
          .setColor('YELLOW')





  let sus = await db.get(`heist_users_${member.guild.id}`)

  if (sus === [] || sus === undefined || !sus || !Array.isArray(sus)) return console.log('sus ' + sus);
  //brain dead
  sus.forEach(async imposter => { // nothing ?

    if (member.user.id === imposter) {

      let re = await db.get(`toban_${member.guild.id}`)
  console.log(re)
      if (re === [] || re === '' || re === '770551872309166100' || !Array.isArray(re)) {

client.users.fetch(member.id).then((user) => {
          user.send({embeds : [embed]}).catch((e) => {
            console.log(e)
          })
        }).catch((e) => {
          console.log(e)
        })

  member.guild.members.ban(member.id)



    setTimeout(async () => {
     member.guild.members.unban(member.id) 
  }, time)


 await db.add(`freeload_${member.id}_${member.guild.id}`, 1)
let x = db.get(`freeload_${member.id}_${member.guild.id}`)
console.log(x)
      }
      else if (re !== [] || re !== '' || re !== '770551872309166100' || Array.isArray(re)){

client.users.fetch(member.id).then((user) => {
          user.send({embeds : [embed]}).catch((e) => {
            console.log(e)
          })
        }).catch((e) => {
          console.log(e)
        })

  member.guild.members.ban(member.id)



    setTimeout(async () => {
     member.guild.members.unban(member.id) 
  }, time)
  
        await db.add(`freeload_${member.id}_${member.guild.id}`, 1)
        let x = await db.get(`freeload_${member.id}_${member.guild.id}`)
      console.log(x)
      }
      
    } else {
      return;
    }
  })
  } catch(err) {
    console.log(err)
  }
})
