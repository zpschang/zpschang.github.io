# Multilingual Setup

This website now supports both English and Chinese languages.

## Files Structure

- `_pages/about.md` - English homepage (permalink: `/`)
- `_pages/about_cn.md` - Chinese homepage (permalink: `/cn/`)

## Language Switching

The language switcher is integrated into the navigation bar and appears as "EN | 中文" links.

## How it Works

1. Each page has a `lang` metadata field (`en` or `cn`)
2. The header includes a language switcher that highlights the current language
3. CSS styling provides visual feedback for the active language
4. The switcher uses relative URLs to navigate between language versions

## Adding More Languages

To add more languages:

1. Create a new page file (e.g., `about_fr.md` for French)
2. Set the `lang` field in the front matter
3. Update the language switcher in `_includes/header.html`
4. Add the new language to the `languages` array in `_config.yml`
5. Add appropriate CSS styling if needed

## Styling

Language switcher styles are defined in `_sass/_base.scss` under `.language-switcher-nav`.
