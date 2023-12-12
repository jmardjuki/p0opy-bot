# p0ppy Bot

Discord bot to keep track of everyone's bowel movement.

## How it works?
- User post 💩 everytime they 💩
- Bot will keep track of the occurance and keep a tally
- At the end of the month generate statistic

## Why discord?
For some people, discord is basically their second life, where they communicate with people and gather all their news from Discord.
Some people use it as a diary, to tell the world what they do today.


## Building This Bot
1. Visit the [developer portal](https://discord.com/developers/applications), and create a new application + bot.

2. On the Bot tab, turn on Privileged Gateway Intents - Server Members Intent, Message Content Intent.

3. Invite bot to test server using OAuth2

4. Clone this repo in your local
```
$ git clone git@github.com:jmardjuki/p0opy-bot.git
```

5. Back to the repo cloned earlier. Copy `config.json.template` as `config.json`
```
$ cp config.json.template config.json
```
6. Change the token and application ID field from your bot's [developer portal](https://discord.com/developers/applications) page


## Running the app
### Natively
```
$ node index.js
```

### On Docker
```
$ docker compose up --build
```
