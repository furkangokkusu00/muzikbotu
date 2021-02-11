module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Aynı ses kanalında değilsiniz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Lütfen etkinleştirmek veya devre dışı bırakmak için geçerli bir filtre belirtin!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Bu filtre mevcut değil, örneğin deneyin (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Müziğe filtre ** ekliyorum **, lütfen bekleyin ... Not: Müzik ne kadar uzun olursa, bu o kadar uzun sürer.`);
        else message.channel.send(`${client.emotes.music} - Müzikteki filtreyi ** devre dışı bırakıyorum **, lütfen bekleyin ... Not: Müzik ne kadar uzun süre çalarsa, bu o kadar uzun sürer.`);
    },
};