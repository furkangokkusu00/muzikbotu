module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Geçerli bir yanıt sağlamadınız ... Lütfen komutu tekrar gönderin !`);
};