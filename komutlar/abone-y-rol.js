let database = require("quick.db")
let ayarlar = require("../ayarlar/bot.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir Rol Etiketlemen Gerekli **Örnek Kullanım:** ${ayarlar.prefix}abone-yetkili-rol @rol`)
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone Yetkilisi Başarıyla ${rol} Olarak Ayarlandı.`)
 };

 exports.config = {
      name: 'abone-yetkili-rol',
   aliases: ["abone-y-rol", "abone-yetkili-rolü", "aboneyetkilirol"]
 };