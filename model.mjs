export const nodes = [
  {
    "id": "catalog",
    "label": "Public catalog",
    "kind": "REMOTE",
    "sub": "11 store entries / pinned snapshot",
    "x": 64,
    "y": 56,
    "scope": "Public distribution",
    "description": "The public catalog groups curated packages by experience and identifies their exact immutable release bytes.",
    "items": [
      "OpenBOR, Mouse Arcade, Boomer Shooters",
      "Optional pillar and runtime badges",
      "Platform, ZIP hash, size and package digest"
    ],
    "detail": "catalog.py validates catalog_version 1. The store is a curated setup channel, not a limit on what the library can launch."
  },
  {
    "id": "release",
    "label": "Release package",
    "kind": "ZIP",
    "sub": "Fixed, versioned bytes",
    "x": 314,
    "y": 56,
    "scope": "Public distribution",
    "description": "The selected fixed ZIP supplies a versioned install recipe, support and approved assets. Package content policy is title-specific.",
    "items": [
      "Manifest, scripts, tests and checksums",
      "Bundled mod or approved source acquisition",
      "Attribution and retained launch support"
    ],
    "detail": "Enyo 0.3.0 obtains its mod from the publisher. Commercial base files, ROMs and BIOS remain user-supplied. Changed released bytes require a new version."
  },
  {
    "id": "ui",
    "label": "Arcade interface",
    "kind": "UI",
    "sub": "Vanilla HTML / CSS / JS",
    "x": 64,
    "y": 220,
    "scope": "Local browser window",
    "description": "One library accepts imported installed games, manual commands and supported package installations.",
    "items": [
      "Reviewed shortcut import or manual entry",
      "Store groups and runtime badges",
      "Controller navigation, artwork and previews"
    ],
    "detail": "Installed-game import scans user, system, Flatpak and Snap application menus with XDG desktop-entry precedence. Emulators are excluded by default unless explicitly included. It does not enumerate an entire Steam library or execute discovered commands."
  },
  {
    "id": "backend",
    "label": "Python backend",
    "kind": "API",
    "sub": "127.0.0.1 / stdlib",
    "x": 314,
    "y": 220,
    "scope": "Local machine",
    "description": "Python standard-library modules serve the local UI, coordinate setup and supervise launched game processes.",
    "items": [
      "Local API and session authorization",
      "Input and approval orchestration",
      "Process launch and X11 kiosk handoff"
    ],
    "detail": "server.py starts child processes. window_handoff.py releases only the identified Momentum kiosk fullscreen state and restores it after the game. X11 requires wmctrl and xprop."
  },
  {
    "id": "intake",
    "label": "Package intake",
    "kind": "VERIFY",
    "sub": "Identity before execution",
    "x": 64,
    "y": 380,
    "scope": "Local machine",
    "description": "Intake validates package structure and immutable content. Compatibility gates then bind exact package identity to supported runtime evidence.",
    "items": [
      "ZIP and contract checks without script execution",
      "Immutable imported package snapshots",
      "Exact package/build evidence"
    ],
    "detail": "packages.py validates intake. compatibility.py matches id + version + digest. Hash recognition alone does not certify graphics, input or gameplay."
  },
  {
    "id": "runner",
    "label": "Lifecycle runner",
    "kind": "JOB",
    "sub": "Approved install operations",
    "x": 314,
    "y": 380,
    "scope": "Local machine",
    "description": "The runner supervises preflight/apply, binds approval to the saved plan and retains mutation evidence for recovery.",
    "items": [
      "Separate software/source and game approvals",
      "NDJSON progress and durable mutation intents",
      "Runner-owned receipt and library commit"
    ],
    "detail": "jobs.py supervises operations. installs.py validates results/resources. mcl_intent.py journals before mutation. Packages propose resources; they do not write authoritative receipts."
  },
  {
    "id": "state",
    "label": "Local state",
    "kind": "FILES",
    "sub": "Library, logs and progress",
    "x": 564,
    "y": 540,
    "scope": "Local machine",
    "description": "Source content, managed installation files, player state and shared software have different ownership rules.",
    "items": [
      "Local library, stats and media",
      "Settings, saves and absent-only seeds",
      "Preserved originals and shared engines"
    ],
    "detail": "New installs default to ~/Games/<package-id>. Existing receipts normally retain their path, except explicit package-defined migrations such as Virtua Cop 2 0.1.2."
  },
  {
    "id": "engine",
    "label": "Game runtime",
    "kind": "PLAY",
    "sub": "Launch script + selected engine",
    "x": 564,
    "y": 380,
    "scope": "Local machine",
    "description": "The installed wrapper supplies the verified runtime, game content and title-specific display/input profile.",
    "items": [
      "Supported existing runtime stays in place",
      "Native, AppImage or approved Flatpak binding",
      "Game profiles and exact mod load order"
    ],
    "detail": "Reuse takes precedence. OpenBOR uses verified extracted native files. Managed Flatpak games use a hash-bound retained helper and per-game state. No automatic engine updates."
  },
  {
    "id": "workshop",
    "label": "Package workshop",
    "kind": "SOURCE",
    "sub": "Private development",
    "x": 881,
    "y": 220,
    "scope": "Private authoring",
    "description": "Private package authoring captures a working game contract and maintains versioned lifecycle code, profiles and legal notices.",
    "items": [
      "Package Contract v1 and authoring baseline",
      "Actual runtime and game-data requirements",
      "Best-effort attribution with known gaps"
    ],
    "detail": "The installer standard is design guidance. Explicit package/version behavior can differ, such as publisher downloads. Attribution does not itself establish redistribution permission."
  },
  {
    "id": "build",
    "label": "Build & evidence",
    "kind": "TEST",
    "sub": "Validate, test, publish",
    "x": 881,
    "y": 420,
    "scope": "Private authoring",
    "description": "Package builds, exact evidence registration and release checks coordinate what the current launcher can safely offer.",
    "items": [
      "Versioned ZIP, checksum and intake checks",
      "Exact launcher evidence and helper bindings",
      "Anonymous download verification before promotion"
    ],
    "detail": "Public preview.2 includes Duke support. Newer source adds signed support-data refresh and offline verified caching, but that code is not in the preview.2 ZIP. Compatible future launchers can recognize new exact package evidence without rebuilding game ZIPs; new engine behavior may still require launcher code. Runtime-only delivery excludes developer tools."
  },
  {
    "id": "source",
    "label": "Upstream sources",
    "kind": "ACQUIRE",
    "sub": "Official engines / game sources",
    "x": 564,
    "y": 56,
    "scope": "External distribution",
    "description": "Some setup paths obtain exact software or game content from approved upstream sources.",
    "items": [
      "Pinned URL and content identity",
      "Separate acquisition approval",
      "Verified caches may be reused"
    ],
    "detail": "Enyo uses publisher source acquisition. Marvel can fetch a pinned ZVitor archive and extract only the matching PAK. Ultimate Double Dragon 3 requires its exact local PAK."
  },
  {
    "id": "resolver",
    "label": "Runtime selection",
    "kind": "RESOLVE",
    "sub": "Reuse / prepare / isolated fallback",
    "x": 564,
    "y": 220,
    "scope": "Local machine",
    "description": "Resolver adapters inspect exact builds and prepare compatible software only within the approved scope.",
    "items": [
      "Reuse supported existing copies in place",
      "Prepare missing software after approval",
      "Bounded isolated fallback for selected packages"
    ],
    "detail": "engines.py selects evidence-backed candidates. HOD2, Brutal Doom, Brutal Doom 64 and Time Crisis II register managed Flatpak fallback. Alternative-scope discovery is currently wired for UZDoom and MAME, not Flycast. An untested build is not labeled broken."
  },
  {
    "id": "import",
    "label": "Installed shortcuts",
    "kind": "IMPORT",
    "sub": "Review before adding",
    "x": 64,
    "y": 540,
    "scope": "Local machine",
    "description": "Shortcut import discovers local .desktop game entries and lets you select the ones you trust.",
    "items": [
      "No game execution during scanning",
      "Existing entries and edited commands preserved",
      "Hidden, invalid and terminal-only shortcuts skipped"
    ],
    "detail": "game_import.py checks a source hash again before adding a selection. CLI --update is explicit; the UI never refreshes existing commands automatically."
  },
  {
    "id": "receipts",
    "label": "Receipts & recovery",
    "kind": "OWNERSHIP",
    "sub": "Identity / intents / reconciliation",
    "x": 314,
    "y": 540,
    "scope": "Local machine",
    "description": "Runner-owned records connect exact package identity, approved changes and resource ownership to the installation.",
    "items": [
      "Managed, borrowed, user-state, shared software",
      "Interrupted changes retain journal evidence",
      "Verify, repair and removal preserve user edits"
    ],
    "detail": "Recovery revalidates approval, saved intents and current files. Ambiguity stops mutation. No universal rollback, cleanup or automatic engine migration is promised."
  }
];
export const edges = [["catalog", "release", "fixed release", "network"], ["release", "intake", "validated download", "network"], ["source", "resolver", "approved acquisition", "network"], ["ui", "backend", "local API", "local"], ["backend", "resolver", "runtime plan", "local"], ["backend", "runner", "approved game job", "local"], ["intake", "runner", "checked identity", "local"], ["resolver", "engine", "runtime binding", "local"], ["runner", "engine", "installed profile", "local"], ["runner", "receipts", "validated result", "local"], ["import", "ui", "selected entries", "local"], ["engine", "state", "settings / saves", "local"], ["workshop", "build", "tests", "author"], ["build", "release", "approved release", "author"]];
export const flows = {
  "install": [
    [
      "catalog",
      "Choose a curated setup",
      "Select a supported store title. This pinned catalog snapshot groups eleven entries by pillar and runtime.",
      "catalog.json \u2192 immutable release ZIP"
    ],
    [
      "intake",
      "Validate package identity",
      "Intake checks content without executing package scripts. Exact package/runtime evidence gates installation.",
      "id + version + package digest + supported runtime build"
    ],
    [
      "resolver",
      "Inspect supported software",
      "Reuse an exact supported copy in place. If none is suitable, the permitted preparation path depends on this package.",
      "Host prerequisites need manual setup; no elevation"
    ],
    [
      "resolver",
      "Approve software preparation",
      "Review missing-runtime preparation separately. Selected packages can offer a tested isolated fallback while preserving unsupported existing software.",
      "Software plan approval is distinct from game plan approval"
    ],
    [
      "runner",
      "Review the game plan",
      "Supply required files and review exact destinations, actions and ownership. Approval binds to saved plan bytes and inputs.",
      "preflight \u2192 approved_plan_digest \u2192 apply"
    ],
    [
      "receipts",
      "Apply and commit ownership",
      "The package journals before mutation. The runner validates results, commits a receipt and associates the library entry.",
      "NDJSON events + mutation intents + receipt + library merge"
    ],
    [
      "ui",
      "Play and confirm your setup",
      "Check actual display, input, audio and saved progress. Installer success alone does not certify gameplay.",
      "New installation readiness: setup required"
    ]
  ],
  "play": [
    [
      "ui",
      "Choose any library entry",
      "Imported shortcuts, manual commands and package-managed games share one front door.",
      "No package is required for a manual game entry"
    ],
    [
      "backend",
      "Resolve the launch command",
      "The local backend reads the saved command and starts a child process.",
      "127.0.0.1 API \u2192 games.json command"
    ],
    [
      "backend",
      "Release the kiosk fullscreen state",
      "On supported X11 kiosk setups, release only Momentum\u2019s identified window so the game can take fullscreen.",
      "wmctrl + xprop; windowed mode avoids this handoff"
    ],
    [
      "engine",
      "Apply the retained launch profile",
      "For a package-managed entry, the retained wrapper applies its title-specific file/runtime checks and arguments. Manual commands and imported shortcuts do not automatically gain package validation.",
      "Managed helper or native runtime \u2192 game content"
    ],
    [
      "state",
      "Record activity and return",
      "Local logs/statistics record activity. Restore the Momentum kiosk state after game exit.",
      "Local play history; no cloud analytics requirement"
    ]
  ],
  "repair": [
    [
      "receipts",
      "Verify the installation",
      "Read-only verification compares installed resources with retained ownership and original identities.",
      "Verification does not repair or silently adopt files"
    ],
    [
      "runner",
      "Repair missing owned files",
      "Restore missing managed resources from original bytes. Preserve and report changed files.",
      "Explicit plan; no silent overwrite of edits"
    ],
    [
      "receipts",
      "Remove unchanged owned resources",
      "Game-only uninstall retains original data, player state, shared engines and support as defined by the package.",
      "An OpenBOR managed-file edit can block removal for reconciliation"
    ],
    [
      "state",
      "Reinstall with retained state",
      "Retained settings and saves can keep the game folder present. Reinstall must respect those resources.",
      "Absent-only seed policy; no per-launch configuration reset"
    ],
    [
      "receipts",
      "Reconcile interrupted work",
      "Review current files, saved approval and mutation evidence before committing or retrying.",
      "No universal rollback or automatic shared-engine cleanup"
    ]
  ]
};
export const privacy = [
  [
    "Library & history",
    "games.json and playstats.json hold your personal library and local play statistics.",
    "local",
    "Local files"
  ],
  [
    "Settings & saves",
    "Game profiles keep state separate from source content. Uninstall retains user state.",
    "local",
    "Local state"
  ],
  [
    "Logs & job records",
    "Troubleshooting and lifecycle results stay local. These files can still contain personal paths.",
    "local",
    "Local support"
  ],
  [
    "Catalog & releases",
    "Fetching the catalog and package ZIPs contacts public hosting. Providers can see ordinary requests.",
    "network",
    "External request"
  ],
  [
    "Software & mod source",
    "Separately approved preparation may download exact engines, isolated Flatpak dependencies or title-specific source archives.",
    "network",
    "Explicit download"
  ],
  [
    "Artwork & trailers",
    "Steam details, SteamGridDB artwork and requested media fetching contact external services. SteamGridDB requires a personal API key stored outside the library with owner-only permissions. Local media can also be supplied.",
    "network",
    "Optional request"
  ],
  [
    "Package identity",
    "Exact size, hashes and digest bind the selected release bytes. They do not establish that code is safe.",
    "trust",
    "Identity check"
  ],
  [
    "Execution approval",
    "Scripts run with your user permissions, without a sandbox. No automatic elevation or upgrades.",
    "trust",
    "User authority"
  ],
  [
    "Shared runtime profiles",
    "Managed Flatpak slots share engine files while each managed game keeps separate settings/saves. Isolation here is reproducibility, not a general package sandbox.",
    "trust",
    "Scoped state"
  ]
];
export async function sha256(text){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(text));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("");}
