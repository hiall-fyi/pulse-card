# Credits

Community members who shaped Pulse Card through bug reports, feature requests, testing, and feedback.

---

### v1.2.1

- **[@driagi](https://github.com/driagi)** — Ran the targeted console debug that revealed `unique_id: undefined` across all entities, uncovering that HA removed `unique_id` from the frontend registry in 2023.3. This led to the full discovery rewrite using device grouping ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))

### v1.2.0

- **[@driagi](https://github.com/driagi)** — Reported zone icon not rendering, prominent sparkline color bleeding between zones, and tap_action issues in the companion app. Confirmed v2.x entity discovery root cause through persistent testing and screenshots ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))
- **[@dragorex71](https://github.com/dragorex71)** — Reported open_window chip not showing on v1.1.0, helping identify remaining discovery edge cases ([#28](https://github.com/hiall-fyi/pulse-card/issues/28))
- **[@Si-Hill](https://github.com/Si-Hill)** — Shared detailed debug output and Sonoff external sensor details that led to the external sensor auto-detection feature. Provided screenshots of the black cell issue in thermal strips ([#29](https://github.com/hiall-fyi/pulse-card/issues/29))

### v1.1.0

- **[@dragorex71](https://github.com/dragorex71)** — Discovered the i18n entity discovery issue on Italian HA setups, confirmed the root cause was translated entity IDs, and reported the donut chart needing a source config ([#28](https://github.com/hiall-fyi/pulse-card/issues/28))
- **[@driagi](https://github.com/driagi)** — Reported battery and mold_risk chips not showing, which led to the device-level entity discovery fix ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))
- **[@hapklaar](https://github.com/hapklaar)** — Reported the CPU spike on multi-card dashboards that drove the performance audit ([#27](https://github.com/hiall-fyi/pulse-card/issues/27))
- **[@Si-Hill](https://github.com/Si-Hill)** — Reported history data not loading on page refresh and provided screenshots showing the blank sections ([#29](https://github.com/hiall-fyi/pulse-card/issues/29))

### v1.0.0

- **[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — Showcased creative solar tracking dashboard, suggested the color picker idea, and provided the bar_width workaround for min/max issues ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))
- **[@Si-Hill](https://github.com/Si-Hill)** — Found the card-level min/max bug where bar limits weren't being applied, tested the fix, and provided early feedback on the Climate Card including live update and history data issues ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))

### v0.5.0

- **[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — Requested slider mode and step buttons for interactive temperature control ([#2](https://github.com/hiall-fyi/pulse-card/issues/2), [Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19))

### v0.3.x

- **[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — Reported HACS download not working due to missing release assets, requested color picker and sparkline editor settings, and provided ongoing feedback on bar width and sparkline rendering ([#8](https://github.com/hiall-fyi/pulse-card/issues/8), [#21](https://github.com/hiall-fyi/pulse-card/issues/21), [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20))

### v0.2.x

- **[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — Reported sparkline overflow past the bar boundary ([#18](https://github.com/hiall-fyi/pulse-card/issues/18))

### v0.1.x

- **[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — Extensive early feedback including bar width limit, entity reorder in editor, color picker, and gap setting requests ([#2](https://github.com/hiall-fyi/pulse-card/issues/2), [#8](https://github.com/hiall-fyi/pulse-card/issues/8), [#12](https://github.com/hiall-fyi/pulse-card/issues/12))

---

## 🌟 Special Thanks

**[@ChrisMarriott38](https://github.com/ChrisMarriott38)** — the project's most active contributor from day one. Feature requests, bug reports, creative use cases, and consistent feedback across every major release.

---

**Made with ❤️ by the Pulse Card community**
