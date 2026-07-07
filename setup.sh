#!/bin/bash

echo "First clone the project"
git clone https://github.com/CheezzyBoii/Bulldog.git

echo "Go into the Bulldog directory"
cd Bulldog

echo "Install Node Dependencies"
npm install

echo "Make .env file and paste in text below"
touch .env

echo "Text to paste (make sure to replace with bot tokens):"
echo "SLACK_BOT_TOKEN=xoxb...   # Bot User OAuth Token (from OAuth & Permissions)"
echo "SLACK_APP_TOKEN=xapp...   # App-Level Token (from Basic Information → App-Level Tokens)"
