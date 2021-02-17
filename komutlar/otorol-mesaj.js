const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:761965318356336710> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:hypesquad1:761965318356336710>  **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n **__Örnek__**: `-otorol-mesaj -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<a:hypesquad1:761965318356336710> **Oto-Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.config = {
  name: 'otorol-mesaj', 
  aliases: ['otorolmesaj','otorol-mesaj-ayarla','otorolmesaj-ayarla', 'otorolmesajayarla']
};

