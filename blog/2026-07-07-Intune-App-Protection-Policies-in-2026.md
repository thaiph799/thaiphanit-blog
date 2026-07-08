---
slug: intune-app-protection-policy-2026-updates
title: "Intune App Protection Policies in 2026: Apple AI Controls, Multiple Managed Accounts, Windows MAM, and SDK Enforcement"
description: "A professional review of the latest Microsoft Intune App Protection Policy updates, including iOS Apple Intelligence controls, Multiple Managed Accounts, Windows MAM copy and paste controls, SDK enforcement, and enterprise implementation guidance."
authors: [thai-phan]
date: 2026-07-07
---

## Executive Summary

Microsoft Intune App Protection Policies, also known as APP or Mobile Application Management, are moving beyond the classic BYOD controls of PIN, encryption, copy/paste restriction, and selective wipe. The latest Microsoft updates show a clear direction: APP is becoming more identity-aware, more AI-aware, and more relevant across mobile and unmanaged Windows endpoints.

The most important recent updates are:

- New iOS/iPadOS controls for **Genmoji**, **Screen capture**, and **Writing Tools**.
- Warning and enforcement changes for iOS apps running older Intune MAM SDK or App Wrapping Tool versions.
- **Multiple Managed Accounts** support for app protection policies, currently supported in **Microsoft Teams** on iOS/iPadOS.
- More granular assignment filtering based on device management type.
- New Windows App Protection copy, cut, and paste controls for Windows MAM, starting with **Microsoft Edge**.
- Ongoing operating system support changes that affect APP reporting, targeting, and conditional launch strategy.

For enterprise IT teams, this is not just a feature update. It changes how Intune architects should design BYOD security, executive mobile access, consultant access, merger/acquisition scenarios, unmanaged Windows access, and AI-era data leakage prevention.

<!-- truncate -->

:::info
App Protection Policies protect corporate data inside supported apps. They can apply to devices that are enrolled in Intune and to unmanaged BYOD devices, but they must be paired with **Microsoft Entra Conditional Access** if you want access enforcement rather than policy configuration alone.
:::

## Why App Protection Policies Matter More in 2026

Traditional mobile device management assumes the organization controls the device. That model does not fit every scenario. Consultants, contractors, executives, shared mailbox users, partner organizations, unmanaged personal phones, and unmanaged Windows devices often need secure access without full device enrollment.

App Protection Policies solve this by protecting the work identity and work data inside the application layer. A user can keep personal data private while the organization controls what happens to corporate data in supported apps such as **Outlook**, **Teams**, **OneDrive**, **Word**, **Excel**, **PowerPoint**, and **Microsoft Edge**.

Microsoft’s current documentation continues to position APP as a core control for:

- Requiring app PIN or biometric access.
- Encrypting work data.
- Restricting copy, paste, save-as, printing, screenshots, and web transfer.
- Applying conditional launch checks such as minimum OS version, minimum app version, minimum SDK version, and threat level.
- Performing selective wipe when a user leaves, an account is disabled, or a device/app fails policy requirements.

The practical architectural lesson is simple: APP should not be treated as a “mobile-only convenience feature.” It is now a central data protection layer for unmanaged endpoint access.

## Update 1: New Apple AI Controls for Genmoji, Screen Capture, and Writing Tools

Microsoft has added dedicated iOS/iPadOS APP controls for Apple Intelligence-related data movement. The key settings are:

| Setting | Purpose | Enterprise Risk Addressed |
|---|---|---|
| **Genmoji** | Blocks use of Genmoji for work or school data | Prevents corporate data from being sent into AI-assisted content generation flows |
| **Screen capture** | Blocks screenshots, screen recording, screen sharing, AirPlay mirroring, and QuickTime mirroring/recording | Reduces visual data leakage from managed apps |
| **Writing Tools** | Blocks use of Writing Tools for work or school data | Prevents corporate text from being processed by AI writing features |

These settings require supported app SDK versions: Intune SDK **v19.7.12 or later for Xcode 15** and **v20.4.0 or later for Xcode 16**.

:::warning
Do not assume the setting exists in the portal and therefore works on every app. The app must include the required Intune SDK support. For third-party or line-of-business apps, validate the SDK version with the application owner before enforcing production policy.
:::

### Why This Matters

