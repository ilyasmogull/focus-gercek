const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:761965318356336710> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hypesquad1:761965318356336710>  **Lütfen Bir Rol Belirt!**\n**Rolü Etiketleyemiyorsan Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:hypesquad1:761965318356336710>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Focus Otorol▬▬▬▬▬▬▬▬▬
║► <a:hypesquad1:761965318356336710> Otorol Aktif Edildi.
║► <a:hypesquad1:761965318356336710> **${rol}** Olarak Güncelledim! 
║► <a:hypesquad1:761965318356336710> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'otorol-ayarla',
  aliases: []
};
