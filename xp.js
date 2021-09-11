const Discord = require('discord.js');
const bot = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const prefix = "?";

require("dotenv").config();
const mongoose = require('mongoose');


const Levels = require('discord-xp');
Levels.setURL("mongodb+srv://lown:sVITh2FjiQn54RH8@discordbot.wwpzu.mongodb.net/DiscordBot?retryWrites=true&w=majority")



module.exports = (bot) => {

    // XP PER MESSAGE //
    bot.on("message", async (message) => {
        if (!message.guild) return;
        if (message.content.startsWith(prefix)) return;
        if (message.author.bot) return;
        
        const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
        if (hasLeveledUp) {
          const user = await Levels.fetch(message.author.id, message.guild.id);
          message.channel.send(`Félicitation ${message.author}, tu passes au niveau **${user.level}**. :tada:`);
        }
      });




    // LEADERBOARD //

    bot.on("message", async (message) => {
        if (message.content === prefix + "lb") {
          const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
                const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true);
                const lb = leaderboard.map(e => `**${e.position}**. **${e.username}#${e.discriminator}**\nNIVEAU : **${e.level}**\nXP : **${e.xp.toLocaleString()}**`);
                message.channel.send(`**Leaderboard** :\n\n${lb.join("\n\n")}`);

        }
      })

   


      
}