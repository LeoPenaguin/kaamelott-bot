import dotenv from 'dotenv'
import Discord from 'discord.js'

import Kaamelott from './commands/kaamelott.js'
import Indigne from './commands/indigne.js'

const client = new Discord.Client()
const playedGame = 'des BARRES'

dotenv.config()

// Quand le Bot se connecte
client.on('ready', () => {
    // On affiche un petit message
    console.log(`🤖 Logged in as ${client.user.tag}!`)
    // On change le jeu auquel joue le Bot
    client.user.setActivity(playedGame).catch(console.error)
})

// Quand le Bot voit un message
client.on('message', (message) => {
    if (!message.author.bot) {
        // On le traite avec une commande importé plus haut
        // (dans le dossier Commands)
        new Kaamelott().parse(message)
        new Indigne().parse(message)
    }
})

// On se connecte avec un token secret mis dans le fichier .env
client.login(process.env.DISCORD_TOKEN)
