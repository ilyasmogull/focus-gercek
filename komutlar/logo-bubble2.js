const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://habbofont.net/font/bubble_orange/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Bubble Logo")
  .setColor("#BLUE")
  .setImage(linqo)
  .setFooter('Focus Logo Generator')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};



exports.config = {
  name: "bubble2",
  aliases : [],
  description: "logo yapar",
  usage: "logo"
}