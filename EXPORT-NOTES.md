# Export verification

- Export date: 23 October 2026.
- Recovered the existing version 2 source, rather than recreating the application.
- Source commit: `0577b0bf156dab443a6b1354fe2dfdd25f65c2f0`, matching the saved version 2 source record.
- The original ZIP is preserved unchanged in Downloads. This working copy now
  contains targeted content and branding revisions, not a reconstruction.
- Refreshed the pinned catalog to ten entries from distribution commit
  `0d403272ccb66221c792acb86a4e381d3dd15f4c`, including Time Crisis II.
- Corrected application-menu discovery, Flycast alternative-discovery limits,
  isolated MAME preparation, package-only launch checks and hosting privacy scope.
- Added the official local Momentum logos and launcher color palette while
  retaining the existing diagram, navigation, package lab and walkthroughs.
- Updated checks cover the new catalog count and corrected simulator decisions.
  Both checks passed. Separate Chromium checks exercised the interactive sections,
  hash lab and corrected simulator; all eight sections were checked at 1440,
  768 and 390 pixel widths without page-level horizontal overflow.
- Corrected fit-map sizing after layout changes and prevented engine selectors
  from overflowing narrow layouts.
- All required logos, modules and CSS are bundled; no CDN or font dependency
  was added.
- Reviewed exported text for credentials, account IDs, account email, private local paths and platform configuration. None are included. GitHub project attribution/source URLs are retained.
- Hosted application and sharing settings were not modified. No remote GitHub
  repository was modified or published.

To verify after extraction on Linux, run `sha256sum -c SHA256SUMS` from this folder.
