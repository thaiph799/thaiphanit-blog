---
title: PowerShell and Microsoft Graph API
description: Microsoft 365, Entra ID, and Intune automation with PowerShell and Graph API.
sidebar_position: 2
certification_mapped: [MS-102, MD-102]
difficulty_level: Associate
---

# PowerShell and Microsoft Graph API

## Example

```powershell
# highlight-next-line
Connect-MgGraph -Scopes "DeviceManagementManagedDevices.Read.All"
Get-MgDeviceManagementManagedDevice
```
