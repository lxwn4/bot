const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const { messageEmbed } = require('discord.js');
const newMember = require('./new-member');
const bot = new Discord.Client();
const prefix = "?";

module.exports = (bot) => {

    bot.on("message", async (message) => {
        if (message.content === prefix + "games") {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            const gamesEmbed = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setTitle('Voici la liste des jeux sur ♣ You SUS ♣')
                .setThumbnail('https://cdn.dribbble.com/users/5108596/screenshots/14506062/among_us-01_4x.jpg')
                .addField('Among Us', "https://store.steampowered.com/app/945360/Among_Us/")
                .addField('Gartic Phone', "https://garticphone.com/fr")
                .addField('Skribbl.io', 'https://skribbl.io/')
                .addField('League of Legends', 'https://euw.leagueoflegends.com/fr-fr/')
                .addField('Genshin Impact', 'https://genshin.mihoyo.com/fr')
                .addField('Phasmophobia', 'https://store.steampowered.com/app/739630/Phasmophobia/')
                .addField('BombParty / PopSauce', "https://jklm.fun/")
                .addField('Et bien plus encore', "N'hésitez pas à nous parler d'un jeu hors liste !")
            
            
            message.channel.send(gamesEmbed);
        }
    })


    

    
    

    
}