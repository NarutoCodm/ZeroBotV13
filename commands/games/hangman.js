const { Hangman } = require('leaf-utils')

module.exports = {
    name: "hangman",
    aliases: ['hn','hang'],
    permissions : [""],
    category: "Discord Games",

run: async (client, message, args) => {

const game = new Hangman({
    message: message,
    embed: {
        title: 'Hangman',
        color: 'RED',
    },
    hangman: {
        hat: '🧢',
        head: '🧔',
        shirt: '🎽 ',
        pants: '🩳',
        boots: '👟👟',
    },
    winMessage: 'You won! The word was... **{{word}}**',
    loseMessage: 'You lose! The word was... **{{word}}**'
})
game.start()
}
}