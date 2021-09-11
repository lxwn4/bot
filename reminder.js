const Discord = require('discord.js');
const bot = new Discord.Client();
const cron = require('cron');
const prefix = "?";
const { messageEmbed } = require('discord.js');



module.exports = (bot) => {
    bot.on("message", async (message) => {
      
      if (message.author.bot || message.react.author) {
          return;
      }
      
      else if (message.content === prefix + "rolespicker") {
        let among = bot.emojis.cache.get("788106551436509195");
        let gartic = bot.emojis.cache.get("886253772077142117");
        let lol = bot.emojis.cache.get("830856908558172170");
        let genshin = bot.emojis.cache.get("830856702072193054");
        let horror = bot.emojis.cache.get("830852104289255424");
        let genshinPing = bot.emojis.cache.get("886270613432467466");

        const rolesEmbed = new Discord.MessageEmbed()
        .setColor("#f7dc92")
        .setTitle("Gestion des rôles/pings")
        .setThumbnail('https://cdn.dribbble.com/users/5108596/screenshots/14506062/among_us-01_4x.jpg')
        .addField(among, "Ajoute ou enlève le rôle Among us.")
        .addField(gartic, "Ajoute ou enlève le rôle Artiste.")
        .addField(lol, "Ajoute ou enlève le rôle League of Legends.")
        .addField(genshin, 'Ajoute ou enlève le rôle Genshin Impact.')
        .addField(horror, 'Ajoute ou enlève le rôle Horreur.')
        .addField(genshinPing, "Si tu coches cet émoji, le bot te pingeras chaques jours à 18h00. \nCela sert à ne pas oublier de faire Hoyolab.")


        let m = await message.channel.send(rolesEmbed);
        await m.react("788106551436509195");
        await m.react("886253772077142117");
        await m.react("830856908558172170");
        await m.react("830856702072193054");
        await m.react("830852104289255424");
        await m.react("886270613432467466");
      }
    })

    bot.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.partial) reaction.message.fetch();
        if (reaction.partial) reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        // AMONG US //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "loupe") {
                reaction.message.guild.members.cache.get(user.id).roles.add("787793994855874570");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Among Us** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // ARTISTE //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "gartic") {
                reaction.message.guild.members.cache.get(user.id).roles.add("792447371425742858");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Artiste** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // LOL //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "m7") {
                reaction.message.guild.members.cache.get(user.id).roles.add("787794038337962014");
                reaction.message.channel.send(`<@${user.id}>, le rôle **League of Legends** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // GENSHIN //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "primo") {
                reaction.message.guild.members.cache.get(user.id).roles.add("796448137240641576");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Genshin Impact** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // HORREUR //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "crucifix") {
                reaction.message.guild.members.cache.get(user.id).roles.add("820790314662101032");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Horreur** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // REMINDER //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "crystal") {
                reaction.message.guild.members.cache.get(user.id).roles.add("886252962433880094");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Notif** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        console.log('add')
        
    })
    
    bot.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.partial) reaction.message.fetch();
        if (reaction.partial) reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        // AMONG //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "loupe") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("787793994855874570");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Among Us** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // ARTISTE //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "gartic") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("792447371425742858");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Artiste** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // LOL //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "m7") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("787794038337962014");
                reaction.message.channel.send(`<@${user.id}>, le rôle **League of Legends** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // GENSHIN //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "primo") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("796448137240641576");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Genshin Impact** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // HORROR //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "crucifix") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("820790314662101032");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Horreur** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // REMINDER //
        if (reaction.message.channel.id === "886271273355862117") {
            if (reaction.emoji.name === "crystal") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("886252962433880094");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Notif** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }


        console.log('remove')
        
    })
    let roleId = "886252962433880094";
    let scheduledMessage = new cron.CronJob('05 10 18 * * *', () => {
        const channel = bot.channels.cache.get('886271116405014568');
        channel.send("<@&" + roleId + ">\nIl est temps de faire votre Hoyolab ! \nhttps://www.hoyolab.com/genshin/" )
    })
        scheduledMessage.start();
        
    
    

}


