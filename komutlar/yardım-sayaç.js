 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Focus Sayaç Komutları`, client.user.avatarURL())
.setColor('BLUE')
.setDescription(`<a:hypesquad1:761965318356336710> Focus botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç Ayarla__`,`<a:setting:761562490496090133> \`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:setting:761562490496090133> \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Oto Cevap Sil__`,`<a:setting:761562490496090133> \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:761965318356336710> \`${prefix}davet\` | Focus'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:761965318356336710> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:761965318356336710> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/763045912267849769/763094010302038036/standard_5.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}