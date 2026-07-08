---
title: "New Portfolio Look"
tags: [Tailwind CSS, Claude Code, Jekyll, Redesign]
published: true
---

## From Bootstrap to Tailwind: A New Look

This site had the same dark theme, built with Bootstrap, for a couple of years, so it was time for a refresh.


Here is how it used to look, back when it was still running on Bootstrap:

<div class="grid gap-4 sm:grid-cols-3" markdown="1">
![Old homepage](/assets/src/images/posts/2026-07-09/old-homepage.png){: class="rounded-lg border border-stone-200 shadow"}

![Old about page](/assets/src/images/posts/2026-07-09/old-aboutpage.png){: class="rounded-lg border border-stone-200 shadow"}

![Old work page](/assets/src/images/posts/2026-07-09/old-workpage.png){: class="rounded-lg border border-stone-200 shadow"}
</div>

The old theme was fine, but it leaned heavily on Bootstrap components I never really customized, and the dark layout felt a bit heavy for a personal site.

For the rebuild I dropped Bootstrap in favor of [Tailwind CSS](https://tailwindcss.com/){: target="blank"}. Instead of overriding pre-built components, everything is now composed with utility classes directly in the Jekyll includes and layouts, which made it much easier to land on a lighter, cleaner look and keep spacing and typography consistent across pages.

The other big difference is how I built it: this redesign was done together with [Claude Code](https://claude.com/product/claude-code){: target="blank"}, working through the layouts, includes, and Tailwind config directly in the terminal. It made refactoring the old Bootstrap markup into Tailwind, cleaning up duplicated includes, and iterating on small design details a lot faster than doing it alone.

And here is the new look:

<div class="grid gap-4 sm:grid-cols-3" markdown="1">
![New homepage](/assets/src/images/posts/2026-07-09/new-homepage.png){: class="rounded-lg border border-stone-200 shadow"}

![New about page](/assets/src/images/posts/2026-07-09/new-aboutpage.png){: class="rounded-lg border border-stone-200 shadow"}

![New work page](/assets/src/images/posts/2026-07-09/new-workpage.png){: class="h-full max-h-96 w-full object-cover object-top rounded-lg border border-stone-200 shadow"}
</div>

Still a work in progress, but happy with the direction. Long live open-source! ❤️

