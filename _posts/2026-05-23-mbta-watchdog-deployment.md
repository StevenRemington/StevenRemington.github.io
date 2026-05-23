---
layout: post
title: "Transit Accountability: Deploying the MBTA Watchdog"
date: 2026-05-23 11:00:00 -0400
excerpt: "Deploying a production-grade monitoring suite to a Raspberry Pi to hold Keolis accountable for Commuter Rail performance."
tags: [MBTA, Python, RaspberryPi, automation, MetroWest]
project: mbta_watchdog
---

As a resident of the MetroWest, the **MBTA Worcester Line** is my lifeline to the city; it is a critical piece of infrastructure that dictates the rhythm of my daily life. However, for too long, commuters have been forced to accept delays and cancellations with little more than a shrug from **Keolis**. 

I built the **MBTA Watchdog** to change that. 

The goal is simple: **Accountability.** My partner uses the commuter rail to get to and from work where he serves the health community. Massive delays not only harm him but all the people he supports. By deploying a monitoring suite to a dedicated Raspberry Pi, I hope to support him by providing information the MBTA does not provide, and also bringing visibility to the real issues people experience daily. 

### 1. From Script to Hybrid Architecture
What started as a simple Python script has evolved into a robust, three-tiered **Hybrid Architecture**. On my production Raspberry Pi, I have split the system into independent services managed by `systemd`:

1.  **The Monitor:** Polls the MBTA API every 120 seconds, silently logging every train's status to a local SQLite database.
2.  **The Bots:** A dedicated consumer service that watches for disruptions and triggers alerts on Discord and Bluesky.
3.  **The Dashboard:** A live web interface that gives the community an unfiltered view of the Worcester Line’s health.

By decoupling these components, the "Producer" (the monitor) never stops working, even if a social media API (the "Consumer") hits a rate limit or goes offline.

### 2. The "Receipt Keeper" Logic
The real power of my Watchdog isn't just knowing that a train is late *now*—it’s knowing how often it has failed in the past. 

The system implements what I call **Receipt Keeper** logic. When a train is delayed or canceled, the bot doesn't just send an alert; it queries the SQLite ledger for the last 7 days of performance. It then generates a formal complaint draft that includes lines like:

> *"Train 508 has failed 4 times in the last week (05/18, 05/20, 05/21, 05/23)."*

This transforms a single complaint into a data-backed record of systemic failure.

### 3. A Note on Platforms: Why I left X/Twitter
Accountability isn't just about the data I collect; it's about where that data is broadcast. I have made the deliberate choice to entirely rip out Twitter support from the Watchdog. 

The political trajectory and personal stances of Elon Musk have made X an untenable platform for a project dedicated to community empowerment and public infrastructure. A tool meant to hold powerful entities like Keolis accountable should not be anchored to a platform controlled by a billionaire who actively undermines those same community values. 

Moving forward, I will exclusively utilize **Bluesky** as the primary social broadcast layer for the MBTA Watchdog.

### 4. Promoting a Community-Focused MetroWest
Infrastructure should serve the community, not the other way around. By automating the process of filing "Receipts" and providing a live, transparent dashboard at **softwarespren.com**, this project aims to empower MetroWest residents. 

I am not just a passenger; I am a stakeholder. And with the MBTA Watchdog running 24/7 on a Raspberry Pi in my office, I now have the data to prove it.

---
Related Project: [MBTA Watchdog](/projects/mbta_watchdog/)
