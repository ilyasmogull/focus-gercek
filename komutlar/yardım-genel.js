const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Focus Genel Komutlar`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:761965318356336710> Focus botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:hypesquad1:761965318356336710> \`${prefix}komutlar\`
 Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:hypesquad1:761965318356336710> \`${prefix}davet\` 
Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:hypesquad1:761965318356336710> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Öneri__`,`<a:hypesquad1:761965318356336710> \`${prefix}öneri\` 
Bota Öneride BUlunursunuz`,true)
.addField(`__Profil__`,`<a:hypesquad1:761965318356336710> \`${prefix}profil\` 
Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:hypesquad1:761965318356336710> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:hypesquad1:761965318356336710> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:761965318356336710> \`${prefix}davet\` | Focus'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:761965318356336710> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:761965318356336710> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/763045912267849769/763094010302038036/standard_5.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
