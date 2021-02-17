const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send(`<a:hypesquad1:761965318356336710>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen davet eklenecek kişiyi etiketleyiniz!**")
        .setColor("BLUE")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen eklenecek davet sayısını giriniz.**")
        .setColor("BLUE")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı şahsa; ${m} davet eklendi!`);
  message.channel.send(embed);
  db.add(`davet_${u.id}_${message.guild.id}`, +m);
};
module.exports.config = {
    name: "davet-ekle",
  aliases: ["davetekle"]
};
