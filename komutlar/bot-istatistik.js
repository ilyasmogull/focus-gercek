const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(``)
.addField("__**Bot Verileri**__", `<a:hypesquad1:761965318356336710> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:761965318356336710> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:761965318356336710> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Sahibi**__", `<a:hypesquad1:761965318356336710> **Bot Sahibi**  <@515590960953032705> \n **ilyascuk#0001** \n`)
.addField("__**Sürümler**__", `<a:hypesquad1:761965318356336710> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:761965318356336710> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:761965318356336710> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:761965318356336710> " +client.voice.connections.size + " Sunucu", true)
  .setImage(`https://cdn.discordapp.com/attachments/763045912267849769/763094010302038036/standard_5.gif`)
.setColor("BLUE")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}