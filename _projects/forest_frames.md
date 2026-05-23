---
layout: page
title: "ForestFrames"
permalink: /projects/forest_frames/
---

# ForestFrames: Appalachian Gothic Imaging

**Status:** Completed / Stable  
**Primary Discipline:** Embedded Systems / Firmware Engineering  
**Key Constraints:** Shared SPI Bus, 8MB PSRAM, Interrupt-Driven I/O

## 1. The Constraints (Physical Boundaries)
`ForestFrames` is an enterprise-grade firmware for the **Seeed Studio XIAO ESP32S3 Sense**. The architecture was forged under severe hardware contention:
*   **SPI Bus Arbitration:** The ST7789 Display and the SD Card share a single SPI bus. Operations must be strictly gated to prevent bus contention and data corruption.
*   **Memory Depth:** While the XIAO provides 8MB of PSRAM, the firmware implements a dual-homed fallback. If PSRAM is missing, the system downscales to QQVGA and utilizes internal DRAM to maintain stability.
*   **Real-time Processing:** To achieve a "Gothic" look without frame drops, color filtering must be performed in a single pass using pre-calculated Look-Up Tables (LUTs).

## 2. Architecture Decision Records (ADR)

### ADR-001: LUT-based Filtering over Euclidean Distance
*   **Context:** Real-time color clamping to the Appalachian Gothic palette is computationally expensive.
*   **Decision:** Utilize a 16-bit pre-calculated Look-Up Table (LUT) stored in PSRAM.
*   **Rationale:** Floating-point Euclidean math inside the frame loop drops the FPS to <2. The LUT approach maintains a steady 15-20 FPS at QVGA resolution.

### ADR-002: Strict SPI Bus Gating
*   **Context:** SD Card writes during display updates caused "Ghost Files" and filesystem corruption.
*   **Decision:** Implement a hardware-level chip-select (CS) lockout. `TFT_CS` is forced HIGH (deselected) with a 50ms settling delay before any SD transaction.
*   **Rationale:** Physical bus stability on the XIAO sense is sensitive to high-frequency switching.

## 3. Hardware Bill of Materials (BOM)

| Component | Specification | Purpose |
| :--- | :--- | :--- |
| **Compute** | Seeed Studio XIAO ESP32S3 Sense | Dual-Core MCU & Camera Header |
| **Sensor** | OV2640 (2MP) | Image Capture |
| **Display** | 1.47" ST7789 LCD | Viewfinder & UI |
| **Storage** | 32GB MicroSD (FAT32) | Image Persistence |
| **Input** | 3-Way Navigation Switch | Menu & Shutter Control |

## 4. Feature Set
*   **Gothic Filter:** A high-performance LUT-based filter clamping colors to Bone, Moss, and Shadow.
*   **Visual Shutter:** 50ms white-screen flash for immediate capture feedback.
*   **Gothic Portal:** Integrated WiFi SoftAP for wireless image retrieval from the SD card.

---
*Technical deep-dive on SPI Bus Arbitration coming soon.*

## Development Logs
{% assign related_posts = site.posts | where: "project", "forest_frames" %}
{% for post in related_posts %}
* [{{ post.title }}]({{ post.url | relative_url }}) ({{ post.date | date: "%B %d, %Y" }})
{% endfor %}
