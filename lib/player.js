import fs from 'fs'
import stringSimilarity from "string-similarity";

export function playSound(message, soundsPath) {
    const { member } = message
    // Si il est sur un channel de discution vocale
    if (member.voice.channel !== null) {
        // Je récupère le channel
        const voiceChannel = member.voice.channel
        const arg = message.content.split(" ")[1]

        // Je m'y connecte
        voiceChannel
            .join()
            .then((connection) => {
                // J'ouvre le dossier des sons de kaamelott
                fs.readdir(soundsPath, (err, files) => {
                    // J'en récupère un au hazard

                    if (files) {
                        const randomSound = Math.floor(
                            Math.random() * files.length
                        )
                        
                        let sound = files[randomSound]

                        if (arg) {
                            let bestmach = stringSimilarity.findBestMatch(arg, files);
                            if (bestmach.bestMatchIndex !== 0) {
                                sound = files[bestmach.bestMatchIndex]
                            }
                        }

                        console.log(
                            `🤖 ${member.user.tag} played the sound : ${sound}`
                        )
                        // Je le lis dans le channel ou je me suis connecté
                        const dispatcher = connection.play(soundsPath + sound)

                        dispatcher.on('finish', () => {
                            connection.disconnect()
                        })
                    }
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
