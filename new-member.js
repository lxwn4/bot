const Discord = require('discord.js');
const bot = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const cardModel = require('./card-model');


module.exports = (bot) => {
    bot.on('guildMemberAdd', async guildMember => {
        var i = "872949932452098148";
        let role = guildMember.guild.roles.cache.find(r => r.id === i);
        guildMember.roles.add(role);
        
        new cardModel({
            userID: guildMember.id,
            imgUrl: "http://i.stack.imgur.com/vhoa0.jpg"
        }).save();

        let channel = bot.channels.cache.get("865638900118585346");
        if (!channel) return;
    
        
    
        guildMember.send(`Bienvenue <@${guildMember.user.id}> sur **You SuS** ! 
Pour l'instant tu n'as pas accès au serveur, je t'invite donc à prévenir un Admin ou la Modératrice de quand tu es disponible pour un **court entretien vocal**.
Cet entretien ne dure que **3 minutes** et va nous servir à te donner les rôles.`)

        
        let data = await canva.welcome(guildMember, { link: "https://www.wallpapertip.com/wmimgs/49-495789_anime-background-night-4k.jpg", blur: false })
        
        const attach = new Discord.MessageAttachment(
            data,
            "welcome-image.png"
        );

        channel.send(`Bienvenue sur notre serveur, <@${guildMember.user.id}> !`, attach);

    })
    
    bot.on('guildMemberRemove', async guildMember => {
        let channel = bot.channels.cache.get("865638900118585346");
        channel.send(`Adieu <@${guildMember.user.id}>`)
    
        
    })
}