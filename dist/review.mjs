export const review = {
  "reviewDate": "2026-10-23",
  "pins": {
    "momentum-core-launcher": "22f0cb0d08280b1502dd065d9d710885cf0004b6",
    "momentum-packages": "7a4472094f2820a21167b86a3d51745872b7720a",
    "momentum-distribution": "0d403272ccb66221c792acb86a4e381d3dd15f4c"
  },
  "catalog": [
    {
      "id": "time-crisis-ii",
      "version": "0.1.1",
      "name": "Time Crisis II",
      "description": "Take cover. Reload. Beat the clock. Dive into Namco's explosive arcade shootout, where quick aim and split-second timing keep you in the fight. Mouse-ready action, fullscreen arcade atmosphere and free play - no pockets full of coins required. Bring your own timecrs2.zip for MAME 0.289. Requires an up-to-date Momentum launcher.",
      "pillar": "mouse-arcade",
      "runtime": "MAME 0.289",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/time-crisis-ii.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/time-crisis-ii-0.1.1/time-crisis-ii-0.1.1.zip",
      "sha256": "ee8b984ceca4cdf62f13df06f396ef4b9412cc48b7f0d7abf18e0e7ec2d6c47e",
      "digest": "sha256:836e5a179c9a5547f9d3399578f1d30bb8b8208346b81ade833b73e59f24f6a1",
      "size": 500554,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Your own timecrs2.zip compatible with pinned MAME 0.289; keep zipped.",
      "acceptance": "Owner accepted the package-installed 0.1.0 candidate and public 0.1.1 with unchanged runtime/controls/seed, then reported that Time Crisis launched perfectly on 22 October. Final 0.1.1 existing-MAME lifecycle passed. Missing/incompatible-engine acquisition was synthetic, not real network evidence. No full-speed, campaign or other-machine claim. Public seed includes explicitly approved calibration, scores and bookkeeping."
    },
    {
      "id": "marvel-infinity-war",
      "version": "0.3.0",
      "name": "Marvel Infinity War",
      "description": "ZVitor's Marvel beat 'em up with the tested native OpenBOR 6391 runtime in its own build-specific folder, fullscreen, CRT and controller preset. Download the pinned game directly from ZVitor or supply the matching PAK. Upgrades keep existing settings and progress. Requires an up-to-date Momentum launcher.",
      "pillar": "openbor",
      "runtime": "OpenBOR 6391",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/marvel-infinity-war.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/marvel-infinity-war-0.3.0/marvel-infinity-war-0.3.0.zip",
      "sha256": "db6883ff019833a62f7a549e5794fc01df7f98d77dd526d1ad26a041a8cf8a2f",
      "digest": "sha256:98a1104490cfef6c27ec0c1a19289100d344e190f0b0e73599624035f881329d",
      "size": 41660199,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Pinned author download or matching offline Marvel_Infinity_War.pak",
      "acceptance": "Owner-reported real 0.2.0 → 0.3.0 upgrade and gameplay appearance. Isolated lifecycle checks passed. Full campaign not claimed."
    },
    {
      "id": "ultimate-double-dragon-3",
      "version": "0.1.0",
      "name": "Ultimate Double Dragon 3",
      "description": "The fan-made Ultimate Double Dragon beat 'em up on the tested native OpenBOR 6391 runtime, with the captured fullscreen, shader and controller preset. Bring your own exact UDD_3.0.pak; no download. Requires an up-to-date Momentum launcher.",
      "pillar": "openbor",
      "runtime": "OpenBOR 6391",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/ultimate-double-dragon-3.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/ultimate-double-dragon-3-0.1.0/ultimate-double-dragon-3-0.1.0.zip",
      "sha256": "ab887f099cb5233c9f70893d4f3f3e355e24deeded88144090cd7a898880a07e",
      "digest": "sha256:d728447c7399b784544c7698ee386ce6490a23d7183a95975e9a07d008cb9823",
      "size": 16229614,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Exact UDD_3.0.pak; no game download",
      "acceptance": "Exact-PAK isolated lifecycle passed. Earlier manual 6391 play/settings reported. Stage transitions and full campaign not claimed."
    },
    {
      "id": "star-wars-trilogy-arcade",
      "version": "0.2.1",
      "name": "Star Wars Trilogy Arcade",
      "description": "Stay on target. Fullscreen arcade setup with mouse aim, confirmed on the owner's debug laptop. Bring swtrilgy.zip; stock credits, no free-play preset. Requires an up-to-date Momentum launcher.",
      "pillar": "mouse-arcade",
      "runtime": "Supermodel",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/star-wars-trilogy-arcade.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/star-wars-trilogy-arcade-0.2.1/star-wars-trilogy-arcade-0.2.1.zip",
      "sha256": "f049015943cfd569820d3eebca9e8366efb294ea0a88340f1559e9646ff5caf4",
      "digest": "sha256:3ce37cec1672d8dd96e842c418e7c890bebc89413b07c6d2aeb78eea7b67ac26",
      "size": 251980,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "swtrilgy.zip, kept zipped",
      "acceptance": "Owner debug-laptop acceptance recorded. Stock credits, not a free-play preset. Other hardware not certified."
    },
    {
      "id": "the-house-of-the-dead-2",
      "version": "0.3.0",
      "name": "The House of the Dead 2",
      "description": "Fullscreen mouse-lightgun setup with tested Flycast reuse or separately approved isolated fallback. Bring USA CUE and matching BIN tracks. Existing engines and profiles stay untouched. Requires an up-to-date Momentum launcher.",
      "pillar": "mouse-arcade",
      "runtime": "Flycast",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/the-house-of-the-dead-2.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/the-house-of-the-dead-2-0.3.0/the-house-of-the-dead-2-0.3.0.zip",
      "sha256": "93f3685c02ae8d6e1b14143319f5c392f65b9aaad074ab7a701b3d21aa808ecf",
      "digest": "sha256:5dba413b80ed095c18933b55caf06b86d3c90bac15b7f95a4fa18b999e88d659",
      "size": 173488,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "USA CUE plus all referenced BIN tracks",
      "acceptance": "Owner-reported r6 candidate acceptance plus exact installer/runtime evidence. No universal input or campaign certification."
    },
    {
      "id": "brutal-doom",
      "version": "0.3.0",
      "name": "Brutal Doom",
      "description": "Brutal Doom v21, Brutal Voxel Doom 2.0 Complete and Doom Metal Volume 5 in the tested load order. Bring DOOM2.WAD. Tested UZDoom reuse or separately approved isolated fallback; existing profiles preserved. Requires an up-to-date Momentum launcher.",
      "pillar": "boomer-shooters",
      "runtime": "UZDoom",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/brutal-doom.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/brutal-doom-0.3.0/brutal-doom-0.3.0.zip",
      "sha256": "e15004e1c628cf238cca80815062ce96b284dca0d7a34c7ca7fc7d90f321db73",
      "digest": "sha256:f75343640ff8a23ec1377a854adb7dafc49ff3e6418ec3295dfbeae830d32abe",
      "size": 261844494,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "DOOM2.WAD",
      "acceptance": "Owner-reported r6 candidate acceptance. Engine/content-init and save-state evidence have narrower scopes than complete mod gameplay."
    },
    {
      "id": "brutal-doom-64",
      "version": "0.3.0",
      "name": "Brutal Doom 64",
      "description": "Brutal Doom 64 with gameplay, maps, announcer and music in the tested four-file load order. Bring DOOM2.WAD. Tested UZDoom 5.0.1 reuse or separately approved isolated fallback; existing profiles preserved. Requires an up-to-date Momentum launcher. Gameplay confirmation remains required.",
      "pillar": "boomer-shooters",
      "runtime": "UZDoom",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/brutal-doom-64.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/brutal-doom-64-0.3.0/brutal-doom-64-0.3.0.zip",
      "sha256": "217a429b43569e3e7bdf102739eb3a5686940c25bcbc9fd0a574d962b16ad783",
      "digest": "sha256:c7a5a55a7fc89f8209810b1a257c3ed409e9d4b36785c2721279263903034500",
      "size": 210152703,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "DOOM2.WAD",
      "acceptance": "Synthetic installer/lifecycle and managed-engine checks passed. Graphical gameplay and save/relaunch acceptance not reported for 0.3.0."
    },
    {
      "id": "quake-slave-zero-x",
      "version": "0.3.0",
      "name": "Quake - Slave Zero X: Episode Enyo",
      "description": "Six-level Quake campaign with fullscreen startup. Bring Quake id1/pak0.pak and pak1.pak. Reuse verified Enyo files or approve a direct publisher download; no mod files bundled. Requires an up-to-date Momentum launcher.",
      "pillar": "boomer-shooters",
      "runtime": "vkQuake",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/quake-slave-zero-x.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/quake-slave-zero-x-0.3.0/quake-slave-zero-x-0.3.0.zip",
      "sha256": "dac26911f421fdcc4f8e0966b7a8bfff6127072ee866b84df9735442a5481a97",
      "digest": "sha256:17788bc4fee296ce399bf148b747eea6ee1cb89cb817ca8919ed9e4465defb4f",
      "size": 248765,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Quake id1/pak0.pak and id1/pak1.pak",
      "acceptance": "0.3.0 publisher-download installation checked separately. Prior 0.2.2 gameplay covered matching mod/fullscreen recipe, not a fresh 0.3.0 checklist."
    },
    {
      "id": "l-a-machineguns",
      "version": "0.2.2",
      "name": "L.A. Machineguns",
      "description": "Fullscreen mouse aiming with a clean first-launch calibration seed, confirmed through fresh installation on the owner's debug laptop. Existing NVRAM preserved. Bring Japan lamachin.zip. Requires an up-to-date Momentum launcher.",
      "pillar": "mouse-arcade",
      "runtime": "Supermodel",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/l-a-machineguns.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/l-a-machineguns-0.2.2/l-a-machineguns-0.2.2.zip",
      "sha256": "1155287bf2fc734b49e80d1abf6dff3fce42f90ab90dd32916902a2694d004bb",
      "digest": "sha256:a6d1d7ca1110176d5d966f58938c9e356e4025c7fc3633f35e9b0ea44dadefad",
      "size": 954064,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Japan lamachin.zip, kept zipped",
      "acceptance": "Clean calibration restored mouse aiming on reference and debug laptops. Existing NVRAM remains untouched; other layouts not certified."
    },
    {
      "id": "virtua-cop-2",
      "version": "0.1.2",
      "name": "Virtua Cop 2",
      "description": "Mouse-aimed Virtua Cop 2 setup on Flycast v2.7. The owner reports that it works great on their setup. Bring the Japanese GDI and all 39 matching tracks; 0.1.x migrations retain the old folder and separate state. Requires an up-to-date Momentum launcher.",
      "pillar": "mouse-arcade",
      "runtime": "Flycast v2.7",
      "icon_url": "https://raw.githubusercontent.com/jacobm36/momentum-distribution/main/artwork/virtua-cop-2.png",
      "url": "https://github.com/jacobm36/momentum-distribution/releases/download/virtua-cop-2-0.1.2/virtua-cop-2-0.1.2.zip",
      "sha256": "1c307b3ff5e10755a9b8d4cbb5ae77f15b04d9348133308e8d0c1de5f11db1c2",
      "digest": "sha256:c2c3709af88bff503142e96a55e49eac50c9d9fca51a3f7e8b6be4936c7bb7a9",
      "size": 217534,
      "platform": {
        "os": "ubuntu",
        "releases": [
          "24.04"
        ],
        "architectures": [
          "x86_64"
        ]
      },
      "input": "Japan GDI plus all 39 referenced tracks",
      "acceptance": "Owner gameplay acceptance reported 15 October. Individual checklist and other hardware not reported."
    }
  ],
  "changes": [
    [
      "Three entry paths",
      "Review game shortcuts from user, system, Flatpak and Snap application menus, add a manual command, or browse curated packages. Emulators are excluded by default with an explicit inclusion option. Store specialties do not restrict the library."
    ],
    [
      "Ten current store entries",
      "Time Crisis II 0.1.1 joins OpenBOR, Mouse Arcade and Boomer Shooters, with pinned MAME 0.289. This is a dated snapshot, not a live catalog."
    ],
    [
      "Evidence-backed engine selection",
      "Reuse an exact supported existing runtime in place. Version labels alone do not establish compatibility."
    ],
    [
      "Isolated Flatpak fallback",
      "HOD2, Brutal Doom and Brutal Doom 64 can offer separately approved build-specific slots for new installations when no supported copy is found and an unsupported copy exists. Time Crisis II also supports isolated preparation when MAME is missing. Host prerequisites and exact helper evidence still apply."
    ],
    [
      "Build-specific OpenBOR sharing",
      "Marvel 0.3.0 and Ultimate Double Dragon 3 share the exact verified 6391 runtime. Presets seed only absent settings. A bounded Marvel upgrade preserves progress."
    ],
    [
      "Source acquisition and calibration",
      "Enyo 0.3.0 obtains the mod from its publisher instead of bundling it. L.A. Machineguns now uses ordinary fullscreen and an absent-only calibrated NVRAM seed."
    ],
    [
      "Copy-only migration and recovery",
      "Virtua Cop 2 0.1.2 copies into its package-ID folder without deleting the old folder. Intent journals and receipts support reconciliation instead of a universal rollback promise."
    ],
    [
      "Private launcher, public packages",
      "Current launcher and authoring development remain private. Public release ZIPs and catalog are separate. Runtime-only delivery excludes development tools without discarding compatibility evidence."
    ],
    [
      "Launcher presentation and artwork",
      "Library counts, remembered browsing state, build information, recorded folders and optional SteamGridDB artwork lookup are now available. Steam details and SteamGridDB artwork are separate services; the personal API key is stored outside the library."
    ]
  ],
  "caveats": [
    [
      "Summary counts are not the catalog",
      "The pinned catalog contains ten games. Short launcher/user-guide tables still list fewer titles. This snapshot uses catalog.json for store membership, not those summaries."
    ],
    [
      "Brutal Doom recipe changed",
      "An older user-guide paragraph describes optional --metal and excluding the Complete voxel addon. Current 0.3.0 manifest, wrapper and game page load brutalv21.pk3, brutalVoxelDoom2.0Complete.pk3, then DoomMetalVol5.wad on every launch."
    ],
    [
      "Historical Enyo wording persists",
      "The package repository README still describes bundled Enyo payloads. Current 0.3.0 manifest/game documentation and source preparer use verified existing files or separately approved publisher acquisition."
    ],
    [
      "Gameplay records have different dates",
      "Virtua Cop 2 package prose still describes pending gameplay, but later launcher evidence and the distribution record report owner acceptance on 15 October. It does not certify an unreported checklist."
    ],
    [
      "Release status is not gameplay proof",
      "Some exact evidence records retain private-candidate or not-tested wording while later publication notes report owner approval. Both facts are preserved; publication does not create new gameplay evidence."
    ],
    [
      "Simulation boundaries",
      "These decisions illustrate new installations with exact evidence and host prerequisites satisfied. Existing receipts retain their selected engine; errors, partial slots and migrations require review. MAME acquisition test doubles are not proof of a real download."
    ]
  ]
};
