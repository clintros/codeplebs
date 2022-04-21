const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: { name: "say" },
  async execute(client, args) {
    const channel = client.channels.cache.find(
      (channel) => channel.name === args[1]
    );
    const rChannel = channel.id;

    let msgStr = args.splice(2).join(" ");

    const mEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Message from codeplebs")
      .setDescription(msgStr);
    client.channels.cache
      .get(rChannel)
      .send({ embeds: [mEmbed], ephemeral: false });

    //   await interaction.reply({
    //     embeds: [exampleEmbed],
    //     components: [row],
    //     ephemeral: true,
    //   });
  },
};
