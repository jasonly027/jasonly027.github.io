---
name: Steam Sale Bot
genericName: Sale Tracking Discord Bot
image: ./steamsale-bot.png
icon: ./steamsale-bot-icon.png
releaseDate: 2025-09-03
period: Summer 2025
languages:
  - Rust
stack:
  - MongoDB
  - Poise
  - Docker
link: https://github.com/jasonly027/steamsale_bot
deployment: Discord Bot
---

A bot that tracks apps on [<u>Steam</u>](https://store.steampowered.com/) and sends automated
Discord messages when they release or go on sale. Discount thresholds can be set on a global
and per-app basis. Installed in over 270 Discord servers.
<br><br>
Tracked apps and Discord server info are stored in MongoDB collections. Steam's Internal Web API
is used to check app statuses. Through the Poise framework, Discord's API is used to integrate the
bot into servers. The bot is containerized and deployed on a VPS.
