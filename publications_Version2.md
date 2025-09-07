---
layout: page
title: Publications
permalink: /publications/
---

# Publications

<ul>
{% for pub in site.data.publications %}
  <li>
    <strong>{{ pub.authors }}</strong> ({{ pub.year }}). <em>{{ pub.title }}</em>. {{ pub.journal }}.
    {% if pub.link %}<a href="{{ pub.link }}" target="_blank">[PDF]</a>{% endif %}
  </li>
{% endfor %}
</ul>