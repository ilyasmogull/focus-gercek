const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Focus Logo Generator Menüsü`)
.setColor('BLUE')
.addField('<a:hypesquad1:761965318356336710> Focus Botunu Eklemek İsterseniz -davet',`
**:white_small_square: = \`-arrow\` : Ok Şeklinde Logo Üretir**
**:white_small_square: = \`-blue\` : Mavi Logo Üretir**
**:white_small_square: = \`-booking\` : Kırmızı Logo Üretir**
**:white_small_square: = \`-bubble\` :  Mavi Logo Üretir**
**:white_small_square: = \`-bubble2\` : Turuncu Logo Üretir**
**:white_small_square: = \`-bubble2\` : Turuncu Logo Üretir**
**:white_small_square: = \`-bubble3\` : Rainbow Logo Üretir**
**:white_small_square: = \`-comic\` : Balonlu Logo Üretir**
**:white_small_square: = \`-cool\` : Cool Logo Üretir**
**:white_small_square: = \`-green\` : Yeşil Logo Üretir**
**:white_small_square: = \`-discord\` : Discord Logosu Üretir**
**:white_small_square: = \`-fire\` : Ateşli Logo Üretir**
**:white_small_square: = \`-gold\` : Gold Logo Üretir**
**:white_small_square: = \`-gold2\` : Gold2 Logo Üretir**
**:white_small_square: = \`-grafiti\` : Graffiti Logo Üretir**
**:white_small_square: = \`-ejderha\` : Ejderha Logo Yapar**`)
.addField('Focus Bot',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=755035798797156422&scope=bot&permissions=8) **|** [Destek](https://discord.gg/vRVWG9w)`)
.setImage(`https://cdn.discordapp.com/attachments/763045912267849769/763094010302038036/standard_5.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["logo","l"], 
  permLevel: 0
  };
exports.config = {
name: "logo",
  aliases: []
}
