---
name: Chat's TierList
genericName: Twitch Chat Tier List Voting System
image: ./chats-tierlist.png
icon: ./chats-tierlist-icon.svg
releaseDate: 2025-11-18
period: Fall 2025
languages:
  - TypeScript
stack:
  - React
  - Node
  - Fastify
  - PostgreSQL
  - Redis
  - Docker
link: https://github.com/jasonly027/chats-tierlist
deployment: Web App
---

Site is accessible [<u>here</u>](https://chatstierlist.jsonis.me).
<br><br>
A web app for live streamers to create tier lists and have their Twitch chat vote on items. The
tier of an item is calculated by averaging all votes.
<br><br>
The REST API backend server is powered by Fastify and contains OpenAPI annotated endpoints.
Write-behind caching is utilized with Redis and PostgreSQL to mitigate large streams of voters.
Votes are parsed directly from Twitch chat using Twitch's WebSocket API. The frontend is hosted
on GitHub Pages and the server and database are containerized and deployed on a VPS.
