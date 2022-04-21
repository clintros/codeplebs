const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('GitHub')
	// .setURL('https://discord.js.org/')
	// .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('https://github.com/clintros/codeplebs');
	// .setThumbnail('https://i.imgur.com/AfFp7pu.png')
	// .addFields(
	// 	{ name: 'Regular field title', value: 'Some value here' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// )
	// .addField('Inline field title', 'Some value here', true)
	// .setImage('https://i.imgur.com/AfFp7pu.png')
	// .setTimestamp()
	// .setFooter({ text: 'test', iconURL: '' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emsg')
        .setDescription('Send a message with embed'),
        async execute(interaction) {
            await interaction.reply({ embeds: [exampleEmbed], ephemeral: false });
        },
};
