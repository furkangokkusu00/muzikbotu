module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - Mevcut müzik az önce ** atlandı ** !`);
    },
};