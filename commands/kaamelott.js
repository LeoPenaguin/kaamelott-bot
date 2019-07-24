
const Command = require('./command');

const fs = require('fs');
const sounds = './sounds/kaamelott/';

// Cette commande hérite de la classe Command
module.exports = class Kaamelott extends Command {

    // Le bot exécute cette commande que si un 
    // utilisateur a écrit un message qui commence avec "!kaamelott"
    static match(message) {
        return message.content.startsWith("!kaamelott");
    }

    // Et voilà l'action qui est exécutée !
    static action(message) {
        // On récupère l'utilisateur qui a demandé une action
        let member = message.member;

        // Si il est sur un channel de discution vocale
        if (typeof member.voiceChannel !== "undefined") {
            // Je récupère le channel
            let voiceChannel = member.voiceChannel;

            // Je m'y connecte
            voiceChannel
                .join()
                .then(connection => {
                    // J'ouvre le dossier des sons de kaamelott
                    fs.readdir(sounds, (err, files) => {
                        // J'en récupère un au hazard
                        var sound = files[Math.floor((Math.random() * files.length) + 1)];
                        console.log("🤖 " + member.user.tag + " played the sound : " + sound);
                        // Je le lis dans le channel ou je me suis connecté
                        connection.playFile(sounds + sound);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // Si l'utilisateur n'est pas sur un channel on le remercie poliment
            message.channel.send('🤖 Tu doit être dans un channel lol.');
        }
    }

};
