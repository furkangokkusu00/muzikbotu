module.exports = {
    name: 'nowplaying',
    aliases: ['np' , 'şuan' , 'muzik-bilgi' , 'müzik-bilgi'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Bu bot #Trodos tarafından While Falling sunucusu adına tasarlanmıştır.' },
                fields: [
                    { name: 'Oda', value: track.author, inline: true },
                    { name: 'Tarafından talep edildi', value: track.requestedBy.username, inline: true },
                    { name: 'Oynatma listesinden', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Görüntüleme', value: track.views, inline: true },
                    { name: 'Süresi', value: track.duration, inline: true },
                    { name: 'Filtreler etkinleştirildi', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Ses', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Tekrar modu', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Şu anda duraklatılmış', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'İlerleme çubuğu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};