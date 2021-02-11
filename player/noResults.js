module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Belirttiğin şarkıyı bulamadım. ${query} !`);
};