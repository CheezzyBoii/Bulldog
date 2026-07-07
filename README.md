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

First clone the project
```
git clone https://github.com/CheezzyBoii/Bulldog.git
```

Go into the Bulldog directory
```
cd Bulldog
```

Install Node Dependencies
```
npm install
```

Make .env file and paste in text below
```
nano .env
```

Text to paste (make sure to replace with bot tokens)
```
SLACK_BOT_TOKEN=xoxb...   # Bot User OAuth Token (from OAuth & Permissions)
SLACK_APP_TOKEN=xapp...   # App-Level Token (from Basic Information → App-Level Tokens)
```
