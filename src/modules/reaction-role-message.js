const handler = require('../module-handler')
module.exports = {
    name: 'Reaction Role Message',
    disabled: true,
    run: async (client) => {
        const msg = `React to this message with ✅ to subscribe to alerts when a staff member joins after at least 60 minutes of no staff being online.`
        const message = await client.channels.cache.get(client.config.reactionRolesChannel).send(msg)
        await message.react('✅')
        handler.log(module.exports, `Completed tasks`)
    }
}