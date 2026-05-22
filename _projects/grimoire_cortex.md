---
layout: page
title: "Grimoire Cortex"
permalink: /projects/grimoire_cortex/
---

# Grimoire Cortex: Edge AI Orchestration

**Status:** Active Development (Internal Alpha)  
**Primary Discipline:** Agentic Systems / Systems Engineering  
**Key Constraints:** 8GB RAM Budget, Passive Cooling, Offline-First Execution

## 1. The Constraints (Physical Boundaries)
`Grimoire Cortex` is architected to thrive within the strict physical and thermal limits of edge hardware, specifically the **Nvidia Jetson Orin Nano**. 

*   **Memory:** Hard cap of 8GB (unified memory). The system is tuned to keep the orchestration overhead under 1GB, maximizing the KV cache and parameter space for 4-bit and 8-bit GGUF models.
*   **Thermal:** Optimized for passive cooling. High-intensity loops are mitigated through asynchronous ritual dispatch to prevent thermal throttling in compact cyberdeck enclosures.
*   **Connectivity:** Zero-trust cloud reliance. All inference and tool execution occurs locally to ensure operational autonomy in field environments.

## 2. Architecture Decision Records (ADR)

### ADR-001: Local GGUF over Cloud APIs
*   **Context:** Most modern agentic frameworks assume infinite cloud compute.
*   **Decision:** Standardize on native `llama.cpp` integration for C++ model execution.
*   **Rationale:** To achieve true agentic autonomy, the "Weight of the Node" must be physical. Local execution eliminates API latency, cost volatility, and data leakage.
*   **Trade-off:** Limits model selection to the 3B-8B parameter range to maintain interactive token velocity.

### ADR-002: Asynchronous Ritual Execution
*   **Context:** Synchronous tool-calling blocks the inference engine, causing UI stutter and engine stalls.
*   **Decision:** Implement a decoupled "Ritual" pool for all I/O and hardware interaction.
*   **Rationale:** By treating tool execution as an asynchronous side effect (a "Ritual"), the engine can continue managing state and context while the hardware layer performs physical operations.

## 3. Hardware Bill of Materials (BOM)

| Component | Specification | Purpose |
| :--- | :--- | :--- |
| **Compute** | Nvidia Jetson Orin Nano (8GB) | Primary AI Orchestration & Inference |
| **Storage** | 1TB NVMe Gen4 | Vector Store, Model Weights, & Event Logs |
| **Power** | Omnicharge 20+ | Portable DC Power & UPS |
| **I/O** | 7" Waveshare DSI Display | Real-time System Telemetry |

## 4. Current Progress
The system currently bridges high-level intent parsing with low-level hardware triggers. Current work is focused on optimizing the context window preservation during multi-turn agentic loops on the Jetson's unified memory architecture.

---
*Next Log: Designing the Internal Command Parser*
