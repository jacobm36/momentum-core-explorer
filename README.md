# Momentum Core Architecture Explorer

[Open the interactive explorer](https://jacobm36.github.io/momentum-core-explorer/)

**Your games. Your Linux arcade. Less setup. More PLAY.**

Updated copy of the exported version 2 application. Existing structure and interactions are retained, with targeted content updates reviewed on 26 October 2026. `dist/` contains the deployable source and all required assets. There is no build step, package installation, backend, API key or account requirement.

## This repository's deployment

This is the separate public educational-site repository. Launcher and package
development remain in their existing repositories.

`main` retains the complete source, documentation and checks. GitHub Pages serves
the contents of `dist/` from the root of the `gh-pages` branch. To publish an
update after reviewing changes and running the checks below:

```sh
git push origin main
git subtree push --prefix dist origin gh-pages
```

Do not force-push or edit published game packages as part of a website update.
The explorer is a dated educational simulation, not the launcher or a live store.

## Preview locally

From this extracted folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open http://localhost:8000 in a modern browser. Use HTTP rather than double-clicking index.html: JavaScript modules need appropriate serving, and the SHA-256 lab uses Web Crypto, available on localhost and HTTPS.

## Publish on GitHub Pages

The simplest option is a separate repository or a dedicated website branch:

1. Copy the **contents** of `dist/` to the repository or website branch root. Include `.nojekyll`; ensure `index.html` is at the root, not inside another folder.
2. Commit and push these files.
3. In GitHub repository **Settings → Pages → Build and deployment**, choose **Deploy from a branch**.
4. Select your website branch and **/(root)**, then Save.
5. Wait for deployment, then open the URL shown by GitHub Pages.

Alternatively, copy the contents of `dist/` to a repository's `docs/` folder and select that folder as the publishing source. In the existing launcher repository, a dedicated website branch avoids mixing the explorer with technical documentation. Do not overwrite existing files without reviewing them.

All application imports and stylesheet references are relative. It works at a project URL such as `https://USERNAME.github.io/REPOSITORY/` without a base-path edit. Hash navigation does not require server rewrite rules. No npm, bundler, GitHub Actions custom workflow or build command is needed.

GitHub Pages is generally public, including when its source repository is private; repository plan and organization policy affect availability. Publishing this copy is separate from the existing private hosted explorer. This export does not publish or change access to either site.

Official hosting instructions (checked 23 October 2026):
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Optional source checks

With a modern Node.js release that provides global Web Crypto (Node 22+ is suitable), run from this folder:

```sh
node check.mjs
node check-ui.mjs
```

Optionally set `MOMENTUM_CATALOG` to a local distribution catalog path when
running `check.mjs` to verify every pinned catalog field against that file.

These checks validate graph/model data, navigation wiring, filters, package tabs, engine scenarios and SHA-256 behavior. The UI test uses a mock DOM; it is not browser visual testing.

The checks have been updated for the refreshed snapshot and corrected engine
decisions. When previewing, also test the map, all eight sections, walkthrough
controls, store filters and hash lab at desktop and narrow widths.

The revised export passed both checks and real Chromium interaction checks.
All eight sections were checked at 1440, 768 and 390 pixel widths without
page-level horizontal overflow. Map inspection, store filtering, engine
decisions, walkthrough controls and the SHA-256 lab were exercised. No package
installations or game launches were repeated for this documentation work.

## Source and assets

- `dist/index.html`: existing page and controls.
- `dist/style.css`: original vanilla CSS and responsive styling.
- `dist/app.mjs`: diagram, navigation, walkthroughs and other interactions.
- `dist/model.mjs`: components, relationships, flows, privacy data and hashing.
- `dist/review.mjs`: pinned project review and eleven-game catalog snapshot.
- `dist/decisions.mjs`: illustrative runtime decision model.
- `dist/.nojekyll`: GitHub Pages static-serving marker added for this export.

No external fonts or remote asset downloads are required. Official Momentum logo images are bundled locally in `dist/assets/`; diagrams remain generated SVG. `dist/branding.css` aligns the palette with the launcher. Catalog artwork/release URLs are descriptive metadata; the current app does not fetch them. Project source links pin the reviewed revisions and label private repository access requirements. Hosting this explorer does not grant that access.

The catalog and technical narrative are a dated snapshot, not a live connection to the package store. All install, repair and launch journeys are simulations.

## Content review

Reviewed against the pinned launcher, package and distribution revisions shown
in the application's source section on 26 October 2026. The eleven catalog entries
retain their exact versions, URLs, sizes and hashes. This documentation update
does not repeat package installation or game acceptance tests.

Time Crisis II's existing-MAME lifecycle evidence, synthetic acquisition checks
and reported successful gameplay remain distinct claims. Engine decisions
illustrate new installations; existing receipts never silently migrate.
Flycast does not use the alternative-scope discovery wired for UZDoom and MAME.
Shortcut discovery includes user/system menus and Flatpak/Snap exports.
Public readers can follow launcher source/release and distribution links;
private package-authoring revisions require access. The app itself adds no analytics, but its hosting service may log requests
or add authentication/cookies.

The snapshot now includes Duke 0.2.0, the owner's revised description, bundled
EDuke32/source delivery and scoped acceptance, plus the current arcade revisions.
Signed compatibility refresh is described as newer source work, not a feature
of the published preview.2 ZIP. Existing packages need no rebuild. New engine
behavior and title-specific adapter restrictions may still require launcher code.
The Explorer fetches no support records and contains no signing secrets.
For this refresh, both Node checks passed, including an exact catalog comparison.
Browser checks exercised all eight sections at 1440 and 390 pixels without
page-level horizontal overflow, Duke selection through the store filter, and
the source-versus-release explanation.

## Export integrity and privacy

`EXPORT-NOTES.md` records provenance and verification. `SHA256SUMS` covers every exported file except itself. No Git history, Git remote configuration, hosting identity/configuration, credentials, cookies, access lists, account email, local runtime state or platform deployment files are included. Original project repository links and generic example paths are retained as educational content.

No license was present in the recovered source. This export adds no license grant and makes no new rights claim over project or referenced game material.
