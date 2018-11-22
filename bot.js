const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "m"


client.on("ready", () => {
    client.user.setPresence({
      status: 'online',
      game: { 
         type: 0,
         name: 'Life',
         details: `Server GAMING`,
         url: 'http://twitch.tv/Streammingg',
         state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
        application_id: '281376075802476544',
         assets: {
            small_image: ` `,
            small_text: ' ' ,
            large_image: ``,
            large_text: `»1K SoON!• ` }
    
      }
        });
    });
    






const adminprefix = "m";
const devs = ['411137717884289024'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});



client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('هاي ♥ هاي ♥ هاي ♥');
}, 20)
})



client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('welcome to welcome to welcome to');
}, 40)
})

client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('Bot Spamme ONLINE 24h  MAL MAHMOUD للاستعلام تواصل مع');
}, 60)
})


client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('بوت اسبام لشراء تواصل مع Mal Mahmoud ');
}, 80)
})


client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('اسعار البوت  5ك كرديت 5 ايام  - 10ك كرديت 7 ايام  - 20ك كرديت 18 يوم -30ك كدريت  29 يوم  - 40ك كرديت 39 يوم  -  50ك كرديت 55 يوم  -80ك كرديت 90يوم 100ك كرديت 24ساعة في 24ساعة ');
}, 100)
})



client.login(process.env.BOT_TOKEN);
