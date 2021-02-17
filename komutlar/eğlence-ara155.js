const Discord = require("discord.js");
const ayarlar = require("../ayarlar/bot.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(Embedmatador);
 
}
  if (message.channel.type !== "dm") {

const Embedmatador = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Geliyor!!!!")
      .setColor("BLUE")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(Embedmatador);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.config = {
name: "ara155",
aliases: ["ara-155"]
}