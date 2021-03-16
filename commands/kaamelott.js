const fs = require('fs')
const Command = require('./command')

const sounds = './sounds/kaamelott/'

// Cette commande hérite de la classe Command
module.exports = class Kaamelott extends Command {
    // Le bot exécute cette commande que si un
    // utilisateur a écrit un message qui commence avec "!kaamelott"
    static match(message) {
        return message.content.startsWith('!kaamelott')
    }

    // Et voilà l'action qui est exécutée !
    static action(message) {
        // On récupère l'utilisateur qui a demandé une action
        const { member } = message

        // Si il est sur un channel de discution vocale
        if (member.voice.channel !== null) {
            // Je récupère le channel
            const voiceChannel = member.voice.channel

            // Je m'y connecte
            voiceChannel
                .join()
                .then((connection) => {
                    // J'ouvre le dossier des sons de kaamelott
                    fs.readdir(sounds, (err, files) => {
                        // J'en récupère un au hazard
                        const sound =
                            files[Math.floor(Math.random() * files.length + 1)]
                        console.log(
                            `🤖 ${member.user.tag} played the sound : ${sound}`
                        )
                        // Je le lis dans le channel ou je me suis connecté
                        const dispatcher = connection.play(sounds + sound)

                        dispatcher.on('finish', () => {
                            connection.disconnect()
                        })
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // Si l'utilisateur n'est pas sur un channel on le remercie poliment
            message.channel.send('🤖 Tu doit être dans un channel lol.')
        }
    }
}
