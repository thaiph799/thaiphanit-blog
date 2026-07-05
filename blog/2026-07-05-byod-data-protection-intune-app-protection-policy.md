---
sidebar_position: 1
title: "CASE-01 — BYOD Data Protection with Intune App Protection Policy"
description: "Production-grade Microsoft Intune Mobile Application Management lab for protecting corporate data in Outlook, Teams, OneDrive, and Microsoft Edge on unmanaged BYOD iOS/Android devices."
tags:
  - Microsoft Intune
  - App Protection Policy
  - MAM
  - BYOD
  - Conditional Access
  - Microsoft 365 Security
  - Identity and Endpoint Security
---

# CASE-01 — BYOD Data Protection with Intune App Protection Policy

## 1. Executive Summary

This lab implements a production-style **Microsoft Intune App Protection Policy** design for a BYOD scenario where users access corporate data from personal iOS/iPadOS and Android devices using Microsoft Outlook, Teams, OneDrive, and Microsoft Edge.

The goal is to protect corporate data **inside managed Microsoft apps** without requiring full device enrollment. This approach is suitable for organizations that support BYOD but still need controls such as app PIN, biometric access, copy/paste restriction, Save As restriction, managed browser enforcement, conditional launch checks, and selective wipe.

:::info Production Positioning
This lab is focused on **MAM without enrollment**. It protects corporate data at the application layer instead of managing the entire personal device through MDM.
:::

---

## 2. Business Problem

Apex Global Holdings allows employees and contractors to access Microsoft 365 services from personal mobile devices. Users commonly open company email, Teams chats, and OneDrive files from unmanaged iOS and Android devices.

The organization faces the following risks:

| Risk | Business Impact |
|---|---|
| Corporate email copied into personal apps | Sensitive information may leave Microsoft 365 control |
| Files saved to unmanaged local storage | Company data may remain on personal devices |
| Links opened in unmanaged browsers | Data may be accessed outside managed app controls |
| Lost or stolen personal devices | Corporate data may remain cached in apps |
| Employee leaves the company | IT needs to remove company data without wiping personal content |
| Full MDM enrollment resisted by users | BYOD privacy concerns reduce adoption |

---

## 3. Why Traditional Controls Are Not Enough

| Traditional Control | Limitation in BYOD Scenario |
|---|---|
| Group Policy | Does not apply to unmanaged iOS/Android devices |
| Manual user guidance | Cannot enforce copy/paste, Save As, or app-level access controls |
| Exchange mobile device access rules | Focus mainly on email access and are not enough for Teams/OneDrive/Office apps |
| Full MDM enrollment | May be inappropriate for personal devices due to privacy concerns |
| Manual offboarding | Does not reliably remove corporate data already cached inside mobile apps |

---

## 4. Microsoft Solution Overview

The production solution uses:

| Microsoft Feature | Product Area | Purpose |
|---|---|---|
| Intune App Protection Policy | Intune / MAM | Protect corporate data inside managed apps |
| Core Microsoft Apps targeting | Intune / App Management | Apply controls to Outlook, Teams, OneDrive, Edge, Office apps |
| Microsoft Entra Conditional Access | Identity / Access Control | Require apps to have an app protection policy before accessing Microsoft 365 |
| App Selective Wipe | Intune / App Protection | Remove only corporate app data from user devices |
| Sign-in logs and Intune reports | Monitoring / Audit | Prove policy enforcement and user impact |

---

## 5. Target Architecture

```text
Personal iOS / Android BYOD Device
        |
        | User signs in to Outlook / Teams / OneDrive / Edge
        v
Microsoft Entra ID Authentication
        |
        | Conditional Access checks:
        | - User is in BYOD MAM production group
        | - Device platform is iOS or Android
        | - Cloud app is Microsoft 365 / Office 365
        | - Client app must support App Protection Policy
        v
Microsoft Intune App Protection Policy
        |
        | Enforces:
        | - App PIN / biometric access
        | - Copy/paste restrictions
        | - Save As restrictions
        | - Managed browser behavior
        | - Conditional launch controls
        | - Selective wipe capability
        v
Corporate Data Protected Inside Managed Microsoft Apps
```

> 📸 **Evidence E00 — Target Architecture Diagram**  
> Add your architecture diagram here after drawing it in draw.io, Mermaid, Visio, or PowerPoint.  
>
> ```md
> ![Evidence E00 - Target Architecture](/img/portfolio/case-01/e00-target-architecture.png)
> ```

---

## 6. Official Microsoft References

Use these references in the portfolio to show that the lab is based on Microsoft documentation.

