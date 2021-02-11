module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Kanalla bağlantım kesildiğinden müzik durdu !`);
};