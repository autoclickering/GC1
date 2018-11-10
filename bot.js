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
let channel =     client.channels.get("510751461119098881")
setInterval(function() {
channel.send('هاي ♥ هاي ♥ هاي ♥');
}, 25)
})



client.on("ready", () => {
let channel =     client.channels.get("510751461119098881")
setInterval(function() {
channel.send('welcome to welcome to welcome to');
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("510751461119098881")
setInterval(function() {
channel.send('Bot Spamme ONLINE 24h  @lIFE#4630 للاستعلام تواصل مع');
}, 25)
})


client.on("ready", () => {
let channel =     client.channels.get("510751461119098881")
setInterval(function() {
channel.send('بوت اسبام لشراء تواصل مع @lIFE#4630 ');
}, 25)
})





client.login(process.env.BOT_TOKEN);
