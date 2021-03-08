const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { prefix } = require('./config.json');
const colors = require(`./colors.json`);
const welcome = require('./welcome')
client.on('ready', () => {
  console.log('Bot Is Now Online!');
  
  welcome(client)

	const targetguild = client.guilds.cache.get("726033850240598038")
    const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
	function randomStatus() {
   let status = ['NET BEE', `${client.users.cache.size}members`, '!Jᴀʜᴇʟ Aᴀᴍɪɴ#6061', `${count} Alive Voice`]
   let rstatus = Math.floor(Math.random() * status.length);
	 client.user.setActivity(status[rstatus], {type: "WATCHING"});

  }; setInterval(randomStatus, 3000)
  

});

function chNickname() {
    const targetguild = client.guilds.cache.get("726033850240598038")
    const me = targetguild.members.cache.get(client.user.id)
    let name = ['N', 'NE', 'NET', 'NET B', 'NET BE', 'NET BEE']
    for (let i = 0; i < name.length; i++)
        me.setNickname(name[i])
}; setInterval(chNickname, 11000)

client.on('message', async message => {
	// Voice only works in guilds, if the message does not come from a guild,
	// we ignore it
	if (!message.guild) return;
  
	if (message.content === `${prefix}join`) {
	  // Only try to join the sender's voice channel if they are in one themselves
	  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    message.reply('Joined voice channel!');
	  } else {
		message.reply('You need to join a voice channel first!');
	  }
	}
});

client.on('message', message => {
	if(message.content === `${prefix}ping`) {
		message.channel.send(`ping: **${client.ws.ping}ms**`)
	}
});

client.on("message", message => {

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;

    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    if (message.content === `${prefix}vc`) {
    const vc_alive = new Discord.MessageEmbed()
	   .setColor('RANDOM')
	   .setThumbnail(message.guild.iconURL())
	   .setTitle('Alive Voice')
       .addFields(
        { name: 'Count Of Users In Voice :', value: `${count}` },
       )
       .setTimestamp()
       .setFooter(`Requested by ${message.author.username}`);
       message.channel.send(vc_alive);
    }
});
  
client.login(config.token);