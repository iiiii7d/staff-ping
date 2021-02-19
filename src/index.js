const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs')

require('dotenv').config();
client.login(process.env.TOKEN);

const config = require('../config/config')
client.config = config

client.on('ready', async () => {
    console.log(`Logged into Discord API with client ${client.user.tag}`)
    //import and run modules
    let moduleFiles = await fs.readdirSync('./src/modules/');
    for (const file of moduleFiles) {
        let module = require(`./modules/${file}`)
        if (module.disabled) {
            console.log(`Not initialising module ${module.name} because it is disabled`)
        } else {
            console.log(`Initialising module ${module.name}`)
            module.run(client)
        }

    }
})