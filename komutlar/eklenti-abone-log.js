let database = require("quick.db")
let fynx = require("../ayarlar/bot.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${fynx.prefix}abonelog #kanal`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)
};
exports.config = {
  name: "abone-log",
  aliases: ["a-log","abonelog"]
};
