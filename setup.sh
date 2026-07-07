#!/bin/bash

ECHO "First clone the project"
git clone https://github.com/CheezzyBoii/Bulldog.git

ECHO "Go into the Bulldog directory"
cd Bulldog

ECHO "Install Node Dependencies"
npm install

ECHO "Make .env file and paste in text below"
nano .env

ECHO "ext to paste (make sure to replace with bot tokens)""
SLACK_BOT_TOKEN=xoxb...   # Bot User OAuth Token (from OAuth & Permissions)
SLACK_APP_TOKEN=xapp...   # App-Level Token (from Basic Information → App-Level Tokens)
