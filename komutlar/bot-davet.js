const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Focus Destek`, client.user.avatarURL())
.setDescription('**• [Focus`u Ekleyin.](https://discord.com/oauth2/authorize?client_id=755035798797156422&permissions=8&scope=bot)**\n\n**• [Focus`a Oy Ver](https://discordbotlist.com/bots/focus-8066)** \n\n**• [Focus Web Site](https://www.focusbot.tk)** \n\n**• [Focus Support](https://discord.gg/vRVWG9w)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };