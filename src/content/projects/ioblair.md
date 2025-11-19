---
name: Io and Blair
genericName: Co-op WebSocket Browser Game
image: ./ioblair.png
icon: ./ioblair-icon.svg
releaseDate: 2025-04-03
period: Spring 2025
languages:
  - TypeScript
  - C++
  - CMake
stack:
  - React
  - Three.js
  - Beast WebSockets
  - Docker
link: https://github.com/jasonly027/io_blair
deployment: Web App
---

Site is accessible [<u>here</u>](https://ioblair.jsonis.me).
<br><br>
A co-op grid-based browser game. Users must partner up to collect all the coins in a stage and
avoid falling. Maps are infinitely generated and may contain paths only one player or the other
can see.
<br><br>
Chatting and movements are communicated through WebSockets. Maps are procedurally generated with
recursive backtracking. The frontend is hosted on GitHub Pages and the WebSocket server is
containerized and deployed on a VPS.
