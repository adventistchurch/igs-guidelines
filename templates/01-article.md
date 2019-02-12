---
layout: page
group: templates
permalink: /templates/article
section: Documentation

title: Article
description:

---

[View on Pattern Lab](https://alps.adventist.io/v3/?p=templates-article)

This template contains the following:

* [Header](/organisms/global/header)
* [Page Header Feature](/organisms/sections/page-header-feature)
* [Footer](/organisms/global/footer)
* [Sabbath](/organisms/asides/sabbath)

View example pages here:

* [Article](https://alps.adventist.io/v3/?p=pages-article)
* [Article No Sabbath](https://alps.adventist.io/v3/?p=pages-article-no-sabbath)
* [Article Rtl](https://alps.adventist.io/v3/?p=pages-article-rtl)
* [Article Simple](https://alps.adventist.io/v3/?p=pages-article-simple)
* [Longform](https://alps.adventist.io/v3/?p=pages-longform)

{% capture markupOnlyPath %}patterns/03-templates-article/03-templates-article.twig{% endcapture %}

<div class="pattern-code">
  <button class="c-btn pattern-code-copy-btn" data-clipboard-target="#pattern-code-0">Copy</button>

  <pre class="highlight pattern-code-block line-numbers"><code class="language-twig" id="pattern-code-0">{% highlight liquid %}{% include {{ markupOnlyPath }} %}{% endhighlight %}</code></pre>
</div>
