---
layout: page
title: Essays
permalink: /essays/
---

# Musings & Architectures
Deep dives into the technical philosophy, ethical frameworks, and systems thinking behind my work.

---

{% for essay in site.essays %}
  <div class="essay-preview" style="margin-bottom: 2em;">
    <h3 style="margin-bottom: 0.2em;">
      <a href="{{ essay.url | relative_url }}">{{ essay.title }}</a>
    </h3>
    <small style="color: #6b7340; display: block; margin-bottom: 0.5em;">{{ essay.date | date: "%B %d, %Y" }}</small>
    <p style="font-style: italic; color: #3a3a3a;">{{ essay.excerpt | strip_html | truncatewords: 40 }}</p>
    <a href="{{ essay.url | relative_url }}" style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Read Musing ◈</a>
  </div>
{% endfor %}
