const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		console.log(message.author.id);
		console.log(message.author.username);
		console.log(message.content);
	},
};