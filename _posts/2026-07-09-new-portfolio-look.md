---
title: "New Portfolio Look"
tags: [Tailwind CSS, Claude Code, Jekyll, Redesign]
published: false
---

## From Bootstrap to Tailwind: A New Look

This site had the same dark theme, built with [Bootstrap](https://getbootstrap.com/){: target="blank"}, for a couple of years, so it was time for a refresh.

### Before

Here is how it used to look, back when it was still running on Bootstrap:

<div class="grid gap-4 sm:grid-cols-3">
  <a data-fslightbox="before" href="/assets/images/posts/2026-07-09/old-home.png">
    <img src="/assets/images/posts/2026-07-09/old-home.png" alt="Old homepage" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
  <a data-fslightbox="before" href="/assets/images/posts/2026-07-09/old-about.png">
    <img src="/assets/images/posts/2026-07-09/old-about.png" alt="Old about page" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
  <a data-fslightbox="before" href="/assets/images/posts/2026-07-09/old-work.png">
    <img src="/assets/images/posts/2026-07-09/old-work.png" alt="Old work page" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
</div>

The old theme was fine, but it leaned heavily on Bootstrap components I never really customized, and the dark layout felt a bit heavy for a personal site.

For the rebuild I dropped Bootstrap in favor of [Tailwind CSS](https://tailwindcss.com/){: target="blank"}. Instead of overriding pre-built components, everything is now composed with utility classes directly in the Jekyll includes and layouts, which made it much easier to land on a lighter, cleaner look and keep spacing and typography consistent across pages.

The other big difference is how I built it: this redesign was done together with [Claude Code](https://claude.com/product/claude-code){: target="blank"}, working through the layouts, includes, and Tailwind config directly in the terminal. It made refactoring the old Bootstrap markup into Tailwind, cleaning up duplicated includes, and iterating on small design details a lot faster than doing it alone.

### After

And here is the new look:

<div class="grid gap-4 sm:grid-cols-3">
  <a data-fslightbox="after" href="/assets/images/posts/2026-07-09/new-home.png">
    <img src="/assets/images/posts/2026-07-09/new-home.png" alt="New homepage" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
  <a data-fslightbox="after" href="/assets/images/posts/2026-07-09/new-about.png">
    <img src="/assets/images/posts/2026-07-09/new-about.png" alt="New about page" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
  <a data-fslightbox="after" href="/assets/images/posts/2026-07-09/new-work.png">
    <img src="/assets/images/posts/2026-07-09/new-work.png" alt="New work page" class="rounded-lg border border-stone-200 shadow cursor-pointer">
  </a>
</div>

Still a work in progress, but happy with the direction. Long live open-source! ❤️

