module.exports = (bot, triggerText, replyText) => {
    bot.on("message", message => {
        if (message.content === triggerText) {
            message.author.send(replyText)
        }
    })
}