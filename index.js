const axios = require("axios");

require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/bulldog-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms\nWOOF! WOOF!` });
});

app.command("/bulldog-bark", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `WOOF! WOOF!\n ${latency}ms` });
});

app.command("/bulldog-fact", async ({ ack, respond }) => {
  await ack();

  try {
    // Make fetch for random dog fact
    const res = await fetch('https://dogapi.dog/api/v1/facts?number=1&raw=true');

    const fact = await res.text();

    // Respond with the dog fact
    await respond({ text: `Dog Fact:\n${fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a dog fact." });
  }
});

app.command("/bulldog-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/bulldog-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/bulldog-ping - Check bot latency
/bulldog-bark - Tell Bulldog to bark
/bulldog-help - Show this help message
/bulldog-fact - Get a random dog fact`
  });
});


(async () => {
  await app.start();
  console.log("bot is running bro!");
})();