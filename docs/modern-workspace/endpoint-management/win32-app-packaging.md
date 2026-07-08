---
title: Win32 App Packaging
description: Intune Win32 app packaging, detection rules, assignments, and deployment validation.
sidebar_position: 4
certification_mapped: [MD-102]
difficulty_level: Associate
---

# Win32 App Packaging

## Packaging Flow

```powershell
IntuneWinAppUtil.exe -c .\Source -s setup.exe -o .\Output
```

## Evidence

- Install command.
- Detection rule.
- Assignment ring.
- Device install status.
- Client log validation.
