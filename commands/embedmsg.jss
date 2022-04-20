const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Test title')
	// .setURL('https://discord.js.org/')
	// .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('This is a test, yeehaw mofo.')
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
	.setFooter({ text: 'test', iconURL: '' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emsg')
        .setDescription('Send a message with embed'),
        async execute(interaction) {
            await interaction.reply({ exampleEmbed, ephemeral: true });
        },
};
