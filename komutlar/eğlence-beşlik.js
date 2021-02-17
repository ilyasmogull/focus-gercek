const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
  
 return message.channel.send(Embedmatador);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.config = {
name: "beşlik",
aliases: []
}
