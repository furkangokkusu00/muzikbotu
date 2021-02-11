module.exports = async (client) => {
    console.log(`Hazır için : ${client.guilds.cache.size} sunucu, toplam ${client.users.cache.size} kullanıcı için`);

    client.user.setActivity(client.config.discord.activity);
};