module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Seçim ** iptal edildi ** !`);
    } else message.channel.send(`${client.emotes.error} - Arasında geçerli bir numara göndermelisiniz **1** ve **${tracks.length}** !`);
};