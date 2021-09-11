const Discord = require('discord.js');
const bot = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const cardModel = require('./card-model');
const prefix = "?";

const mongoose = require('mongoose');
const Levels = require('discord-xp');
Levels.setURL("mongodb+srv://lown:sVITh2FjiQn54RH8@discordbot.wwpzu.mongodb.net/DiscordBot?retryWrites=true&w=majority")

module.exports = (bot) => {

    // CREATE RANK CARD //
    bot.on("message", async (message) => {
        if (message.content == prefix + "createbg") {
            const cardModel = require('./card-model');
            
            const data = new cardModel({
                userID: message.member.id,
                guildID: message.guild.id,
                imgUrl: "https://funilrys.com/user/pages/programming/javascript/random-background/abstract.jpg"
            })
            data.save();
            message.reply("Tu entres dans le menu pour changer ton image de fond. **?setbg url** pour définir ton nouveau fond. ATTENTION, TON LIEN DOIT COMMENCER PAR ' **https://** ' ")

        }
    })

    bot.on("message", async (message) => {
        if (message.content.startsWith(prefix + 'setbg' + " https://")) {

            const Newdata = await cardModel.findOne({
                userID: message.member.id,
                guildID: message.guild.id
            })
            Newdata.imgUrl = message.content.slice(7);

            await Newdata.save();
            message.reply("Ton image a bien été mise à jour !~")
        }
    })









    // RANK CARD //
    bot.on("message", async message => {
        if(message.content === prefix + "rank") {
            
            const target = message.mentions.users.first() || message.author;
            const users = await Levels.fetch(target.id, message.guild.id, true);
            console.log(users.position);

            var xpTotal = users.cleanNextLevelXp;
            var currentXp = users.cleanXp;
            
            


            const Newdata = await cardModel.findOne({
                userID: message.member.id,
                guildID: message.guild.id
            })
            


         let data = await canva.rankcard(
           {
             link: Newdata.imgUrl,
             name: message.author.username,
             discriminator: message.author.discriminator,
             level: users.level,
             rank: users.position,
             currentXP: currentXp,
             fullXP: xpTotal,
             avatar: message.author.displayAvatarURL({ format: "png"})
           
           }) 
           
           const attachment = new Discord.MessageAttachment(
           data,
            "rank.png"
          );
        
       
          message.reply(
            ``,
            attachment
          );
                     
        } 
      })


      
}
