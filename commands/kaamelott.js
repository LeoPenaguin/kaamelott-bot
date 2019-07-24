/*jshint esversion: 6 */

const Command = require('./command');

const fs = require('fs');
const sounds = './sounds/kaamelott/';

module.exports = class Kaamelott extends Command {

    static match(message) {
        return message.content.startsWith("!kaamelott");
    }

    static action(message) {
        let member = message.member;

        if (typeof member.voiceChannel !== "undefined") {
            let voiceChannel = member.voiceChannel;

            voiceChannel
                .join()
                .then(connection => {
                    fs.readdir(sounds, (err, files) => {
                        var sound = files[Math.floor((Math.random() * files.length) + 1)];
                        console.log("🤖 " + member.user.tag + " played the sound : " + sound);
                        connection.playFile(sounds + sound);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            message.channel.send('🤖 Tu doit être dans un channel lol.');
        }
    }

};
