const { Events } = require('discord.js');

const fs = require('fs');

let response_common = [];
let response_rare = [];
let response_epic = [];
let response_legendary = [];

function fetchMessages() {
  fs.readFile('response_common.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('There was a problem reading the file:', err);
      return;
    }
	response_common = data.split('\n');
    // You can perform further operations with the 'messages' array here
  });

  fs.readFile('response_rare.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('There was a problem reading the file:', err);
      return;
    }
	response_rare = data.split('\n');
    // You can perform further operations with the 'messages' array here
  });

  fs.readFile('response_epic.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('There was a problem reading the file:', err);
      return;
    }
	response_epic = data.split('\n');
    // You can perform further operations with the 'messages' array here
  });

  fs.readFile('response_legendary.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('There was a problem reading the file:', err);
      return;
    }
	response_legendary = data.split('\n');
    // You can perform further operations with the 'messages' array here
  });
}

// Call the function to fetch messages
fetchMessages();
  
// Function to get a random message
function getRandomMessage() {
	let randomNumber = Math.floor(Math.random() * 100);
	console.log("CONSOLE: number is" + randomNumber)
	if (randomNumber <= 80) {
		let randomIndex = Math.floor(Math.random() * response_common.length);
		let randomMessage = response_common[randomIndex];
		return randomMessage;
	} else if (randomNumber <= 94) {
		let randomIndex = Math.floor(Math.random() * response_rare.length);
		let randomMessage = response_rare[randomIndex];
		return randomMessage;
	} else if (randomNumber <= 98) {
		let randomIndex = Math.floor(Math.random() * response_epic.length);
		let randomMessage = response_epic[randomIndex];
		return randomMessage;
	} else {
		return response_legendary[0] + response_legendary[1];
	}
}

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;
		const message_text_str = JSON.stringify(message.content);
		if (message_text_str.indexOf('💩') > 0) {
			let randomLine = getRandomMessage();
			message.reply(randomLine);
			// TODO: async write to DB
			// message.author.id, message.author.username, message.createdTimestamp
		}
	},
};