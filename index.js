const discord = require('discord.js');
const bot = new discord.Client;
const token = require('./token.json');

const prefix = "?";
const help = require('./help');
const privatePing = require('./privateping');
const welcome = require('./new-member');
const xp = require('./xp');
const customCard = require('./custom-card');
const games = require('./games');
const reminder = require('./reminder');

const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const cron = require('cron');


require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lown:sVITh2FjiQn54RH8@discordbot.wwpzu.mongodb.net/DiscordBot?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log("Connecté à mongo"))
.catch(() => console.log("Non connecté à Mongo"));

// Lancement du bot //
bot.on("ready", async () => {
    bot.user.setStatus("online");
    bot.user.setActivity("?help");
    console.log("Bot Lancé !");

    // Commande ?ping //
    privatePing(bot, prefix + 'ping', 'Pong ! :ping_pong:');

    // Genshin Reminder //
    

    reminder(bot);
})

help(bot);
games(bot);



// Prefix //
bot.on("message", async (message) => {
    if (message.content === "prefix") {
        message.reply('Le préfix est "**?**"')
    }
})


// XP //
const Levels = require('discord-xp');
Levels.setURL("mongodb+srv://lown:sVITh2FjiQn54RH8@discordbot.wwpzu.mongodb.net/DiscordBot?retryWrites=true&w=majority")
xp(bot);
customCard(bot);

// Nouveau membre //
welcome(bot, prefix);


    


// Identification du bot avec token //
bot.login(token.token);