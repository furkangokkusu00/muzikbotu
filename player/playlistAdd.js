module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} sıraya eklendi (**${playlist.tracks.length}** 	şarkılar) !`);
};