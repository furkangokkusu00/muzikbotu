module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Şu an ** ${track.title} ** isimli şarkı, ** ${message.member.voice.channel.name} ** odasında çalıyor ...`);
};