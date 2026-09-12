# hoet-eyewear-mirror

Branded landing page for the Hoet virtual eyewear try-on ("mirror").

It is a static page: a black header with the white Hoet logo, and a full-height
`<iframe>` embedding the [Fittingbox](https://www.fittingbox.com/) virtual try-on at
`https://hoet.owiz.fittingbox.com` (the iframe requests camera access to let visitors try
frames on live). The iframe is not loaded straight away: `mirror.js` sets its `src` after
the page's `load` event, so the header paints before the try-on app occupies the main
thread. Without JavaScript a `<noscript>` iframe loads it immediately.

Served under its own domain **hoet-eyewear-mirror.com** so the Fittingbox try-on runs
behind Hoet branding.

## Files
- `index.html`: the wrapper page (header, iframe, inline styling, Open Graph tags, canonical)
- `mirror.js`: loads the iframe after the page has finished loading. It is a separate file because the Content-Security-Policy in `_headers` refuses inline scripts.
- `logo-white.webp` and `logo-white.png`: the white Hoet logo in the header (webp first, png as fallback)
- `share.png`: the 1200x630 image shown when the link is shared
- `favicon.ico`
- `_headers`: Netlify response headers. Cache-Control for the images, and the Content-Security-Policy, Permissions-Policy (camera and microphone only for Fittingbox), X-Content-Type-Options and Referrer-Policy for the page. The comments in the file explain each rule.
- `robots.txt` and `sitemap.xml`: one public page, sitemap listed in robots.txt
- `elixir.json`: declares the production environment for Elixir (see below)
- `.github/workflows/evidence.yml`: CI, see below

## Run locally
There is no build step and no package manager. Open `index.html` in a browser, or serve the
folder with any static file server. Note that `_headers` is only applied by Netlify, so the
Content-Security-Policy and Permissions-Policy are not enforced locally.

## Tests
There are no tests in this repository.

## Deploy
Fully static, hosted on Netlify. Deploy the whole folder (the iframe content is served by
Fittingbox). The security and cache headers live in `_headers` and only take effect on a
host that reads that file. The `.netlify/` folder of the Netlify CLI is local state and is
ignored by git.

## CI
`.github/workflows/evidence.yml` runs on pull requests to `main` whose branch starts with
`elixir/`. It runs `abovebeyond-ai/control-verify-action@v1` in `pull` mode: it checks the
signed Proof-of-Control record in the footer of a pull request opened by one of Elixir's
hands against the DID log at abovebeyond.ai and the public evidence mirror. It needs no
secret and does not run for pull requests opened by people.

## Elixir
`elixir.json` declares one environment, `production` at `https://hoet-eyewear-mirror.com`.
Elixir measures that site from the outside. Being a static page, the site has no `/up`,
no `/.well-known/build.json` and no `/api/elixir`.
