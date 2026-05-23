---
layout: page
title: Projects
permalink: /projects/
---

# Project Repository
A complete archive of systems engineering, hardware builds, and architectural explorations.

---

### Active Nodes
{% assign active_projects = site.projects | where: "status", "Active Development" %}
{% for project in active_projects %}
  <div class="project-preview" style="margin-bottom: 2em;">
    <h3 style="margin-bottom: 0.2em;">
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
    </h3>
    <p style="font-style: italic; color: #3a3a3a;">{{ project.excerpt | default: "Active research and development." }}</p>
    <a href="{{ project.url | relative_url }}" style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Enter Node ◈</a>
  </div>
{% endfor %}

---

### Historical Archive
{% assign completed_projects = site.projects | where: "status", "Completed / Stable" %}
{% for project in completed_projects %}
  <div class="project-preview" style="margin-bottom: 2em;">
    <h3 style="margin-bottom: 0.2em;">
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
    </h3>
    <p style="font-style: italic; color: #3a3a3a;">{{ project.excerpt | default: "Stable release / Archived research." }}</p>
    <a href="{{ project.url | relative_url }}" style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">View Archive ◈</a>
  </div>
{% endfor %}
