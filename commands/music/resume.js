module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Müzik zaten çalıyor !`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Müzik ${client.player.getQueue(message).playing.title} devam etti !`);
    },
};