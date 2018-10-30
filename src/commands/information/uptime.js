const Command = require('../../structures/Command');

module.exports = class Uptime extends Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            group: 'information',
            memberName: 'uptime',
            description: 'Responds how long this bot was active.',
            guarded: true,
        });
    }

    run(msg) {
        const { duration } = this.client.modules.utility;
        msg.say(duration(this.client.uptime));
    }
};