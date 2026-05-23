---
layout: page
title: "MBTA Watchdog"
permalink: /projects/mbta_watchdog/
status: "Completed / Stable"
excerpt: "A real-time transit accountability engine designed to monitor the MBTA Worcester Line and promote reliable infrastructure for the MetroWest community."
---

# MBTA Watchdog: Transit Accountability Engine

**Status:** Completed / Stable  
**Primary Discipline:** Systems Automation / Data Integrity  
**Key Constraints:** 24/7 Uptime, Low-Latency Polling, SQLite Persistence

## 1. The Mission: Accountability for the MetroWest
The Worcester Line is the lifeblood of the MetroWest community, yet its reliability is often opaque. I architected the `MBTA Watchdog` to bring radical transparency to **Keolis** and the **MBTA** operations. By monitoring every train in real-time, the system builds a "Receipt Ledger" of historical performance, transforming anecdotal frustration into data-backed accountability.

*   **Goal:** Promote a more community-focused MetroWest by ensuring the infrastructure I rely on is held to a verifiable standard.
*   **Impact:** Automated "Receipts" generate formal complaint drafts when delays exceed thresholds, ensuring that service failures are never silent.

## 2. Architecture Decision Records (ADR)

### ADR-001: Hybrid Service Architecture
*   **Context:** Running a monolithic bot leads to "stalled" monitoring if an API (like Discord or Bluesky) hangs or rate-limits.
*   **Decision:** Split the system into three independent `systemd` units: `mbta-monitor`, `mbta-bots`, and `mbta-dashboard`.
*   **Rationale:** Decouples the **Producer** (Data Ingestion) from the **Consumer** (Social Alerts). If a bot service crashes, the monitor continues to log telemetry to the SQLite database without interruption.

### ADR-002: SQLite as the "Receipt Keeper"
*   **Context:** Real-time data is fleeting; accountability requires historical context.
*   **Decision:** Implement a local SQLite backend (`mbta_logs.db`) to store years of high-resolution telemetry.
*   **Rationale:** Allows the system to identify patterns (e.g., *"Train 508 has failed 4 times this week"*). This historical data is injected into automated reports to provide weight to passenger complaints.

### ADR-003: Deprecating X/Twitter for Bluesky
*   **Context:** X (formerly Twitter) has become an increasingly volatile environment under Elon Musk’s ownership, often at odds with the community-focused goals of this project.
*   **Decision:** Entirely remove Twitter/Tweepy integration and standardize on Bluesky (AT Protocol).
*   **Rationale:** An accountability system should not depend on platforms that prioritize billionaire-driven political agendas over public service. Bluesky offers a decentralized, open, and values-aligned environment for my outreach.

## 3. Production Environment (Raspberry Pi)

The system is deployed on a dedicated **Raspberry Pi** node, running a hardened Linux environment optimized for 24/7 service uptime.

| Component | Specification | Purpose |
| :--- | :--- | :--- |
| **Compute** | Raspberry Pi 4 (4GB) | Production Orchestration |
| **OS** | Raspberry Pi OS (64-bit Lite) | Minimal Overhead Host |
| **Persistence** | SQLite 3 | Relational Data & Receipt Ledger |
| **Deployment** | Systemd | Fault-Tolerant Service Management |

## 4. Automation Features
*   **The Receipt Keeper:** Tracks 7-day failure windows for every specific train number.
*   **Multi-Platform Alerts:** Simultaneous broadcasts to **Discord** and **Bluesky** for major disruptions.
*   **Accountability Dashboard:** A live Worcester Line board served via FastAPI to provide the community with an unfiltered view of service status.

### Live Telemetry (Bluesky Feed)
The feed below pulls live "Receipts" and alerts directly from the production node via the `@mbtawatchdog.bsky.social` handle.

<div class="bluesky-embed-container" style="border: 2px double #e2dabf; padding: 10px; background: rgba(226, 218, 191, 0.2); margin-top: 1.5em; max-height: 600px; overflow-y: auto;">
  <script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js"></script>
  <bsky-embed
    username="mbtawatchdog.bsky.social"
    limit="5"
    link-target="_blank"
    custom-styles=".bsky-embed { font-family: 'Georgia', serif; background: transparent; } .bsky-post { border-bottom: 1px solid rgba(75, 83, 32, 0.1); }"
  ></bsky-embed>
</div>

---
## Development Logs
{% assign related_posts = site.posts | where: "project", "mbta_watchdog" %}
{% for post in related_posts %}
* [{{ post.title }}]({{ post.url | relative_url }}) ({{ post.date | date: "%B %d, %Y" }})
{% else %}
*(Technical logs and deployment updates will populate here.)*
{% endfor %}
