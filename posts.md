---
layout: page
title: Posts
permalink: /posts/
---

# Development Logs & Insights
A chronological record of builds, hardware iterations, and technical deep-dives.

---

{% for post in site.posts %}
  <div class="post-preview" style="margin-bottom: 2em;">
    <h3 style="margin-bottom: 0.2em;">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <small style="color: #6b7340; display: block; margin-bottom: 0.5em;">{{ post.date | date: "%B %d, %Y" }}</small>
    <p style="font-style: italic; color: #3a3a3a;">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ post.url | relative_url }}" style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Read Entry ◈</a>
  </div>
{% endfor %}
