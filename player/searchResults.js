module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `İçin arama sonuçlarınız burada ${query}` },
            footer: { text: 'Bu bot #Trodos tarafından While Falling sunucusu adına tasarlanmıştır.' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};