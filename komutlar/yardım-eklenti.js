const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  const fynxdblapi = require('dblapi.js')
const fynxdbl = new fynxdblapi(fynx.dbltoken, client) 
fynxdbl.hasVoted(message.author.id).then(fynxoyverdi => {
  
  if(fynxoyverdi)  {
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Focus Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:755721815577460786> Focus botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:setting:761562490496090133> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:setting:761562490496090133> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:755721815577460786> \`${prefix}davet\` | Focus'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:755721815577460786> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/R3meMz.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
                     } else {
        message.channel.send("Bu komutu kullanabilmek için bota oy vermeniz gerekmektedir. Bota oy verebilmek için https://top.gg/bot/755035798797156422 /vote sitesini ziyaret edebilirsiniz. | Oy verdiyseniz 3 dakika beklemeniz gerekmektedir.")
     
    }
  
    if(fynx.dbltoken == 'BOS') {
  let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Kullanılamıyor`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:755721815577460786> Focus botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`Bu Komut Şu An Çalışmıyor...`)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:755721815577460786> \`${prefix}davet\` | Focus'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:755721815577460786> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/R3meMz.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
      
    }
  })
  };
exports.config = {
name: "eklenti",
  aliases: []
}