AI-assisted operating system features create a new data leakage path. In the past, an APP design focused on controlling data transfer between apps. Now, administrators must consider what happens when the operating system offers AI functions directly inside text, images, screen sharing, or content generation workflows.

For regulated industries, these controls are especially important for:

- Legal documents opened in **Word**.
- Executive email in **Outlook**.
- Internal financial documents in **Excel**.
- M&A conversations in **Teams**.
- Sensitive browser sessions in **Microsoft Edge**.

### Implementation Guidance

In the **Microsoft Intune admin center**, review the relevant iOS/iPadOS policy:

1. Go to **Apps** > **Protection**.
2. Select the existing iOS/iPadOS app protection policy.
3. Select **Properties**.
4. Edit **Data protection**.
5. Review **Genmoji**, **Screen capture**, and **Writing Tools**.
6. Pilot with a small group before applying to executives or broad production users.

Recommended enterprise baseline:

| User Group | Genmoji | Screen Capture | Writing Tools |
|---|---:|---:|---:|
| Standard BYOD users | Block | Block | Block |
| Executives | Block | Block | Block |
| Legal, Finance, HR | Block | Block | Block |
| Low-risk productivity pilot | Allow or Block based on risk | Block | Allow or Block based on risk |

If your tenant previously used an app configuration policy to allow screen capture, review that configuration carefully. Microsoft notes that an app configuration policy can override the APP screen capture behavior.

Example managed apps app configuration key:

```json
{
  "com.microsoft.intune.mam.screencapturecontrol": "Disabled"
}
```

:::tip
If you need screen capture for a business process, avoid allowing it globally. Create a narrow pilot group, document the exception, and review whether the use case can be solved with a safer workflow such as secure sharing, Teams meeting policy controls, or role-based access.
:::

## Update 2: iOS SDK Warning Notifications and App Launch Enforcement

Microsoft is continuing to improve the Intune MAM service by warning users when iOS apps run unsupported SDK versions. Starting in late June 2026, users opening iOS apps built with an Intune MAM SDK version earlier than **20.8.0** see a warning message recommending that they update to a supported app version.

Microsoft has also announced stronger enforcement for app versions that do not meet updated SDK or wrapper requirements. For iOS line-of-business apps, organizations should verify whether apps are using:

- Intune App SDK **20.8.0 or later** for apps compiled with Xcode 16.
- Intune App SDK **21.1.0 or later** for apps compiled with Xcode 26.
- Intune App Wrapping Tool **20.8.1 or later** for apps compiled with Xcode 16.
- Intune App Wrapping Tool **21.1.0 or later** for apps compiled with Xcode 26.

For Android APP scenarios, administrators should also ensure users run a current **Intune Company Portal** version, because Android APP delivery depends on Company Portal.

### Why This Matters

This is an operational reliability issue, not just a developer concern. If an enterprise relies on APP for Outlook, Teams, Edge, or a custom line-of-business app, unsupported SDK versions can create inconsistent enforcement, user warnings, or blocked launches.

For large environments, the biggest risk is hidden dependency. The endpoint team may own Intune, while the application team owns the mobile app build pipeline. Without shared governance, the organization discovers the problem only when users are warned or blocked.

### Implementation Guidance

Create a production readiness checklist:

- Inventory Microsoft and third-party protected apps.
- Identify line-of-business apps using the Intune SDK or App Wrapping Tool.
- Confirm SDK/wrapper versions with application owners.
- Use conditional launch settings such as **Min SDK version**, **Min app version**, and **Min Company Portal version**.
- Prepare service desk scripts for user-facing warning messages.
- Pilot blocking before applying it to all users.

Recommended conditional launch strategy:

| Control | Recommended Action |
|---|---|
| **Min SDK version** | Use **Warn** first, then move to **Block access** after app owners confirm readiness |
| **Min app version** | Use app-specific APP policies because version formats differ between apps |
| **Min Company Portal version** | Warn Android users before enforcing |
| **Offline grace period** | Keep reasonable defaults, but reduce for high-risk users |
| **Disabled account** | Use **Wipe data** for high-risk access scenarios |

:::note
Do not place a minimum app version for multiple apps in one broad policy unless you have validated the versioning scheme for each app. Microsoft explicitly warns that apps often use different version formats.
:::

## Update 3: Multiple Managed Accounts for App Protection Policies

Microsoft Intune now supports **Multiple Managed Accounts** for app protection policies. This allows a user to add more than one MAM-enabled account inside a supported app. Policies are evaluated independently for each managed account.

