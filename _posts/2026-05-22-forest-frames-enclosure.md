---
layout: post
title: "ForestFrames Enclosure: Basswood & Brass"
date: 2026-05-22 12:00:00 -0400
excerpt: "Carving a custom enclosure for the ForestFrames camera using a hinged basswood box and precision I/O cutouts."
tags: [ForestFrames, hardware, woodworking, ESP32]
project: forest_frames
---

The Appalachian Gothic aesthetic of the **ForestFrames** project demands more than a 3D-printed enclosure. To bridge the gap between high-performance firmware and physical artifact, I have begun fabricating a custom housing using a "Make Market" basswood box with a brass hinge. Like many of my projects, I want the presentation to be as much art as the software. It should cultivate a vibe and an experience.

### 1. The Chassis: Basswood Selection
The choice of basswood was intentional. It is soft enough to carve with high precision but maintains a classic, organic texture that fits the "Folk Horror" vibe of the camera's software filters.

![The Basswood Box Base](/assets/images/posts/2026-05-22-forest-frames/enclosure-base.jpg)

While the internals are all functional, they definitely are not organized yet. I am waiting on some mounting screws to come in to secure the screen before mounting the remaining components.

### 2. The Through-Port: USB-C Integration
The core of the internal hardware is the **XIAO ESP32S3 Sense**. To ensure the device is field-serviceable, I measured and carved a dedicated through-port for a USB-C connection.

*   **Process:** I used a Dremel to route a circular opening that matches the profile of a Flexible Printed Cable (FPC) flush-mounted port, allowing the USB-C cable to be secure for plugging in, charging, and flashing updates through XIAO's port without internal stress or risking unseating the camera.

![USB-C Port Cutout](/assets/images/posts/2026-05-22-forest-frames/usb-c-cutout.jpg)

### 3. The Viewfinder: ST7789 Display Opening
The most critical physical interface is the viewport for the 1.47" ST7789 LCD.

*   **Measurement:** The opening was measured specifically to expose only the active pixel area, hiding the ribbon cables and PCB edges within the grain of the wood.
*   **Execution:** After marking the boundaries, I carved the display window with the Dremel. The brass hinges allow the box to open for internal hardware debugging while remaining a sealed unit during capture.

There is a good degree of extra cable meterage coming from the ports the LCD screen came with, so I may want to trim those down in the future to clean up the internal wiring, but for the version 1 this is more than workable.

![Screen Viewport Carving](/assets/images/posts/2026-05-22-forest-frames/screen-opening.jpg)

---
*Next: Final assembly and mounting the OV2640 sensor.*

Related Project: [ForestFrames](/projects/forest_frames/)
