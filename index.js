require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const Kaamelott = require("./commands/kaamelott");
 
const playedGame = '!kaamelott';

client.on('ready', () => {
    console.log("🤖 Logged in as " + client.user.tag + "!");
    client.user.setActivity(playedGame).catch(console.error);
});

client.on('message', message => {
  if (!message.author.bot) {
      Kaamelott.parse(message);
  }
});
 
client.login(process.env.DISCORD_TOKEN);