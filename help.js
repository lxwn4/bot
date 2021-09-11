const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const { messageEmbed } = require('discord.js');
const bot = new Discord.Client();
const prefix = "?";


module.exports = (bot) => {

    bot.on("message", async (message) => {
        if (message.content === prefix + "help") {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            

            const helpEmbed = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setTitle('Voici la liste des commandes :')
                .setThumbnail('https://cdn.dribbble.com/users/5108596/screenshots/14506062/among_us-01_4x.jpg')
                .addField('?helpbg', "Commandes d'aide pour la carte de votre profil.")
                .addField('?lb', "Affiche le classement des 10 membres aillant le plus d'XP.")
                .addField('?games', 'Affiche les jeux du serveur.')
            
            message.channel.send(helpEmbed);
        }
    })

    // ?helpbg //
    bot.on("message", async (message) => {
        if (message.content === prefix + "helpbg") {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            const helpbgEmbed = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setTitle('Commandes cartes de profil :')
                .setThumbnail('https://cdn.dribbble.com/users/5108596/screenshots/14506062/among_us-01_4x.jpg')
                .addField('?createbg', 'Permet de créer une carte de profil.')
                .addField('?setbg', "Permet de changer le fond de votre image de profil. \n **IMPORTANT** Le lien de l'image doit commencer par **HTTPS://**")
                .addField('?rank', 'Affiche votre carte de profil.')
                

            message.channel.send(helpbgEmbed);
        }
    })

}