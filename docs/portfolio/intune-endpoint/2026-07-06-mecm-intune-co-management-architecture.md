---
slug: mecm-intune-co-management-architecture
title: MECM and Intune Co-Management Architecture for Global Endpoint Operations
description: A production-style lab for designing and validating Microsoft Configuration Manager and Microsoft Intune co-management architecture for global Windows endpoint operations.
---

# MECM and Intune Co-Management Architecture for Global Endpoint Operations

## Executive Summary

This lab documents a production-style architecture for managing Windows endpoints with Microsoft Configuration Manager and Microsoft Intune co-management. The design is aligned to a global endpoint operations model where the organization must maintain mature on-premises endpoint management while gradually adopting cloud-based management, compliance, security, and modern provisioning capabilities.

The goal is not to replace Configuration Manager immediately. The goal is to establish a controlled co-management architecture where selected Windows workloads can be piloted and transitioned to Intune while Configuration Manager continues to manage the remaining workloads.

:::info Evidence Requirement
Capture the screenshots listed in each section and store them under:

`static/img/endpoint-management/lab01-co-management/`

Use clear filenames such as `01-configmgr-cloud-attach-node.png`, `02-intune-mdm-scope.png`, and `03-co-management-workloads.png`.
:::

<!-- truncate -->

## Business Scenario

A global organization manages more than 25,000 Windows endpoints across multiple countries. The existing endpoint platform is based on Microsoft Configuration Manager for software deployment, inventory, client policy, operating system deployment, and update management. The business now requires stronger cloud integration with Microsoft Intune to support conditional access, modern device compliance, endpoint security policies, remote support visibility, and future Windows Autopilot scenarios.

The endpoint engineering team must design a co-management architecture that allows phased adoption without disrupting existing Configuration Manager operations.

## What This Lab Proves

This lab demonstrates the ability to:

- Explain the difference between co-management and tenant attach.
- Design a phased co-management model for enterprise Windows endpoints.
- Identify prerequisites across Configuration Manager, Intune, Microsoft Entra ID, and Windows clients.
- Define workload ownership between Configuration Manager and Intune.
- Use pilot collections to reduce deployment risk.
- Validate co-management status from both Configuration Manager and Intune.
- Document the architecture in a way that is useful for operations, project delivery, and interview discussion.

## Reference Baseline

This lab is based on Microsoft documentation, not assumptions:

