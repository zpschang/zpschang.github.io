# Website

Source of <https://zpschang.github.io>, built with Jekyll ([al-folio](https://github.com/alshedivat/al-folio) theme).
Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch.

## Where the content lives

| What | File |
| --- | --- |
| English homepage text (About Me) and header | `_pages/about.md` |
| Chinese homepage text (`/cn/`) and header | `_pages/about_cn.md` |
| Featured Work cards (both languages) | `_data/featured.yml`, images in `assets/img/projects/` |
| News (both languages) | `_data/news.yml` |
| Publications (homepage "Selected Publications" = entries with `selected={true}`) | `_bibliography/papers.bib` |
| Venue badge colors | `_data/venues.yml` |
| UI labels for the two languages (section titles, footer) | `_data/i18n.yml` |
| Profile photo | `assets/img/prof_pic.jpg` |
| Site-specific styles | `_sass/_custom.scss` |

When adding news or a project, fill in both the `en` and `zh` fields so the two homepages stay in sync.

## Blog

Blog posts go in `_posts/` (file name `YYYY-MM-DD-title.md`). `hidden: true` only removes a post from the blog list;
the page is still built and reachable by URL. Use `published: false` to keep a draft out of the site entirely.
The Blog page is currently hidden from the navbar (`nav: false` in `_pages/blog.md`); set it back to `true` once there are posts.

## Local preview

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
