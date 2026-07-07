# Simple Slack Bot
A simple bot for the slack platfrom named bulldog

### Includes these slash commands
```
/bulldog-ping - Check bot latency
/bulldog-bark - Tell Bulldog to bark
/bulldog-help - Show this help message
/bulldog-fact - Get a random dog fact
/bulldog-joke - Get a random joke
```

### Setup 

#### Start with one command (Not working will fix another time)

```
curl -fsSL https://github.com/CheezzyBoii/Bulldog/raw/refs/heads/main/setup.sh | bash
```
now just replace with the .env tokens

#### Interactive Start & Install

First clone the project
```bash
git clone https://github.com/CheezzyBoii/Bulldog.git
```

Go into the Bulldog directory
```bash
cd Bulldog
```

Install Node Dependencies
```bash
npm install
```

Make .env file and paste in text below
```bash
nano .env
```

Text to paste (make sure to replace with bot tokens)
```
SLACK_BOT_TOKEN=xoxb...   # Bot User OAuth Token (from OAuth & Permissions)
SLACK_APP_TOKEN=xapp...   # App-Level Token (from Basic Information → App-Level Tokens)
```

#### Start the bot
```bash
node index.js
```

with pm2 (Stays on 24/7)
Installation command: npm install pm2 -g
```bash
pm2 start index.js --name bulldog
pm2 list
```