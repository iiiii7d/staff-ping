const handler = require('../module-handler')
module.exports = {
    name: 'Reaction Roles',
    disabled: false,
    run: (client) => {
        client.channels.cache.get(client.config.reactionRolesChannel).messages.fetch(client.config.reactionRolesMessage)
            .catch(err => handler.error(module.exports, `Failed to cache message`))
            .then(() => handler.log(module.exports, `Cached reaction role message`))
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.id === client.config.reactionRolesMessage) {
                let member = reaction.message.guild.member(user);
                await member.roles.add(client.config.pingRole).catch(err => { })
            }
        })
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.id === client.config.reactionRolesMessage) {
                let member = reaction.message.guild.member(user);
                await member.roles.remove(client.config.pingRole).catch(err => { })
            }
        })
    }
}