| Area | Official Reference |
|---|---|
| App Protection Policy overview | [Microsoft Learn — App protection policies overview](https://learn.microsoft.com/en-us/intune/app-management/protection/overview) |
| Create App Protection Policy | [Microsoft Learn — Create and deploy app protection policies](https://learn.microsoft.com/en-us/intune/app-management/protection/create-policy) |
| Data Protection Framework | [Microsoft Learn — Data protection framework using App Protection Policies](https://learn.microsoft.com/en-us/intune/app-management/protection/data-protection-framework) |
| iOS/iPadOS settings | [Microsoft Learn — iOS/iPadOS App Protection Policy settings](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-ios) |
| Android settings | [Microsoft Learn — Android App Protection Policy settings](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-android) |
| Conditional Access grant controls | [Microsoft Learn — Conditional Access grant controls](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant) |
| Require App Protection Policy | [Microsoft Learn — Require approved client apps or app protection policy](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-all-users-approved-app-or-app-protection) |
| Approved client app migration | [Microsoft Learn — Migrate approved client app to application protection policy](https://learn.microsoft.com/en-us/entra/identity/conditional-access/migrate-approved-client-app) |
| Selective wipe | [Microsoft Learn — Wipe only corporate data from Intune-managed apps](https://learn.microsoft.com/en-us/intune/app-management/protection/wipe-corporate-data) |

:::caution Production Note — Approved Client App Grant
For new production Conditional Access policies, use **Require app protection policy**. Do not design new policies that rely only on **Require approved client app**, because Microsoft moved this control to a retirement/read-only path after June 30, 2026.
:::

---

## 7. Lab Scope

### In Scope

| Item | Included |
|---|---|
| BYOD iOS/iPadOS | Yes |
| BYOD Android | Yes |
| MAM without enrollment | Yes |
| Outlook, Teams, OneDrive, Edge | Yes |
| App PIN / biometric | Yes |
| Copy/paste restriction | Yes |
| Save As restriction | Yes |
| Managed browser behavior | Yes |
| Conditional Access integration | Yes |
| Selective wipe | Yes |
| Reporting and evidence | Yes |

### Out of Scope

| Item | Reason |
|---|---|
| Full MDM enrollment | This lab focuses on BYOD/MAM without enrollment |
| Windows MAM | Not the primary target of this case |
| Endpoint compliance policy | Covered in CASE-02 |
| Defender XDR incident response | Covered in CASE-07 |
| Purview Endpoint DLP | Covered in CASE-07 or Purview-specific lab |

---

## 8. Production Design Decisions

| Design Area | Production Decision |
|---|---|
| Policy model | Separate iOS/iPadOS and Android App Protection Policies |
| Assignment model | Assign to user-based Entra security groups |
| Rollout model | Pilot → IT Early Adopters → Department Ring → Production |
| Conditional Access | Start in Report-only, then move to On after validation |
| Browser strategy | Use Microsoft Edge as the managed browser for work links |
| BYOD privacy | Do not require device enrollment for this scenario |
| Data control level | Use enhanced data protection settings aligned with Microsoft framework Level 2 |
| Emergency access | Exclude break-glass accounts from Conditional Access |
| Evidence | Capture portal configuration, device behavior, sign-in logs, and wipe status |

---

## 9. Prerequisites

| Requirement | Details |
|---|---|
| Tenant | Microsoft Intune tenant connected to Microsoft Entra ID |
| Licensing | Intune license for target users; Microsoft Entra ID P1/P2 or Microsoft 365 license including Conditional Access capability |
| Admin role | Intune Administrator for APP; Conditional Access Administrator for CA |
| Test user | `byod.user01@contoso.com` |
| Pilot group | `GRP-INTUNE-BYOD-MAM-PILOT` |
| Production group | `GRP-INTUNE-BYOD-MAM-PROD` |
| Exclusion group | `GRP-CA-EXCLUDE-BREAKGLASS` |
| Test device | Personal iOS/iPadOS or Android device |
| Required apps | Outlook, Teams, OneDrive, Microsoft Edge |
| Android broker requirement | Intune Company Portal installed |
| iOS broker requirement | Microsoft Authenticator installed |

:::info Android Requirement
For Android App Protection Policies, the **Intune Company Portal** app is required on the device to receive App Protection Policies. The device does not need to be fully enrolled for this BYOD MAM lab.
:::

---

## 10. Naming Convention

| Object Type | Name |
|---|---|
| iOS App Protection Policy | `APP-iOS-BYOD-CoreApps-L2-Prod` |
| Android App Protection Policy | `APP-Android-BYOD-CoreApps-L2-Prod` |
| Conditional Access Policy | `CA-iOSAndroid-BYOD-Require-AppProtection-Prod` |
| Pilot Group | `GRP-INTUNE-BYOD-MAM-PILOT` |
| Production Group | `GRP-INTUNE-BYOD-MAM-PROD` |
| Break-glass Exclusion Group | `GRP-CA-EXCLUDE-BREAKGLASS` |
| Evidence Folder | `/static/img/portfolio/case-01/` |

---

## 11. Deployment Rings

| Ring | Target Users | Purpose |
|---|---|---|
| Ring 0 — Lab | Test user only | Validate configuration safely |
| Ring 1 — IT Pilot | IT administrators and support staff | Validate support process |
| Ring 2 — Early Adopters | Small business pilot group | Validate real user impact |
| Ring 3 — Production | All approved BYOD users | Enforce broadly |
| Ring 4 — High-Risk Users | Executives, Finance, Legal, HR | Apply stricter controls if needed |

> 📸 **Evidence E01 — Deployment Ring Groups**  
> Screenshot the Entra groups used for pilot and production assignment.  
>
> ```md
> ![Evidence E01 - Deployment Ring Groups](/img/portfolio/case-01/e01-deployment-ring-groups.png)
> ```

---

# 12. Implementation Workflow

---

## Task 1 — Create Entra ID Security Groups

### Objective

Create user-based groups for policy assignment, production rollout, and Conditional Access exclusions.

### Portal Steps

Go to:

```text
Microsoft Entra admin center
→ Identity
→ Groups
→ All groups
→ New group
```

Create the following groups:

| Group Name | Type | Membership | Purpose |
|---|---|---|---|
| `GRP-INTUNE-BYOD-MAM-PILOT` | Security | Assigned | Pilot users for APP testing |
| `GRP-INTUNE-BYOD-MAM-PROD` | Security | Assigned or Dynamic | Production BYOD users |
| `GRP-CA-EXCLUDE-BREAKGLASS` | Security | Assigned | Emergency account exclusion |

Add the test user to:

```text
GRP-INTUNE-BYOD-MAM-PILOT
```

Add break-glass accounts to:

```text
GRP-CA-EXCLUDE-BREAKGLASS
```

### Validation

| Check | Expected Result |
|---|---|
| Pilot group exists | Yes |
| Test user is member | Yes |
| Break-glass group exists | Yes |
| Emergency account is excluded from CA scope | Yes |

> 📸 **Evidence E02 — Pilot Group Membership**  
> Screenshot the group membership showing the test user.  
>
> ```md
> ![Evidence E02 - Pilot Group Membership](/img/portfolio/case-01/e02-pilot-group-membership.png)
> ```

---

## Task 2 — Create iOS/iPadOS App Protection Policy

### Objective

Create a production-grade iOS/iPadOS App Protection Policy for Core Microsoft Apps.

### Portal Steps

Go to:

```text
Microsoft Intune admin center
→ Apps
→ Protection
→ Create policy
→ iOS/iPadOS
```

### Basics

| Field | Value |
|---|---|
| Name | `APP-iOS-BYOD-CoreApps-L2-Prod` |
| Description | `Production BYOD MAM policy for iOS/iPadOS Core Microsoft Apps. Protects corporate data without device enrollment.` |

> 📸 **Evidence E03 — iOS APP Basics**  
>
> ```md
> ![Evidence E03 - iOS APP Basics](/img/portfolio/case-01/e03-ios-app-basics.png)
> ```

### Apps

| Setting | Value |
|---|---|
| Target policy to | Core Microsoft Apps |

Core Microsoft Apps include apps such as Microsoft Edge, Excel, Office, OneDrive, OneNote, Outlook, PowerPoint, SharePoint, Teams, To Do, and Word.

> 📸 **Evidence E04 — iOS Target Apps**  
>
> ```md
> ![Evidence E04 - iOS Target Apps](/img/portfolio/case-01/e04-ios-target-apps.png)
> ```

### Data Protection Settings — iOS/iPadOS

Use the following production baseline.

| Setting | Production Value | Reason |
|---|---|---|
| Backup Org data to iTunes and iCloud backups | Block | Prevent work data from being backed up to personal cloud backup |
| Send Org data to other apps | Policy managed apps with Open-In/Share filtering | Restrict corporate data transfer to managed apps |
| Receive data from other apps | All apps | Allows productivity while still protecting outgoing corporate data |
| Open data into Org documents | Block or Allow based on business need | Use stricter value for regulated departments |
| Save copies of Org data | Block | Prevent Save As to unmanaged locations |
| Allow user to save copies to selected services | OneDrive for Business, SharePoint | Allow approved corporate storage only |
| Restrict cut, copy, and paste between other apps | Policy managed apps with paste in | Prevent paste into personal apps while allowing paste into work apps |
| Cut and copy character limit for any app | 0 or a low business-approved value | Reduce data leakage through clipboard |
| Restrict web content transfer with other apps | Microsoft Edge | Force work links into managed Edge |
| Org data notifications | Block Org Data | Prevent sensitive content preview on lock screen |
| Sync policy managed app data with native apps | Block unless business requires contacts sync | Reduce data leakage to native apps |

:::tip Production Recommendation
For regulated departments such as Finance, Legal, HR, and Executive users, consider stricter settings for receiving data, clipboard limits, and notifications.
:::

> 📸 **Evidence E05 — iOS Data Protection Settings**  
>
> ```md
> ![Evidence E05 - iOS Data Protection Settings](/img/portfolio/case-01/e05-ios-data-protection-settings.png)
> ```

### Access Requirements — iOS/iPadOS

| Setting | Production Value | Reason |
|---|---|---|
| PIN for access | Require | Protect app access even on personal devices |
| PIN type | Numeric | Simple user experience |
| Simple PIN | Block | Prevent weak PINs |
| Minimum PIN length | 6 | Stronger baseline than 4-digit PIN |
| Touch ID instead of PIN | Allow | Improve usability |
| Face ID instead of PIN | Allow | Improve usability |
| Override biometric with PIN after timeout | Require | Prevent long-term biometric-only access |
| Recheck the access requirements after inactivity | 30 minutes | Balance usability and security |
| Work or school account credentials for access | Not required | Avoid excessive prompts unless high-risk scenario |

> 📸 **Evidence E06 — iOS Access Requirements**  
>
> ```md
> ![Evidence E06 - iOS Access Requirements](/img/portfolio/case-01/e06-ios-access-requirements.png)
> ```

### Conditional Launch — iOS/iPadOS

| Setting | Value | Action |
|---|---|---|
| Max PIN attempts | 5 | Reset PIN |
| Offline grace period | 720 minutes | Block access |
| Offline grace period wipe data | 90 days | Wipe data |
| Jailbroken/rooted devices | N/A or Block if available in tenant UI | Block access |
| Min OS version | Define current supported iOS baseline | Warn first, then Block after rollout |
| Min app version | Define minimum app version for Outlook/Teams/OneDrive/Edge | Warn first, then Block |
| Min SDK version | Use only when required for specific app compatibility | Block access |

:::caution Production Rollout
For OS and app version requirements, start with **Warn** during pilot. Change to **Block access** only after confirming user impact and device readiness.
:::

> 📸 **Evidence E07 — iOS Conditional Launch**  
>
> ```md
> ![Evidence E07 - iOS Conditional Launch](/img/portfolio/case-01/e07-ios-conditional-launch.png)
> ```

### Assignments

| Assignment | Value |
|---|---|
| Include | `GRP-INTUNE-BYOD-MAM-PILOT` |
| Exclude | None for lab; use exclusions only with a documented business exception |

:::info Assignment Principle
App Protection Policies are user-targeted. Assign to user groups, not device groups.
:::

> 📸 **Evidence E08 — iOS Assignment**  
>
> ```md
> ![Evidence E08 - iOS Assignment](/img/portfolio/case-01/e08-ios-assignment.png)
> ```

### Create Policy

Review the settings and select:

```text
Create
```

---

## Task 3 — Create Android App Protection Policy

### Objective

Create a production-grade Android App Protection Policy for Core Microsoft Apps.

### Portal Steps

Go to:

```text
Microsoft Intune admin center
→ Apps
→ Protection
→ Create policy
→ Android
```

### Basics

| Field | Value |
|---|---|
| Name | `APP-Android-BYOD-CoreApps-L2-Prod` |
| Description | `Production BYOD MAM policy for Android Core Microsoft Apps. Protects corporate data without full device enrollment.` |

> 📸 **Evidence E09 — Android APP Basics**  
>
> ```md
> ![Evidence E09 - Android APP Basics](/img/portfolio/case-01/e09-android-app-basics.png)
> ```

### Apps

| Setting | Value |
|---|---|
| Target policy to | Core Microsoft Apps |

> 📸 **Evidence E10 — Android Target Apps**  
>
> ```md
> ![Evidence E10 - Android Target Apps](/img/portfolio/case-01/e10-android-target-apps.png)
> ```

### Data Protection Settings — Android

| Setting | Production Value | Reason |
|---|---|---|
| Backup Org data to Android backup services | Block | Prevent corporate data backup to personal cloud |
| Send Org data to other apps | Policy managed apps | Restrict corporate data transfer to managed apps |
| Receive data from other apps | All apps | Allow users to bring data in while controlling work data leaving |
| Save copies of Org data | Block | Prevent saving work files to unmanaged storage |
| Allow user to save copies to selected services | OneDrive for Business, SharePoint | Allow only approved corporate storage |
| Restrict cut, copy, and paste between other apps | Policy managed apps with paste in | Prevent data leakage to personal apps |
| Cut and copy character limit for any app | 0 or low approved value | Reduce clipboard leakage |
| Screen capture and Google Assistant | Block | Prevent screenshots and assistant-based data exposure |
| Restrict web content transfer with other apps | Microsoft Edge | Force corporate links into managed browser |
| Org data notifications | Block Org Data | Prevent sensitive content preview |

> 📸 **Evidence E11 — Android Data Protection Settings**  
>
> ```md
> ![Evidence E11 - Android Data Protection Settings](/img/portfolio/case-01/e11-android-data-protection-settings.png)
> ```

### Access Requirements — Android

| Setting | Production Value | Reason |
|---|---|---|
| PIN for access | Require | Protect app access |
| PIN type | Numeric |
| Simple PIN | Block |
| Minimum PIN length | 6 |
| Biometric instead of PIN | Allow |
| Override biometric with PIN after timeout | Require |
| Recheck access requirements after inactivity | 30 minutes |
| Work or school account credentials for access | Not required unless high-risk |

> 📸 **Evidence E12 — Android Access Requirements**  
>
> ```md
> ![Evidence E12 - Android Access Requirements](/img/portfolio/case-01/e12-android-access-requirements.png)
> ```

### Conditional Launch — Android

| Setting | Value | Action |
|---|---|---|
| Max PIN attempts | 5 | Reset PIN |
| Offline grace period | 720 minutes | Block access |
| Offline grace period wipe data | 90 days | Wipe data |
| Rooted devices | Block | Block access |
| Minimum Android version | Define supported baseline | Warn during pilot, Block in production |
| Minimum app version | Define approved version | Warn during pilot, Block in production |
| Play Integrity verdict / SafetyNet equivalent | Configure based on tenant availability | Block access for failed integrity |
| Require threat scan on apps | Require when supported | Block access |

:::caution Android Requirement
The Android test device must have **Intune Company Portal** installed so the app protection policy can be delivered.
:::

> 📸 **Evidence E13 — Android Conditional Launch**  
>
> ```md
> ![Evidence E13 - Android Conditional Launch](/img/portfolio/case-01/e13-android-conditional-launch.png)
> ```

### Assignments

| Assignment | Value |
|---|---|
| Include | `GRP-INTUNE-BYOD-MAM-PILOT` |
| Exclude | None for lab |

> 📸 **Evidence E14 — Android Assignment**  
>
> ```md
> ![Evidence E14 - Android Assignment](/img/portfolio/case-01/e14-android-assignment.png)
> ```

### Create Policy

Review the settings and select:

```text
Create
```

---

## Task 4 — Create Conditional Access Policy Requiring App Protection

### Objective

Enforce Microsoft 365 access from iOS/Android devices only when the client app has an Intune App Protection Policy.

:::danger Production Safety
Create the Conditional Access policy in **Report-only** mode first. Do not enable production enforcement until sign-in logs confirm expected behavior.
:::

### Portal Steps

Go to:

```text
Microsoft Entra admin center
→ Protection
→ Conditional Access
→ Policies
→ New policy
```

### Policy Name

```text
CA-iOSAndroid-BYOD-Require-AppProtection-Prod
```

### Users

| Setting | Value |
|---|---|
| Include | `GRP-INTUNE-BYOD-MAM-PILOT` |
| Exclude | `GRP-CA-EXCLUDE-BREAKGLASS` |

> 📸 **Evidence E15 — CA Users and Exclusions**  
>
> ```md
> ![Evidence E15 - CA Users and Exclusions](/img/portfolio/case-01/e15-ca-users-exclusions.png)
> ```

### Target Resources

| Setting | Value |
|---|---|
| Include | Office 365 |
| Exclude | None for pilot |

:::tip Production Option
Start with **Office 365** for a controlled rollout. Expand to all cloud apps only after validating business impact.
:::

### Conditions

#### Device Platforms

| Setting | Value |
|---|---|
| Configure | Yes |
| Include | iOS, Android |

#### Client Apps

| Setting | Value |
|---|---|
| Configure | Yes |
| Include | Mobile apps and desktop clients |
| Optional browser control | Include Browser if the organization wants to force mobile web access into Microsoft Edge with APP support |

:::caution Browser Behavior
Safari or Chrome on mobile may not satisfy the App Protection Policy requirement. Use Microsoft Edge as the managed browser for protected web access.
:::

> 📸 **Evidence E16 — CA Conditions**  
>
> ```md
> ![Evidence E16 - CA Conditions](/img/portfolio/case-01/e16-ca-conditions.png)
> ```

### Access Controls — Grant

Select:

```text
Grant access
Require app protection policy
```

Do **not** use `Require approved client app` for new production policies.

> 📸 **Evidence E17 — CA Grant Control**  
>
> ```md
> ![Evidence E17 - CA Grant Control](/img/portfolio/case-01/e17-ca-grant-control.png)
> ```

### Enable Policy

Initial setting:

```text
Report-only
```

After validation:

```text
On
```

> 📸 **Evidence E18 — CA Report-only Mode**  
>
> ```md
> ![Evidence E18 - CA Report Only Mode](/img/portfolio/case-01/e18-ca-report-only-mode.png)
> ```

---

## Task 5 — Validate User Experience on BYOD Device

### Objective

Confirm that users can access corporate data only through protected apps and that data leakage controls work as designed.

---

### Test 5.1 — iOS/iPadOS User Experience

Install the following apps:

| App | Required |
|---|---|
| Microsoft Outlook | Yes |
| Microsoft Teams | Yes |
| Microsoft OneDrive | Yes |
| Microsoft Edge | Yes |
| Microsoft Authenticator | Yes |

Sign in using:

```text
byod.user01@contoso.com
```

Validate:

| Test | Expected Result |
|---|---|
| Open Outlook | User is prompted to set App PIN or biometric access |
| Open OneDrive work file | File opens in managed work context |
| Copy email body to Notes/Zalo/Messenger | Paste is blocked or restricted |
| Save OneDrive file to personal location | Save is blocked or limited to OneDrive/SharePoint |
| Open work link from Outlook | Link opens in Microsoft Edge |
| Lock screen notification | Corporate message content is hidden |

> 📸 **Evidence E19 — iOS App PIN Prompt**  
>
> ```md
> ![Evidence E19 - iOS App PIN Prompt](/img/portfolio/case-01/e19-ios-app-pin-prompt.png)
> ```

> 📸 **Evidence E20 — iOS Copy Paste Blocked**  
>
> ```md
> ![Evidence E20 - iOS Copy Paste Blocked](/img/portfolio/case-01/e20-ios-copy-paste-blocked.png)
> ```

> 📸 **Evidence E21 — iOS Save As Blocked**  
>
> ```md
> ![Evidence E21 - iOS Save As Blocked](/img/portfolio/case-01/e21-ios-save-as-blocked.png)
> ```

---

### Test 5.2 — Android User Experience

Install the following apps:

| App | Required |
|---|---|
| Microsoft Outlook | Yes |
| Microsoft Teams | Yes |
| Microsoft OneDrive | Yes |
| Microsoft Edge | Yes |
| Intune Company Portal | Yes |

Sign in using:

```text
byod.user01@contoso.com
```

Validate:

| Test | Expected Result |
|---|---|
| Open Outlook | User is prompted to set App PIN or biometric access |
| Open Teams | Work account is protected |
| Copy Teams or Outlook content to personal app | Paste is blocked or restricted |
| Save OneDrive file to personal folder | Save is blocked or restricted |
| Screenshot inside managed app | Blocked if configured and supported |
| Open work link | Opens in Microsoft Edge |

> 📸 **Evidence E22 — Android App PIN Prompt**  
>
> ```md
> ![Evidence E22 - Android App PIN Prompt](/img/portfolio/case-01/e22-android-app-pin-prompt.png)
> ```

> 📸 **Evidence E23 — Android Screenshot Blocked**  
>
> ```md
> ![Evidence E23 - Android Screenshot Blocked](/img/portfolio/case-01/e23-android-screenshot-blocked.png)
> ```

> 📸 **Evidence E24 — Android Copy Paste Blocked**  
>
> ```md
> ![Evidence E24 - Android Copy Paste Blocked](/img/portfolio/case-01/e24-android-copy-paste-blocked.png)
> ```

---

## Task 6 — Validate Conditional Access Result

### Objective

Confirm that the Conditional Access policy is evaluated during mobile sign-in.

### Portal Steps

Go to:

```text
Microsoft Entra admin center
→ Identity
→ Monitoring & health
→ Sign-in logs
→ Select the test user's sign-in
→ Conditional Access tab
```

Validate:

| Check | Expected Result |
|---|---|
| Policy name | `CA-iOSAndroid-BYOD-Require-AppProtection-Prod` |
| Policy mode | Report-only during pilot |
| Result | Report-only: Success / Failure / Not applied based on test scenario |
| Grant control | Require app protection policy |
| Platform | iOS or Android |
| Application | Office 365 / Exchange Online / SharePoint Online / Teams |

> 📸 **Evidence E25 — Conditional Access Sign-in Result**  
>
> ```md
> ![Evidence E25 - Conditional Access Sign In Result](/img/portfolio/case-01/e25-ca-signin-result.png)
> ```

### Production Decision

After validating expected sign-in behavior:

```text
Conditional Access policy
→ Enable policy
→ On
```

> 📸 **Evidence E26 — Conditional Access Enabled**  
>
> ```md
> ![Evidence E26 - Conditional Access Enabled](/img/portfolio/case-01/e26-ca-enabled.png)
> ```

---

## Task 7 — Monitor App Protection Policy Deployment

### Objective

Confirm that the App Protection Policy is applied to the target user and apps.

### Portal Steps

Go to:

```text
Microsoft Intune admin center
→ Apps
→ Monitor
→ App protection status
```

or open the policy:

```text
Apps
→ Protection
→ Select policy
→ Monitor
```

Validate:

| Check | Expected Result |
|---|---|
| User status | Policy applied to `byod.user01` |
| App status | Outlook, Teams, OneDrive, Edge checked in |
| Platform | iOS or Android |
| Policy name | Correct iOS/Android APP |
| Status | Success / Applied |

> 📸 **Evidence E27 — App Protection Status**  
>
> ```md
> ![Evidence E27 - App Protection Status](/img/portfolio/case-01/e27-app-protection-status.png)
> ```

:::note Policy Delivery Timing
App Protection Policies may take time to apply to existing devices. Users may need to restart the managed app or sign out and sign back in.
:::

---

## Task 8 — Review Client App Protection Logs

### Objective

Collect device-side evidence for troubleshooting and portfolio documentation.

### Microsoft Edge Method

On the mobile device, open Microsoft Edge and browse to:

```text
about:Intunehelp
```

Review app protection details and diagnostics.

Validate:

| Check | Expected Result |
|---|---|
| User account | Work account is shown |
| Policy | App Protection Policy detected |
| App status | Managed app protection active |
| Diagnostics | Available for support/troubleshooting |

> 📸 **Evidence E28 — Edge about:Intunehelp Diagnostics**  
>
> ```md
> ![Evidence E28 - Edge Intune Help Diagnostics](/img/portfolio/case-01/e28-edge-intunehelp-diagnostics.png)
> ```

---

## Task 9 — Test Selective Wipe

### Objective

Prove that IT can remove corporate data from managed apps without wiping the user's personal device.

:::danger Lab Safety
Use only a test user and test device. Do not run selective wipe against a production user unless it is part of an approved operational process.
:::

### Portal Steps

Go to:

```text
Microsoft Intune admin center
→ Apps
→ App selective wipe
→ Create wipe request
```

Select:

| Field | Value |
|---|---|
| User | `byod.user01@contoso.com` |
| Device | Test BYOD device |
| Action | Create wipe request |

> 📸 **Evidence E29 — Create Selective Wipe Request**  
>
> ```md
> ![Evidence E29 - Create Selective Wipe Request](/img/portfolio/case-01/e29-create-selective-wipe-request.png)
> ```

### User-Side Validation

On the mobile device:

1. Open Outlook, Teams, or OneDrive.
2. Wait for the app to check in.
3. Confirm the work account data is removed.
4. Confirm personal device data remains untouched.

> 📸 **Evidence E30 — Selective Wipe Completed**  
>
> ```md
> ![Evidence E30 - Selective Wipe Completed](/img/portfolio/case-01/e30-selective-wipe-completed.png)
> ```

:::info Selective Wipe Timing
The user must open the app for the wipe to occur. Wipe completion can take time after the request is created.
:::

---

# 13. Production Validation Matrix

| Control | Test Method | Expected Result | Evidence |
|---|---|---|---|
| App PIN | Open Outlook/OneDrive | PIN or biometric prompt appears | E19 / E22 |
| Copy/paste restriction | Copy work data to personal app | Paste blocked or restricted | E20 / E24 |
| Save As restriction | Save OneDrive file to local/personal storage | Save blocked or limited to approved services | E21 |
| Managed browser | Open corporate link | Opens in Microsoft Edge | E20–E24 |
| Android screenshot block | Take screenshot in managed app | Screenshot blocked if configured | E23 |
| Conditional Access | Check sign-in logs | CA policy evaluated | E25 |
| App policy deployment | Check Intune app protection status | Policy applied successfully | E27 |
| Selective wipe | Create wipe request | Corporate data removed only | E29 / E30 |

---

# 14. Rollback Plan

| Change | Rollback Action |
|---|---|
| App Protection Policy causes user impact | Remove pilot group from policy assignment |
| Conditional Access blocks unexpected users | Switch policy from On to Report-only or exclude impacted group |
| Save/copy restrictions too strict | Adjust APP data protection settings |
| Browser behavior breaks business flow | Review Edge requirement or create documented exception |
| Selective wipe issued incorrectly | Remove user-level wipe request if pending; document incident |

:::caution Production Change Control
Any move from pilot to production should go through a change request, user communication, support readiness, and rollback plan.
:::

---

# 15. Troubleshooting Guide

| Symptom | Likely Cause | Resolution |
|---|---|---|
| Policy does not apply | User not in assigned group | Verify group membership and policy assignment |
| Android device does not receive APP | Company Portal missing | Install Intune Company Portal |
| iOS sign-in loops | Broker/authentication issue | Install/update Microsoft Authenticator |
| CA blocks user unexpectedly | Policy scoped too broadly | Review users, groups, platforms, and client apps |
| Copy/paste still works | User is testing personal context instead of work context | Test using work email/file from managed account |
| Save As still works | Selected storage service allowed | Review Save copies of Org data settings |
| Teams behavior inconsistent | Some scenarios are app-specific | Use Outlook and OneDrive for clear evidence |
| Selective wipe remains pending | User has not opened the app | Open app and allow check-in |
| App status not visible | App has not checked in | Restart app, sign out/sign in, wait for policy delivery |

---

# 16. Security Considerations

| Area | Production Consideration |
|---|---|
| Break-glass accounts | Always exclude from Conditional Access enforcement |
| User communication | Explain that only corporate app data is controlled, not personal photos/messages |
| Privacy | Avoid full device enrollment unless business requires it |
| High-risk departments | Apply stricter policy variant |
| Contractors | Use separate group and stricter controls |
| Exceptions | Document all exceptions with owner, expiry date, and business justification |
| Monitoring | Review app protection status and CA sign-in logs regularly |

---

# 17. Portfolio Evidence Checklist

Use this checklist before publishing the lab in your portfolio.

| Evidence ID | Screenshot / Artifact | Completed |
|---|---|---|
| E00 | Target architecture diagram | ☐ |
| E01 | Deployment ring groups | ☐ |
| E02 | Pilot group membership | ☐ |
| E03 | iOS APP basics | ☐ |
| E04 | iOS target apps | ☐ |
| E05 | iOS data protection settings | ☐ |
| E06 | iOS access requirements | ☐ |
| E07 | iOS conditional launch | ☐ |
| E08 | iOS assignment | ☐ |
| E09 | Android APP basics | ☐ |
| E10 | Android target apps | ☐ |
| E11 | Android data protection settings | ☐ |
| E12 | Android access requirements | ☐ |
| E13 | Android conditional launch | ☐ |
| E14 | Android assignment | ☐ |
| E15 | CA users and exclusions | ☐ |
| E16 | CA conditions | ☐ |
| E17 | CA grant control | ☐ |
| E18 | CA report-only mode | ☐ |
| E19 | iOS App PIN prompt | ☐ |
| E20 | iOS copy/paste blocked | ☐ |
| E21 | iOS Save As blocked | ☐ |
| E22 | Android App PIN prompt | ☐ |
| E23 | Android screenshot blocked | ☐ |
| E24 | Android copy/paste blocked | ☐ |
| E25 | CA sign-in result | ☐ |
| E26 | CA enabled | ☐ |
| E27 | App protection status | ☐ |
| E28 | Edge about:Intunehelp diagnostics | ☐ |
| E29 | Create selective wipe request | ☐ |
| E30 | Selective wipe completed | ☐ |

---

# 18. Final Business Outcome

The organization can safely support BYOD access to Microsoft 365 without taking full control of personal devices. Corporate data remains protected inside managed Microsoft apps through app-level controls such as PIN, biometric access, copy/paste restrictions, Save As restrictions, managed browser enforcement, conditional launch checks, and selective wipe.

This design improves security while preserving BYOD privacy and user productivity.

---

# 19. Portfolio Summary

```text
Implemented a production-grade Microsoft Intune Mobile Application Management design for BYOD iOS and Android devices. The solution used App Protection Policies for Core Microsoft Apps including Outlook, Teams, OneDrive, and Microsoft Edge. The policy enforced app PIN and biometric access, restricted corporate data transfer to managed apps, blocked Save As to unmanaged locations, forced protected web content into Microsoft Edge, and enabled selective wipe of corporate app data. Microsoft Entra Conditional Access was configured to require an app protection policy before allowing mobile access to Microsoft 365. The result was secure BYOD access without full device enrollment, reducing data leakage risk while preserving user privacy.
```

---

# 20. Next Improvements

| Improvement | Purpose |
|---|---|
| Create separate APP for executives | Stronger data leakage control |
| Add App Configuration Policies | Preconfigure Outlook/Edge and reduce user setup friction |
| Add Terms of Use | Require BYOD user acknowledgement |
| Add Purview sensitivity labels | Protect files based on classification |
| Add Defender for Cloud Apps session controls | Strengthen cloud access monitoring |
| Add Conditional Access authentication strength | Require phishing-resistant MFA for high-risk groups |
| Add Access Reviews for BYOD group | Remove stale BYOD access periodically |
