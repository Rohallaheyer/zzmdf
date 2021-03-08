const { DMChannel } = require("discord.js")

module.exports = (client) => {
  const channelId = '777275431677984778' // welcome channel
  const targetChannelId = '788093602693644348' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Hello <@${
      member.id
    }> Welcome to our server Please select your gender from this section ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()} Thanks to the development team net bee server`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
