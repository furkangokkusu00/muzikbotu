module.exports = {
    name: 'play',
    aliases: ['p' , 'çal' , 'müzik' , 'muzik' , 'müzikçal'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Lütfen bir şarkının adını belirtin !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};