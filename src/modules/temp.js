const handler = require('../module-handler')
module.exports = {
    name: 'Testing Tasks',
    disabled: true,
    run: async (client) => {
        const getRequest = require('../utils/https-get-request');
        var res = await getRequest('https://sessionserver.mojang.com/session/minecraft/profile/b3e767a3-8138-4528-8f17-53d43f01a5aa')
        console.log(res.name)
    }
}