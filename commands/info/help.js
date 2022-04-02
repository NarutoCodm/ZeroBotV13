const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
  name: "help",
  aliases: ["aid", "hlp"],
  usage: "help",
  description: "Sends a menu with options!",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select the category')
          .addOptions([
            {
              label: 'Moderation Commands And Economy Commands',
              description: 'Click here to see Moderation commands And Economy Commands',
              value: 'first',
              emoji: '915553515408064553',
            },
            {
              label: 'Slash commands And Music Commands',
              description: 'Click to see the slash commands & Music Commands',
              value: 'second',
              emoji: '920298123220369428',
             
            },
            {
              label: 'Information Commands',
              description: 'Click to see the information commands',
              value: 'third',
              emoji: '889029109471141959',
            },
            {
              label: 'Game Commands',
              description: 'Click to see the Game commands',
              value: 'fourth',
              emoji: '915553561918722109',
            },
            {
              label: 'Fun Commands',
              description: 'Click to see the Fun commands',
              value: 'fifth',
              emoji: '915553554377359420',
            },
            {
              label: 'Utility Commands',
              description: 'Click to see the Utility commands',
              value: 'sixth',
              emoji: '915999243410473010',
            },



          ]),
      )

		  const invite = new MessageButton()
					.setLabel('Invite the bot')
					.setStyle('LINK')
          .setURL("https://discord.com/oauth2/authorize?client_id=933351535109373972&permissions=21411396854&scope=bot%20applications.commands")
      

		  const server = new MessageButton()
					.setLabel('Support server')
					.setStyle('LINK')
          .setURL("https://dsc.gg/zerobotdev")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


     let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
       .setTitle(` **__My Features__**`) 
        .setDescription(`> One of the Best  **Al In One Discord Bot!** **Moderation**, Info, **Utility**, **Economy**, And Also A New Awesome **Security** System! And  **Fun Commands**  **Administration** and **Auto-Moderation** and Way Much More!`)
      .setThumbnail(client.user.displayAvatarURL())
      .setImage('https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif')








    let menumsg = await message.channel.send({ embeds: [embed], components: [row, row1] });





    let embed1 = new MessageEmbed()
      .setTitle("Moderation Commands")
      .setDescription("`ban`,`kick`,`mute`,`purge`,`role`,`slowmode`,`snipe`,`unban`,`unmute`,`warn`")
      .addField("\n **Economy** | **Enabled**", "`bal` `hunt` `search` `adopt` `beg` `daily` `buy` `dep` `fish` `gamble` `inv` `multi` `petlist` `psotmeme` `rich` `rob` `sell` `shop` `use` `with`")
      .setColor('2F3136')



    let embed2 = new MessageEmbed()
      .setTitle("Slash commands")
      .setDescription("`ping`,`userinfo`,`ship`,`embed`,`calculator`")
      .addField("\n **Music** | **Disabled(Developing)**", "`addrelatedsong`︲`autoplay`︲`loop`︲`lyrics`︲`pause`︲`play`︲`queue`︲`resume`︲`shuffle`︲`skip`︲`stop`︲`volume`")
      .setColor('2F3136')



    let embed3 = new MessageEmbed()
      .setTitle("Info commands")
      .setDescription("`ad`,`botinfo`,`bugreport`,`help`,`invite`,`marry`,`nitro`,`ping`,`vote`")
      .setColor('2F3136')

      let embed4 = new MessageEmbed()
      .setTitle("Game commands")
      .setDescription("`8ball`,`chaoswords`,`connect4`,`fasttype`,`fight`,`guessthenumber`,`guessthepokemon`,`hangman`,`lieswatter`,`neverhaveiever`,`quickclick`,`quickfind`,`rockpaperscissor`,`shuffleguess`,`slots`,`snake`,`sudo`,`tictactoe`,`trivia`,`willyoupressthebutton`,`wouldyourather`")
      .setColor('2F3136')

      let embed5 = new MessageEmbed()
      .setTitle("Fun commands")
      .setDescription("`ascii`,`calculator`,`catsay`,`clap`,`cowsay`,`dab`,`emojify`,`fliptext`,`gif`,`greentext`,`hack`,`howgay`,`hug`,`joke`,`kill`,`meme`,`respect`,`reverse`,`rickroll`,`roast`")
      .setColor('2F3136')

      let embed6 = new MessageEmbed()
      .setTitle("Utility commands")
      .setDescription("`announce`,`avatar`,`creatrole`,`delchannel`,`delrole`,`enlargemoji`,`esay`,`giverole`,`google`,`imdb`,`lock`,`newtext`,`newvoice`,`nickname`,`nuke`,`poll`,`removerole`,`say`,`servericon`,`serverinfo`,`translate`,`unlock`,`userinfo`,`weather`,`wiki`")
      .setColor('2F3136')



      




    const filter = (interaction) => interaction.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({
      filter,
      componentType: "SELECT_MENU"
    });


    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "first") {
        collected.reply({ embeds: [embed1], ephemeral: true })
      }
      if (value === "second") {
        collected.reply({ embeds: [embed2], ephemeral: true })
      }
      if (value === "third") {
        collected.reply({ embeds: [embed3], ephemeral: true })
      }
      if (value === "fourth") {
        collected.reply({ embeds: [embed4], ephemeral: true })
      }
      if (value === "fifth") {
        collected.reply({ embeds: [embed5], ephemeral: true })
      }
      if (value === "sixth") {
        collected.reply({ embeds: [embed6], ephemeral: true })
      }


    })

  }
}