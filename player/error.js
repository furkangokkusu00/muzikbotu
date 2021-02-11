module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Bu sunucuda çalınan müzik yok !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Herhangi bir ses kanalına bağlı değilsiniz !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ses kanalınıza katılamıyorum, lütfen izinlerimi kontrol edin !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Bir şeyler ters gitti ... Hata : ${error}`);
    };
};
