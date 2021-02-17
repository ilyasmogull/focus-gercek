const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("**Kimi Tokatlayacam Reis Etiketlede Vurayım Ağzının Ortasına **")
      .catch(console.error);

const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **"
    )
    .setImage("https://media0.giphy.com/media/deKWTyMOYLkje/giphy.gif")
    .setFooter("Frenzy", client.user.avatarURL);

message.channel.send(Embedmatador);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.config = {
name: "tokat",
aliases: ["tokat-at", "tokatat"]
}