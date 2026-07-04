# hoet-eyewear-mirror

Branded landing page for the Hoet virtual eyewear try-on ("mirror").

It is a single static `index.html`: a black header with the white Hoet logo, and a
full-height `<iframe>` embedding the [Fittingbox](https://www.fittingbox.com/) virtual
try-on at `https://hoet.owiz.fittingbox.com` (the iframe requests camera access to let
visitors try frames on live).

Served under its own domain **hoet-eyewear-mirror.com** so the Fittingbox try-on runs
behind Hoet branding.

## Files
- `index.html` — the wrapper page (header + iframe + inline styling)
- `logo-white.png` — the white Hoet logo in the header
- `favicon.ico`

## Deploy
Fully static — host the three files anywhere (the iframe content is served by Fittingbox).
