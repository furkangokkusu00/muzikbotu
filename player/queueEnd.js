module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Müzik bitti ^-^ \n :point_right: Yeni müzik eklemek için .çal <müzik-ismi/veya-linki> !`);
};