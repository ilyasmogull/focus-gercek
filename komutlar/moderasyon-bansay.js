const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:hypesquad1:761965318356336710>  **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
 
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<a:hypesquad1:761965318356336710> **Banlanan Kullanıcı bulunamadı**`)
       .setColor("BLUE");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<a:hypesquad1:761965318356336710> Banlistesi | Sunucudan Banlananlar")
       .setColor("BLUE");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};

