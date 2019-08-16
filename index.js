const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
    console.log(`${bot.user.username} está online!`)
    bot.user.setActivity("uns teste loco ai", {type: "STREAMING"});
})

bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}eae`){
        return message.channel.send("eae krl");
    }
})

bot.login(botconfig.token);