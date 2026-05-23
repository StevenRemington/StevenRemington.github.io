---
layout: page
title: Home
---

# Steven Remington
**Senior Software Engineer | Compilers, Edge AI, & Hardware/Software Co-design**

This digital workspace serves as a repository for ongoing research into agentic systems, compiler infrastructure, and the physical constraints of edge computing. I build tools that bridge high-level logical reasoning with the brutal reality of constrained hardware.

---

### Primary Initiatives

{% assign active_projects = site.projects | where: "status", "Active Development" %}
{% for project in active_projects %}
  <div class="active-project" style="margin-bottom: 2em;">
    <h4 style="margin-bottom: 0.2em;">
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
    </h4>
    <p style="font-size: 0.95em; line-height: 1.4;">{{ project.excerpt | default: "Active research and development." }}</p>
  </div>
{% endfor %}

[View All Projects ◈](/projects/)

### Technical Focus
*   **Systems Engineering:** C++20, custom memory management, and high-performance parsing strategies.
*   **Edge AI:** Orchestrating agentic behaviors on Jetson and Raspberry Pi silicon without cloud dependencies.
*   **Hardware:** Designing and building custom I/O devices, cyberdecks, and mobile compute nodes.
*   **Craft:** Bridging the gap between digital architecture and physical fabrication (leather, foam, and electronics).

---
### Recent Logs

{% for post in site.posts limit:3 %}
  <div class="recent-post" style="margin-bottom: 1.5em;">
    <h4 style="margin: 0;">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h4>
    <small style="color: #6b7340;">{{ post.date | date: "%B %d, %Y" }}</small>
    <p style="font-size: 0.95em; margin-top: 0.3em;">{{ post.excerpt | strip_html }}</p>
  </div>
{% endfor %}

[View All Posts ◈](/posts/)
