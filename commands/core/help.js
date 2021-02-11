module.exports = {
    name: 'help',
    aliases: ['muzik-yardım' , 'müzik-yardım' , 'müzik' , 'help'],
    category: 'Core',
    utilisation: '{prefix}yardım <komut ismi>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Yardım Paneli' },
                    footer: { text: 'Bu bot #Trodos tarafından While Falling sunucusu adına tasarlanmıştır.' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Muzik', value: music },
                        { name: 'Filtreler', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Filtreleri kullanmak için, ${client.config.discord.prefix}filtre (the filter). Misal : ${client.config.discord.prefix}filtre 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Bu komutu bulamadım !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Yardım Paneli' },
                    footer: { text: 'Bu bot #Trodos tarafından While Falling sunucusu adına tasarlanmıştır.' },
                    fields: [
                        { name: 'İsim', value: command.name, inline: true },
                        { name: 'Katagori', value: command.category, inline: true },
                        { name: 'TakmaAd(lar)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Kullanım', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Sağlanan komutlarla belirli argümanları bulun.\nZorunlu Argümanlar`[]`, isteğe bağlı argümanlar `<>`.',
                }
            });
        };
    },
};