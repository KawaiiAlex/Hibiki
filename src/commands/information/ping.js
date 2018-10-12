const Command = require('../../structures/Command');
const { pingMsg } = require('../../assets/json/messages');

module.exports = class Ping extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['pong', 'ping-pong'],
            group: 'information',
            memberName: 'ping',
            description: 'Measures the bot ping.',
            examples: ['ping'],
            guarded: true,
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run(msg) {
        const message = await msg.say(pingMsg[Math.floor(Math.random() * pingMsg.length)]);
        const ping = Math.round(message.createdTimestamp - msg.createdTimestamp);
        return message.edit(`Message: **${ping}** ms\n Websocket: **${Math.round(this.client.ping)}** ms`);
    }
};