Microsoft currently supports this capability in **Microsoft Teams** on iOS/iPadOS version **8.10.0 or later**, with more app and platform support expected later.

### Why This Matters

This is a major improvement for real enterprise scenarios:

- Consultants who work across multiple customer tenants.
- Employees involved in mergers and acquisitions.
- Help desk users who manage shared mailboxes or multiple operational identities.
- Users transitioning between business units or tenants.

Before this capability, users often needed separate devices, browser workarounds, or account removal/re-addition. With Multiple Managed Accounts, Intune can enforce protection independently per account.

### Key Architectural Consideration: Segmented vs Mixed Views

Microsoft describes two app behavior models:

| Model | Description | Security Behavior |
|---|---|---|
| Segmented view | The app shows one account context at a time | Policy applies to the active account |
| Mixed view | The app displays data from multiple accounts in a shared view | The most restrictive behavior is enforced |

For mixed views, Microsoft states that the app enforces full lockdown behavior. That means cut/copy/paste, screen capture, and related data movement controls can become more restrictive than expected.

:::warning
If users report that APP is “stricter than the policy,” check whether they are using a mixed view. The most restrictive policy may be applied to protect data from multiple managed accounts shown together.
:::

### Implementation Guidance

Before enabling this for production:

- Confirm the app supports Multiple Managed Accounts.
- Validate minimum app version.
- Test same-tenant and cross-tenant scenarios.
- Confirm behavior for PIN, biometrics, conditional launch, copy/paste, and screen capture.
- Review Mobile Threat Defense behavior, because MTD signals are evaluated at the device level and may depend on how the MTD vendor reports device identity.

For iOS managed devices, be careful with `IntuneMAMAllowedAccountsOnly`. Microsoft notes that enabling this setting can effectively restrict the app to a single managed account, which may disable the intended Multiple Managed Accounts experience.

## Update 4: More Granular Assignment Filters for Managed Apps

Microsoft has expanded assignment filter options for managed apps using the **Device Management Type** property.

For Android, the newer values include more specific management modes such as:

- Corporate-owned with work profile.
- Corporate-owned fully managed.
- Corporate-owned dedicated devices with Microsoft Entra shared device mode.
- Corporate-owned dedicated devices without Microsoft Entra shared device mode.
- Personally owned work profile.

For iOS/iPadOS, the newer values include:

- Automated Device Enrollment user-associated devices.
- Automated Device Enrollment userless devices.
- Account Driven User Enrollment.
- Device Enrollment with Company Portal and Web Enrollment.

### Why This Matters

This is important because one APP policy rarely fits every device ownership model. A personal BYOD device should usually receive stricter DLP settings than a fully managed corporate device. A shared or userless device may need a different policy again.

A mature enterprise design should separate policy intent:

| Scenario | Policy Intent |
|---|---|
| BYOD unmanaged mobile | Strict data loss prevention |
| Corporate enrolled mobile | Balanced protection and productivity |
| Shared device | Strong session and data boundary controls |
| Executive access | High data protection |
| Contractor access | Narrow app scope and strong conditional launch |

### Implementation Guidance

In the **Microsoft Intune admin center**:

1. Go to **Apps** > **Protection**.
2. Create or edit an APP policy.
3. Go to **Assignments**.
4. Select the target user group.
5. Use **Edit filter** to include or exclude device management types.

:::tip
Use separate user groups and assignment filters together. Groups define who receives the policy; filters define which device/app context receives it. This gives cleaner troubleshooting than trying to solve every scenario with one large policy.
:::

## Update 5: Windows App Protection Adds New Copy/Paste Controls

Windows App Protection Policies are becoming more useful for unmanaged Windows access, especially through **Microsoft Edge**. Microsoft documents Windows MAM as protection for organizational data through **Microsoft Edge** on personal Windows devices.

The latest Windows APP settings include new values for **Allow cut, copy, and paste for**:

| Setting | Behavior |
|---|---|
| **Any destination and any source** | Users can paste from and copy to any location |
| **No destination or source** | Users cannot cut, copy, or paste between org and external contexts |
| **Org data destinations and any source** | Users can paste from anywhere into org context, but can only cut/copy to org destinations |
| **Org data destinations and org data sources** | Users can cut/copy/paste only inside the org context |

### Why This Matters