- Microsoft defines co-management as concurrent management of Windows devices by using both Configuration Manager and Microsoft Intune. A device must have the Configuration Manager client and be enrolled in Intune to receive the benefits of both services. Reference: [Co-management for Windows devices](https://learn.microsoft.com/en-us/intune/configmgr/comanage/overview)
- Microsoft states that workloads can be transitioned from Configuration Manager to Intune and that Configuration Manager continues to manage workloads that are not switched. Reference: [Co-management workloads](https://learn.microsoft.com/en-us/intune/configmgr/comanage/workloads)
- Microsoft recommends using a pilot group, which is a Configuration Manager collection containing a subset of devices, for initial co-management testing. Reference: [Enable co-management](https://learn.microsoft.com/en-us/intune/configmgr/comanage/how-to-enable)
- Microsoft describes tenant attach as uploading Configuration Manager devices to the Microsoft Intune admin center so cloud-based actions and visibility can be used. Reference: [Tenant attach prerequisites](https://learn.microsoft.com/en-us/intune/configmgr/tenant-attach/prerequisites)
- Microsoft documents `CoManagementHandler.log` as the key client-side log for troubleshooting co-management. Reference: [Configuration Manager log file reference](https://learn.microsoft.com/en-us/intune/configmgr/core/plan-design/hierarchy/log-files)

## Architecture Overview

Co-management is a client management model. Tenant attach is a cloud visibility and action model. In a mature enterprise design, both can be used together, but they solve different problems.

| Capability | Co-Management | Tenant Attach |
|---|---|---|
| Primary purpose | Manage Windows devices with both Configuration Manager and Intune | Upload Configuration Manager devices to the Intune admin center |
| Device requirement | Configuration Manager client plus Intune enrollment | Configuration Manager-managed device uploaded to Intune admin center |
| Main value | Workload transition to Intune | Cloud console visibility and actions |
| Example use case | Move compliance policy workload to Intune while keeping app deployment in Configuration Manager | View ConfigMgr device details, run scripts, install apps, or view timeline from Intune admin center |
| Operational risk | Workload ownership must be controlled | Device upload and permissions must be scoped correctly |

## Target Architecture

`static/img/endpoint-management/lab01-co-management/01-configmgr-device-record.png`

### Architecture Decision

For an existing enterprise Configuration Manager environment, the recommended lab path is:

1. Keep existing Windows clients managed by Configuration Manager.
2. Configure Microsoft Entra hybrid join for domain-joined devices.
3. Configure Intune automatic enrollment for eligible users or devices.
4. Enable cloud attach and co-management from Configuration Manager.
5. Use a pilot collection before moving any workload broadly.
6. Move the Compliance Policies workload first for a controlled Conditional Access use case.

This follows Microsoft's documented pattern where existing Configuration Manager clients can be cloud-attached and enrolled into Intune for co-management.

## Lab Scope

### In Scope

- Co-management architecture design.
- Prerequisite validation.
- Cloud attach and co-management planning.
- Workload ownership model.
- Pilot collection strategy.
- Evidence checklist for portfolio documentation.
- Validation and troubleshooting workflow.

### Out of Scope

- Full Configuration Manager site installation.
- Production certificate authority design.
- Complete Cloud Management Gateway deployment.
- Windows Autopilot implementation.
- Application deployment testing.
- Conditional Access enforcement testing.

These items should be covered in later labs.

## Prerequisites

| Area | Requirement | Validation Method |
|---|---|---|
| Configuration Manager | Configuration Manager current branch | Configuration Manager console > Administration > Updates and Servicing |
| Windows client | Windows 10 or later | Settings > System > About or `winver` |
| Microsoft Intune | Active Intune subscription | Intune admin center access |
| Microsoft Entra ID | Microsoft Entra ID P1 or P2 for automatic enrollment scenarios | Microsoft Entra admin center > Licenses |
| Device identity | Microsoft Entra hybrid joined or Microsoft Entra joined device | `dsregcmd /status` |
| Existing clients path | Device already has Configuration Manager client | Control Panel > Configuration Manager |
| Internet-first path | Cloud Management Gateway required for internet-based ConfigMgr client communication | Configuration Manager console > Administration > Cloud Services |
| Permissions | Required administrative roles for Configuration Manager, Intune, and Microsoft Entra | Role assignment review |

:::warning Important Design Control
Do not move a workload to Intune unless the equivalent Intune policy or deployment model has already been designed and tested. A workload should always have a clear management authority.
:::

## Lab Naming Standard

Use consistent names so the lab looks like an enterprise implementation instead of a one-off test.

| Object Type | Recommended Name |
|---|---|
| Pilot collection | `CM-COL-WIN11-CoMgmt-Pilot` |
| Intune device group | `INT-DEV-WIN11-CoMgmt-Pilot` |
| Intune user group | `INT-USR-CoMgmt-Pilot-Users` |
| Co-management policy | `CoMgmt-Global-Windows-Pilot` |
| Compliance policy | `CP-WIN11-Baseline-Pilot` |
| Documentation folder | `endpoint-management/lab01-co-management` |

## Implementation Workflow

### Phase 1: Validate Current Configuration Manager Baseline

Before enabling co-management, confirm that Configuration Manager is healthy and that the test Windows endpoint is already managed by Configuration Manager.

Validation points:

- Configuration Manager client is installed.
- Client can retrieve policy.
- Client can send hardware inventory.
- Device appears in the expected Configuration Manager collection.
- Site is running a supported current branch version.

Evidence to capture:

```text
Screenshot 01: Configuration Manager console showing the test Windows device.
Suggested filename: 01-configmgr-device-record.png

Screenshot 02: Configuration Manager client applet on the Windows endpoint.
Suggested filename: 02-configmgr-client-properties.png

Screenshot 03: Configuration Manager site version from console.
Suggested filename: 03-configmgr-site-version.png
```

Portfolio image placeholder:

![Evidence 01 - Configuration Manager device record](/img/endpoint-management/lab01-co-management/01-configmgr-device-record.png)

### Phase 2: Validate Microsoft Entra Device Identity

Co-management requires the device to have a cloud identity. For existing domain-joined Configuration Manager clients, validate Microsoft Entra hybrid join. For cloud-only devices, validate Microsoft Entra join.

Run the following command on the Windows endpoint:

```powershell
dsregcmd /status
```

Key fields to check:

| Field | Expected Result |
|---|---|
| `AzureAdJoined` | `YES` for Microsoft Entra joined or hybrid joined devices |
| `DomainJoined` | `YES` for hybrid joined domain devices |
| `TenantName` | Matches the enterprise tenant |
| `DeviceId` | Present |

Evidence to capture:

```text
Screenshot 04: dsregcmd /status showing device identity state.
Suggested filename: 04-dsregcmd-device-identity.png

Screenshot 05: Microsoft Entra admin center showing the device object.
Suggested filename: 05-entra-device-object.png
```

Portfolio image placeholder:

![Evidence 04 - Device identity validation](/img/endpoint-management/lab01-co-management/04-dsregcmd-device-identity.png)

### Phase 3: Configure Intune Automatic Enrollment Scope

Configure automatic MDM enrollment so eligible Windows devices can enroll into Intune. In a pilot lab, use a scoped group instead of enabling enrollment for all users immediately.

Recommended pilot setting:

| Setting | Recommendation |
|---|---|
| MDM user scope | Some |
| Pilot group | `INT-USR-CoMgmt-Pilot-Users` |
| MDM URLs | Use default Microsoft Intune URLs |

Evidence to capture:

```text
Screenshot 06: Microsoft Entra ID Mobility (MDM and MAM) showing Microsoft Intune MDM user scope.
Suggested filename: 06-intune-mdm-user-scope.png

Screenshot 07: Pilot user group membership.
Suggested filename: 07-pilot-user-group.png
```

Portfolio image placeholder:

![Evidence 06 - Intune MDM user scope](/img/endpoint-management/lab01-co-management/06-intune-mdm-user-scope.png)

### Phase 4: Prepare the Co-Management Pilot Collection

Create a Configuration Manager device collection for pilot co-management onboarding. This collection should contain only test devices that are safe to enroll into Intune and safe to use for workload validation.

Recommended collection:

```text
CM-COL-WIN11-CoMgmt-Pilot
```

Collection membership strategy:

- Add only one or a small number of Windows 11 test devices first.
- Avoid including servers.
- Avoid broad dynamic rules until the pilot behavior is understood.
- Use a separate collection for each workload pilot if the rollout plan requires different staging.

Evidence to capture:

```text
Screenshot 08: Configuration Manager pilot collection.
Suggested filename: 08-configmgr-comgmt-pilot-collection.png

Screenshot 09: Pilot collection membership showing test device.
Suggested filename: 09-configmgr-pilot-membership.png
```

Portfolio image placeholder:

![Evidence 08 - Co-management pilot collection](/img/endpoint-management/lab01-co-management/08-configmgr-comgmt-pilot-collection.png)

### Phase 5: Enable Cloud Attach and Co-Management

In Configuration Manager current branch, use the Cloud Attach configuration experience to enable cloud attach capabilities and co-management. The exact wizard labels can vary by Configuration Manager version, but the design objective is consistent:

- Sign in to the Microsoft cloud tenant.
- Enable device upload where tenant attach is required.
- Enable automatic enrollment into Intune for the pilot collection.
- Avoid moving workloads broadly during the first onboarding step.

Recommended first-stage configuration:

| Configuration Area | Pilot Recommendation |
|---|---|
| Automatic enrollment in Intune | Pilot |
| Intune auto-enrollment collection | `CM-COL-WIN11-CoMgmt-Pilot` |
| Tenant attach device upload | Pilot or scoped collection |
| Workload transition | Keep all workloads in Configuration Manager initially |

Evidence to capture:

```text
Screenshot 10: Configuration Manager Cloud Attach or Co-management node.
Suggested filename: 10-configmgr-cloud-attach-node.png

Screenshot 11: Co-management or Cloud Attach wizard enrollment page.
Suggested filename: 11-comgmt-enrollment-settings.png

Screenshot 12: Completion page or configured co-management properties.
Suggested filename: 12-comgmt-configuration-complete.png
```

Portfolio image placeholder:

![Evidence 10 - Cloud Attach node](/img/endpoint-management/lab01-co-management/10-configmgr-cloud-attach-node.png)

### Phase 6: Define Workload Ownership

Co-management supports individual workload transition. The initial enterprise approach should avoid moving everything at once. Start with visibility and enrollment, then move selected workloads to pilot.

Supported co-management workloads include:

| Workload | Initial Owner | Pilot Target | Reason |
|---|---|---|---|
| Compliance policies | Pilot Intune | `CM-COL-WIN11-CoMgmt-Pilot` | Enables cloud compliance and Conditional Access scenarios |
| Windows Update policies | Configuration Manager | Later pilot | Higher operational risk; requires update ring design |
| Resource access policies | Configuration Manager or Intune based on current use | Later pilot | Resource access is part of device configuration planning |
| Endpoint Protection | Configuration Manager initially | Later pilot | Requires security baseline and Defender policy alignment |
| Device configuration | Configuration Manager initially | Later pilot | Avoid GPO, ConfigMgr, and Intune policy conflict |
| Office Click-to-Run apps | Configuration Manager initially | Later pilot | Must align with existing Office update channel strategy |
| Client apps | Configuration Manager initially | Later pilot | Existing enterprise app packaging process usually remains in ConfigMgr first |

Evidence to capture:

```text
Screenshot 13: Co-management workload configuration page.
Suggested filename: 13-comgmt-workload-settings.png

Screenshot 14: Workload set to Pilot Intune for Compliance Policies only.
Suggested filename: 14-comgmt-compliance-pilot.png
```

Portfolio image placeholder:

![Evidence 13 - Co-management workload settings](/img/endpoint-management/lab01-co-management/13-comgmt-workload-settings.png)

### Phase 7: Validate Device Status in Intune

After enrollment has completed, validate that the device appears in the Microsoft Intune admin center.

Expected result:

| Portal | Expected Device State |
|---|---|
| Configuration Manager console | Device remains a Configuration Manager client |
| Intune admin center | Device appears as co-managed |
| Microsoft Entra ID | Device has valid cloud identity |

In Intune, check:

```text
Intune admin center > Devices > All devices > Select test device
```

Evidence to capture:

```text
Screenshot 15: Intune device list showing the device.
Suggested filename: 15-intune-device-list.png

Screenshot 16: Device overview showing management state.
Suggested filename: 16-intune-comanaged-device-overview.png

Screenshot 17: Device hardware or discovered apps page, if available.
Suggested filename: 17-intune-device-details.png
```

Portfolio image placeholder:
```text
![Evidence 16 - Intune co-managed device overview](/img/endpoint-management/lab01-co-management/16-intune-comanaged-device-overview.png)
```
### Phase 8: Validate Tenant Attach Connector Status

If tenant attach is enabled, validate the Configuration Manager connector from the Intune admin center.

Path:

```text
Intune admin center > Tenant administration > Connectors and tokens > Microsoft Endpoint Configuration Manager
```

Expected result:

| Item | Expected Result |
|---|---|
| Connection status | Healthy |
| Last successful sync | Recent timestamp |
| Hierarchy information | Visible |
| Uploaded device | Available in Intune device view |

Evidence to capture:

```text
Screenshot 18: Microsoft Endpoint Configuration Manager connector status in Intune.
Suggested filename: 18-intune-configmgr-connector-status.png

Screenshot 19: Tenant-attached device details in Intune.
Suggested filename: 19-intune-tenant-attached-device-details.png
```

Portfolio image placeholder:
```text
![Evidence 18 - ConfigMgr connector status](/img/endpoint-management/lab01-co-management/18-intune-configmgr-connector-status.png)
```
### Phase 9: Validate Co-Management Monitoring

Use the Configuration Manager monitoring workspace to review co-management enrollment and workload transition status.

Path:

```text
Configuration Manager console > Monitoring > Cloud Attach
```

Depending on the Configuration Manager version, older consoles may show this under the Co-management node.

Evidence to capture:

```text
Screenshot 20: Co-management dashboard.
Suggested filename: 20-configmgr-comgmt-dashboard.png

Screenshot 21: Co-management enrollment status tile.
Suggested filename: 21-configmgr-comgmt-enrollment-status.png

Screenshot 22: Workload transition chart.
Suggested filename: 22-configmgr-workload-transition.png
```

Portfolio image placeholder:
```text
![Evidence 20 - Co-management dashboard](/img/endpoint-management/lab01-co-management/20-configmgr-comgmt-dashboard.png)
```
### Phase 10: Validate Client-Side Logs

On the Windows endpoint, review the co-management log:

```text
%WinDir%\CCM\Logs\CoManagementHandler.log
```

Use CMTrace or another log viewer to inspect the file.

Look for entries that indicate:

- Co-management policy was received.
- Auto-enrollment setting was processed.
- MDM enrollment was attempted or completed.
- Workload capability flags were evaluated.

Evidence to capture:

```text
Screenshot 23: CoManagementHandler.log showing co-management policy processing.
Suggested filename: 23-comanagementhandler-policy-processing.png

Screenshot 24: CoManagementHandler.log showing enrollment or workload evaluation.
Suggested filename: 24-comanagementhandler-enrollment-status.png
```

Portfolio image placeholder:
```text
![Evidence 23 - CoManagementHandler log validation](/img/endpoint-management/lab01-co-management/23-comanagementhandler-policy-processing.png)
```
## Validation Checklist

| Check | Expected Result | Status |
|---|---|---|
| Configuration Manager client is installed | Client is active and healthy | Pending |
| Device has cloud identity | Microsoft Entra joined or hybrid joined | Pending |
| Intune MDM enrollment scope is configured | Pilot group is scoped | Pending |
| Co-management pilot collection exists | Test device is a member | Pending |
| Cloud attach or co-management is configured | Wizard completed successfully | Pending |
| Workloads remain controlled | No unplanned workload moved to Intune | Pending |
| Device appears in Intune | Device visible as co-managed | Pending |
| ConfigMgr connector is healthy | Connector status healthy in Intune | Pending |
| Co-management dashboard has data | Enrollment status is visible | Pending |
| Client log confirms processing | `CoManagementHandler.log` has relevant entries | Pending |

## Troubleshooting Runbook

### Issue 1: Device Does Not Appear in Intune

Check:

- Device is in the co-management pilot collection.
- MDM user scope includes the test user or group.
- Device has valid Microsoft Entra identity.
- User or device has required licensing.
- Configuration Manager client received policy.
- `CoManagementHandler.log` shows enrollment processing.

### Issue 2: Device Shows as ConfigMgr Only

Check:

- Intune enrollment completed successfully.
- Automatic enrollment was configured for the correct pilot collection.
- The device is Microsoft Entra hybrid joined or Microsoft Entra joined.
- There is no conflicting MDM enrollment configuration.
- The device has network access to Microsoft cloud endpoints.

### Issue 3: Workload Did Not Move to Intune

Check:

- The workload is set to Pilot Intune or Intune.
- The device is in the correct workload pilot collection.
- The Intune policy for that workload exists and is assigned.
- `CoManagementHandler.log` shows workload capability processing.

### Issue 4: Policy Conflict Between GPO, ConfigMgr, and Intune

Check:

- Which platform owns the workload.
- Whether the same Windows setting is configured by GPO and Intune.
- Whether Configuration Manager baselines still enforce the same setting.
- Whether the Intune policy is assigned only to pilot devices.

## Operational Design Notes

### Recommended Enterprise Rollout Model

| Ring | Scope | Purpose |
|---|---|---|
| Ring 0 | Endpoint engineering test devices | Validate enrollment and logs |
| Ring 1 | IT pilot users | Validate user impact and help desk process |
| Ring 2 | Early adopter business users | Validate real application and network scenarios |
| Ring 3 | Regional rollout | Expand by country or business unit |
| Ring 4 | Broad production | Standard operating model |

### Recommended First Workload

The first workload to pilot should be Compliance Policies. This creates a useful bridge into Conditional Access while allowing existing Configuration Manager processes to continue operating.

### Workloads to Treat Carefully

Windows Update policies, Client Apps, Endpoint Protection, and Device Configuration should be moved only after the equivalent Intune policy model has been tested. These workloads can have direct user impact if they are moved without a defined design.

## Portfolio Summary

This lab establishes the architecture and validation model for a Microsoft Configuration Manager and Microsoft Intune co-management environment. It demonstrates how an enterprise can maintain mature Configuration Manager operations while adopting Intune for selected cloud workloads through a controlled pilot model.

The evidence captured in this lab can support job applications for:

- Global Endpoint Engineer
- Endpoint Administrator
- MECM Engineer
- Intune Engineer
- Modern Workplace Engineer
- Digital Workplace Engineer
- EUC Engineer

## Interview Talking Points

Use these points when explaining the lab in an interview:

- Co-management is not an immediate migration away from Configuration Manager. It is a controlled bridge between Configuration Manager and Intune.
- Tenant attach and co-management are related but not the same. Tenant attach provides cloud visibility and actions for ConfigMgr devices. Co-management allows workload authority to move between ConfigMgr and Intune.
- Pilot collections are critical because workload transition can affect compliance, updates, applications, and user experience.
- Compliance Policies are a practical first workload because they enable Conditional Access scenarios without moving all endpoint operations at once.
- `CoManagementHandler.log` is the key client-side log for validating co-management processing.

## Final Outcome

At the end of this lab, the organization has:

- A documented co-management architecture.
- A clear pilot onboarding model.
- Defined workload ownership between Configuration Manager and Intune.
- A repeatable evidence checklist.
- A troubleshooting baseline for co-managed Windows endpoints.

This is the foundation for later labs covering application deployment, Windows 11 security baselines, compliance policy, Conditional Access, Defender for Endpoint, and Windows Autopilot.
