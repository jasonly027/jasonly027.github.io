---
name: KATE Bot
genericName: English-Japanese Discord Quiz Bot
image: ./kate-bot.png
releaseDate: 2025-05-28
period: Summer 2025
languages:
  - Rust
stack:
  - Poise
  - Docker
link: https://github.com/jasonly027/kate_bot
deployment: Discord Bot
---

A bot that tests users knowledge of English-to-Japanese (and vice-versa) through various
gamemodes. Players can choose from pools of English, Kanji, and Hiragana and compete to select
their correct counterparts.
<br><br>
Data sets are extracted from JMDict. Through the Poise framework, Discord's API is used to
integrate the bot into servers. The bot is containerized and deployed on a VPS.
