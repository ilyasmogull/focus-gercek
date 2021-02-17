const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   message.channel.send(`<a:hypesquad1:761965318356336710>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  let kanal = message.mentions.channels.first();
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen bir kanal belirtiniz!")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLUE")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı; ${kanal} olarak ayarlandı!`);
  message.channel.send(embed);
  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};
module.exports.config = {
  name: "davet-kanal",
  aliases: ["davetkanal"]
};

