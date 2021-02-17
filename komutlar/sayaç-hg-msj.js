const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:761965318356336710> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:hypesquad1:761965318356336710>   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n **__Örnek__**: -sayaç-hg-mesaj `-server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('<a:hypesquad1:761965318356336710>  **Sayaç Hoşgeldin Mesajı: **`'+mesaj+'` **Olarak ayarlandı.**') 
 db.set(`sayacHG_${message.guild.id}`, mesaj)
    
  
};
exports.config = {
  name: 'sayaç-hg-mesaj',
  aliases: ['sayac-hg-msg']
};

