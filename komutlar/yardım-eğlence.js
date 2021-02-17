const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Focus Logo Generator Menüsü`)
.setColor('BLUE')
.addField('Focus Botunu Eklemek İsterseniz -davet',`
** \`-yazan-kazanır\` :  Bot size rastgele kelime verir ve siz de onu ilk yazmaya çalışırsınız.**
** \`-adam-asmaca\` :  Adam asmaca oynarsınız.**
** \`-düello\` :  Düello oynarsınız.**
** \`-fbi\` :  FBİ gifi atar.**
** \`-aşkölçer\` : Aşkınızı ölçer. **
** \`-aduketçek\` : Etiketlediğiniz kişiye aduket çekersiniz.**
** \`-ara155\` :  Polisi aramanıza yarar. :)**
** \`-balık-tut\` : Denizde balık tutarsınız.**
** \`-beşlik\` : Etiketlediğiniz kişiyle beşlik çakarsınız.**
** \`-efkarım\` : Şu anda olan efkarınızı ölçersiniz.**
** \`-espri\` : Bot sizin için espri yapar.**
** \`-hesapla\` : Belirttiğiniz matematik işlemini bot yapar.**
** \`-kartopu\` : Etiketlediğiniz kişiye kartopu atarsınız.**
** \`-kaç-cm\` : Bot malafat uzunluğunuzu söyler.**
** \`-kralol\` : Kral olmanıza yarar.**
** \`-slots\` : Slot oynarsınız.**
** \`-tokat-at\` : Etiketlediğiniz kişiyi tokatlarsınız.**
** \`-yazı-tura\` :  Bot ile yazı-tura oyununu oynarsınız.**
** \`-yılbaşı\` : Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.**
`)
.addField('Focus Bot',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=755035798797156422&scope=bot&permissions=8) **|** [Destek](https://discord.gg/vRVWG9w)`)
.setImage(`https://cdn.discordapp.com/attachments/763045912267849769/763094010302038036/standard_5.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["eglence"], 
  permLevel: 0
  };
exports.config = {
name: "eğlence",
  aliases: ["eglence","eglen","eğlen"]
}