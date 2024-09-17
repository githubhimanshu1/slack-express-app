// routes/alertRouter.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace this with your actual Slack Webhook URL
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/webhook/url';

// Route to handle /alert
router.get('/', async (req, res) => {
  try {
    // Define the message payload to send to Slack
    const slackMessage = {
      text: '🚨 Alert! Something important happened!',
    };

    // Send the message to the Slack webhook URL
    await axios.post(SLACK_WEBHOOK_URL, slackMessage);

    // Respond to the client
    res.status(200).json({ message: 'Alert posted to Slack!' });
  } catch (error) {
    console.error('Error posting alert to Slack:', error);
    res.status(500).json({ error: 'Failed to post alert to Slack' });
  }
});

module.exports = router;
