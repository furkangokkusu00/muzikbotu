module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Sırada sadece bir şarkı var.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Sıra az önce **Silindi** !`);
    },
};