This extends familiar mobile-style data controls to unmanaged Windows browser access. It is especially useful for organizations that allow users to access Microsoft 365 from personal Windows devices but want to reduce data leakage through copy/paste, download, upload, and printing paths.

However, there is a critical limitation: Microsoft states Windows MAM supports unmanaged devices, and if a device is already Microsoft Entra joined or MDM enrolled, Windows MAM enrollment is blocked and APP settings are not applied.

:::warning
Windows APP is not a replacement for full Windows device management. Use it for unmanaged Windows access scenarios, especially browser-based access through **Microsoft Edge**. For corporate Windows devices, use Intune device compliance, security baselines, endpoint security policies, Microsoft Defender, and Conditional Access.
:::

### Recommended Windows MAM Pattern

For unmanaged Windows access:

- Require **Microsoft Edge**.
- Use **Application Protection Conditional Access**.
- Configure APP data transfer controls.
- Block or restrict printing if required.
- Use device threat checks where supported.
- Keep policy scoped to personal/unmanaged Windows scenarios.

Example target design:

| Control Area | Recommended Baseline |
|---|---|
| Receive data from | All sources or No sources based on upload risk |
| Send org data to | No destinations for high-risk users |
| Allow cut, copy, and paste for | Org data destinations and org data sources |
| Printing org data | Block for sensitive groups |
| Min OS version | Warn first, then block after validation |
| Max allowed threat level | Low or Secured for high-risk access |

## Update 6: OS Support Changes Affect APP Strategy

Microsoft continues to update minimum supported platform versions for Intune, including app protection policies. The key operational point is that APP administrators must monitor OS versions even for unenrolled devices.

For iOS/iPadOS APP reporting, Microsoft recommends using **Apps** > **Monitor** > **App protection status**, then filtering by **Platform** and **Platform version**.

### Why This Matters

BYOD does not remove the need for lifecycle management. If a user’s device is too old to run a supported OS version, the organization may be unable to guarantee APP behavior, app updates, or secure authentication.

For enterprise environments, this should become part of the recurring endpoint governance cycle:

- Monthly review of APP status.
- Quarterly review of minimum OS conditional launch values.
- Communication plan before blocking old OS versions.
- Exception process for business-critical users.
- Device replacement guidance for unsupported personal devices.

## Recommended Enterprise Implementation Blueprint

A strong APP architecture should include at least four policy layers.

### Layer 1: Standard BYOD Policy

Use for normal users accessing Microsoft 365 from personal iOS/iPadOS and Android devices.

Recommended controls:

- Require PIN or biometrics.
- Require encryption.
- Restrict copy/paste to policy-managed apps.
- Block unmanaged save-as locations.
- Require **Microsoft Edge** for managed web links.
- Block screen capture for sensitive apps where supported.
- Configure minimum OS and app version conditional launch.

### Layer 2: High-Risk User Policy

Use for executives, finance, HR, legal, administrators, and project teams handling confidential data.

Additional controls:

- Block Genmoji.
- Block Writing Tools.
- Block screen capture.
- Reduce offline grace period.
- Use Mobile Threat Defense.
- Use stricter OS and app version requirements.
- Apply selective wipe on disabled account or extended offline access.

### Layer 3: Managed Device Policy

Use for Intune-enrolled corporate mobile devices.

Design difference:

- Allow slightly more productivity where device compliance, encryption, threat defense, and configuration profiles already reduce risk.
- Use assignment filters to separate enrolled and unenrolled devices.
- Confirm iOS app configuration values such as `IntuneMAMUPN`, `IntuneMAMOID`, and `IntuneMAMDeviceID` where required.

### Layer 4: Unmanaged Windows MAM Policy

Use for personal Windows access through **Microsoft Edge**.

Recommended controls:

- Require app protection policy through Conditional Access.
- Restrict copy/paste using the newer Windows APP options.
- Block printing for sensitive groups.
- Use Windows health checks where appropriate.
- Keep scope limited to unmanaged Windows devices.

## Common Pitfalls

### Pitfall 1: Deploying Conditional Access Before APP Is Applied

Microsoft notes that APP can take time to apply to existing devices. If you enforce Conditional Access before users receive the APP policy, users may be blocked unexpectedly.

Recommended approach:

1. Deploy APP first.
2. Monitor **App protection status**.
3. Place Conditional Access in **Report-only** mode.
4. Validate sign-in logs.
5. Move to production enforcement in phases.

