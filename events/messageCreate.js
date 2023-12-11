const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;

		const message_text_str = JSON.stringify(message.content);
		if (message_text_str.indexOf('💩') > 0) {
			message.reply('Have a great trip in the 🚽!');
			// TODO: async write to DB
			// message.author.id, message.author.username, message.createdTimestamp
		}
	},
};