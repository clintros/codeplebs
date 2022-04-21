const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const exampleEmbed = new MessageEmbed()
  .setColor("#36393f")
  .setTitle("Roles")
  // .setURL('https://discord.js.org/')
  // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
  .setDescription("Use the buttons below to assign roles to yourself!");
// .setThumbnail('https://i.imgur.com/AfFp7pu.png')
// .addFields(
// // 	{ name: 'Regular field title', value: 'Some value here' },
// // 	{ name: '\u200B', value: '\u200B' },
// // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
//     { name: 'Roles', value: ' ', inline: false },
// );
// .addField('Inline field title', 'Some value here', true)
// .setImage('https://i.imgur.com/AfFp7pu.png')
// .setTimestamp()
// .setFooter({ text: 'test', iconURL: '' });

const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("js")
    .setLabel("Javascript")
    .setStyle("PRIMARY"),
  new MessageButton()
    .setCustomId("ruby")
    .setLabel("Ruby")
    .setStyle("PRIMARY")
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roles")
    .setDescription("Example role embed"),
  async execute(interaction) {
    await interaction.reply({
      embeds: [exampleEmbed],
      components: [row],
      ephemeral: true,
    });
  },
};
