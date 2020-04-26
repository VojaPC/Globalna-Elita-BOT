/*
const Discord = require('discord.js');
const client = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Ne spamuj!!!.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** je kikovan zbog spamovanja.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** je banovan zbog spamanja.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
});
 
client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
 
client.on('message', (message) => {
    if (message.content === '!run') {
        message.channel.send('Uso sam...');
    }
    antiSpam.message(message)
}); 
*/ 


const Discord = require('discord.js');
const antispam = require('better-discord-antispam'); // Requiring this module.
const client = new Discord.Client();
 
client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        limitUntilWarn: 6,
        limitUntilMuted: 9,
        interval: 10000, 
        warningMessage: "prestani da spamujes bices mutovan!", 
        muteMessage: "je mutiran zbog previse spamovanja u chatu!", 
        maxDuplicatesWarning: 7,// When people are spamming the same message, this will trigger when member X sent over 7+ messages.
        maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
        ignoredRoles: ["Globalna Elita :robot:", "𝐆𝐥𝐚𝐯𝐚 :crown:"], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
        ignoredMembers: ["slavce#1172"], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
        mutedRole: "muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
        timeMuted: 10000, // This is how much time member X will be muted. if not set, default would be 10 min.
        //2 sata mute
        logChannel: "antispam-logs" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
      });
      console.log("uso sam u channel")
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.

  // Rest of your code
});

client.on('guildMemberAdd', member => {
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Globalna Elita BOT')
        .setDescription('Dobrodosao na Globalna Elita server')
        .setImage('https://images.discordapp.net/avatars/692723897887490138/84aa9418766cf39f8d17d097e1d90abc.png?size=512')
    member.send(exampleEmbed);
 });


client.login('NzAzNzAwNDQwNjIxMTIxNjA2.XqTBZQ.6b-suO3aOkP5hd836sArMkogonw');


