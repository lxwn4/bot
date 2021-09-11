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
        let among = bot.emojis.cache.get("883526909873520721");
        let gartic = bot.emojis.cache.get("883526917364547585");
        let lol = bot.emojis.cache.get("881022494855798875");
        let genshin = bot.emojis.cache.get("883526973345898496");
        let horror = bot.emojis.cache.get("883527051787792414");
        let genshinPing = bot.emojis.cache.get("883527041146818581");

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
        await m.react("883526909873520721");
        await m.react("883526917364547585");
        await m.react("881022494855798875");
        await m.react("883526973345898496");
        await m.react("883527051787792414");
        await m.react("883527041146818581");
      }
    })

    bot.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.partial) reaction.message.fetch();
        if (reaction.partial) reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        // AMONG US //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "among") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Among Us** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // ARTISTE //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "draw") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Artiste** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // LOL //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "BlackHeart") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **League of Legends** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // GENSHIN //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "primo") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Genshin Impact** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // HORREUR //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "horror") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Horreur** t'as été ajouté.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // REMINDER //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "crystal") {
                reaction.message.guild.members.cache.get(user.id).roles.add("883003760366981240");
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
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "among") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Among Us** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // ARTISTE //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "draw") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Artiste** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // LOL //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "BlackHeart") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **League of Legends** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // GENSHIN //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "primo") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Genshin Impact** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // HORROR //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "horror") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003737197674556");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Horreur** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }

        // REMINDER //
        if (reaction.message.channel.id === "883501720343285820") {
            if (reaction.emoji.name === "crystal") {
                reaction.message.guild.members.cache.get(user.id).roles.remove("883003760366981240");
                reaction.message.channel.send(`<@${user.id}>, le rôle **Notif** t'as été enlevé.`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000)
                    
                })    
            }
        }


        console.log('remove')
        
    })
    let roleId = "883003760366981240";
    let scheduledMessage = new cron.CronJob('00 00 18 * * *', () => {
        const channel = bot.channels.cache.get('865638900118585346');
        channel.send("<@&" + roleId + ">\nIl est temps de faire votre Hoyolab ! \nhttps://www.hoyolab.com/genshin/" )
    })
        scheduledMessage.start();
        
    
    

}


