const Discord = require("discord.js");

exports.run = (client, message) => {

const matador = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`\n**Efkarınız:** **%${matador}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.config = {
name: "efkarım",
aliases: []
}