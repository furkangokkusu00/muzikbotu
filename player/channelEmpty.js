module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Ses kanalında başka üye olmadığından müzik durduruldu !`);
};