### Pitfall 2: Using One Policy for Every User

One global APP policy is easy to create but hard to operate. Different user groups have different data risk, device ownership, and productivity needs.

Use policy tiers instead:

- Standard BYOD.
- High-risk BYOD.
- Managed corporate mobile.
- Contractor or partner access.
- Unmanaged Windows Edge access.

### Pitfall 3: Ignoring App SDK Versions

New APP controls depend on app support. If the app SDK is old, controls may not apply as expected, users may receive warnings, or launch behavior may change.

### Pitfall 4: Forgetting Conditional Access

APP configures the protection behavior. Conditional Access enforces that users must use protected apps or approved apps to access corporate resources.

A proper design includes both:

- **Microsoft Intune admin center** for APP.
- **Microsoft Entra admin center** for Conditional Access.

## Production Rollout Plan

Use this phased approach for enterprise deployment.

### Phase 1: Discovery

- Export or document existing APP policies.
- Review targeted apps.
- Check **App protection status**.
- Identify unmanaged BYOD population.
- Identify users with older OS versions or app versions.
- Confirm line-of-business app SDK/wrapper versions.

### Phase 2: Pilot

- Create pilot groups for IT, service desk, and business champions.
- Enable Apple AI controls.
- Test Teams Multiple Managed Accounts if required.
- Test Windows MAM through **Microsoft Edge**.
- Validate Conditional Access in **Report-only** mode.

### Phase 3: Controlled Enforcement

- Enable APP for standard BYOD users.
- Enable stricter policy for high-risk users.
- Move Conditional Access from **Report-only** to **On**.
- Monitor sign-in logs and APP reports.
- Track support tickets and user friction.

### Phase 4: Governance

- Review APP monthly.
- Review OS and app version compliance quarterly.
- Review SDK requirements with app owners before Microsoft enforcement dates.
- Document exceptions.
- Align APP with Microsoft Defender, Purview DLP, and Conditional Access strategy.

## Example Conditional Access Alignment

For mobile access to Microsoft 365:

1. Open the **Microsoft Entra admin center**.
2. Go to **Protection** > **Conditional Access**.
3. Select **Create new policy**.
4. Target required users or groups.
5. Select cloud apps such as **Office 365** or selected Microsoft 365 services.
6. Under device platforms, include **iOS** and **Android**.
7. Under grant controls, select **Require app protection policy**.
8. Start with **Report-only**.
9. Validate impact.
10. Enable the policy.

:::note
Always exclude emergency access accounts from Conditional Access policies. A strong APP design still needs an identity recovery path.
:::

## Final Recommendation

The latest Intune App Protection Policy updates show that Microsoft is adapting APP for the next generation of enterprise access: unmanaged devices, multiple identities, AI-assisted operating systems, stricter app SDK requirements, and browser-based Windows access.

For a modern Microsoft 365 environment, the recommended direction is:

- Use APP as the default protection layer for BYOD access.
- Pair APP with Conditional Access.
- Treat Apple AI controls as production DLP controls, not optional extras.
- Use assignment filters to separate unmanaged, managed, shared, and corporate-owned devices.
- Prepare application owners for SDK and wrapper enforcement.
- Extend APP thinking to unmanaged Windows access through **Microsoft Edge** where appropriate.
- Monitor continuously through **App protection status**, sign-in logs, and service desk feedback.

A well-designed APP architecture gives users flexibility without giving corporate data the same freedom.

## References

- [What's new in Microsoft Intune](https://learn.microsoft.com/en-us/intune/whats-new/)
- [Create and deploy app protection policies](https://learn.microsoft.com/en-us/intune/app-management/protection/create-policy)
- [iOS/iPadOS app protection policy settings](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-ios)
- [Android app protection policy settings](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-android)
- [Windows app protection policy settings](https://learn.microsoft.com/en-us/intune/app-management/protection/ref-settings-windows)
- [Multiple managed accounts for app protection policies](https://learn.microsoft.com/en-us/intune/app-management/protection/multiple-managed-accounts)
- [Require approved client apps or app protection policy with mobile devices](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-all-users-approved-app-or-app-protection)
- [Microsoft Intune support for Apple Intelligence](https://techcommunity.microsoft.com/blog/intunecustomersuccess/microsoft-intune-support-for-apple-intelligence/4254037)
