---
slug: microsoft-365-e5-intune-suite-licensing-update-july-2026
title: "Microsoft 365 E5 Licensing Update: Advanced Intune Suite Capabilities Now Available from July 2026"
description: "A technical breakdown of the July 2026 Microsoft 365 E5 licensing change that brings advanced Microsoft Intune Suite capabilities into Microsoft 365 E5, with implementation guidance for enterprise endpoint teams."
authors: [thai-phan]
date: 2026-07-07
---

## Executive Summary

Microsoft has made one of the most important endpoint management licensing changes for enterprise customers in 2026: advanced Microsoft Intune capabilities are now included in **Microsoft 365 E5**, with selected capabilities also available in **Microsoft 365 E3**.

Microsoft announced on July 1, 2026 that the packaging changes originally announced in December 2025 are now in effect. For Microsoft 365 E5 customers, this means advanced Intune Suite capabilities such as **Endpoint Privilege Management**, **Microsoft Cloud PKI**, and **Enterprise Application Management** are now part of the broader Microsoft 365 E5 value proposition, subject to tenant eligibility, rollout timing, and feature availability.

For endpoint administrators, this is not just a licensing update. It changes how enterprises should plan privilege reduction, certificate modernization, Win32 application lifecycle management, remote support, endpoint analytics, BYOD access, and operational consolidation.

<!-- truncate -->

:::info
Microsoft states that existing eligible customers will receive a 30-day notice in **Microsoft 365 admin center** and will have access by August 2026. Administrators should validate availability in their own tenant before updating production designs or removing third-party tooling.
:::

## What Changed in July 2026

As of July 1, 2026, Microsoft 365 E5 customers gain access to advanced Intune capabilities that were previously commonly treated as separate Intune Suite or standalone add-on purchases.

At a high level, Microsoft positions the change as follows:

| Microsoft 365 plan | Newly included Intune capabilities |
|---|---|
| **Microsoft 365 E3 / EMS E3** | Intune Plan 2, Remote Help, Advanced Analytics |
| **Microsoft 365 E5** | E3 capabilities plus Endpoint Privilege Management, Microsoft Cloud PKI, Enterprise Application Management, and advanced AI-assisted Intune scenarios where separately licensed or enabled |

Microsoft’s current documentation describes Intune capabilities across three major licensing concepts:

| Licensing concept | Purpose |
|---|---|
| **Microsoft Intune Plan 1** | Core cloud-based unified endpoint management for devices and apps |
| **Microsoft Intune Plan 2** | Advanced endpoint management capabilities additive to Plan 1 |
| **Microsoft Intune Suite** | Advanced endpoint management and security capabilities additive to Plan 1, including Plan 2 |

The practical result is that Microsoft 365 E5 becomes much stronger as an enterprise endpoint management platform. Organizations already standardized on Microsoft 365 E5 should reassess whether separate tools for privilege elevation, certificate lifecycle management, third-party app catalog deployment, remote assistance, and endpoint experience analytics are still required.

:::warning
Do not assume that every Intune Suite-related or Security Copilot-related capability is automatically active in every tenant on July 1. Microsoft notes that feature availability and included capabilities vary by subscription plan, and some advanced capabilities may still require additional licensing.
:::

## Why This Matters for Enterprise Endpoint Teams

### 1. Endpoint Management Becomes More Consolidated

Many enterprise endpoint teams operate a fragmented stack:

| Requirement | Common legacy approach |
|---|---|
| Local admin removal | Separate privilege management product |
| Certificate delivery | AD CS, NDES, Intune Certificate Connector, SCEP infrastructure |
| Third-party app packaging | Manual packaging, vendor tools, community catalogs, custom scripts |
| Remote support | Separate remote control platform |
| Endpoint performance visibility | Multiple monitoring and analytics tools |

The July 2026 licensing change strengthens the case for consolidating these functions into **Microsoft Intune admin center**, especially for organizations already paying for Microsoft 365 E5.

This does not mean every third-party tool should be removed immediately. It means endpoint architects should perform a capability-by-capability assessment instead of assuming Intune Suite remains an optional premium layer outside the E5 estate.

### 2. Least Privilege Becomes Easier to Operationalize

**Endpoint Privilege Management** helps organizations move Windows users away from standing local administrator rights while still allowing approved elevation for business-critical tasks.

This is a major Zero Trust control. In many environments, local admin rights remain because users need to install approved tools, update drivers, run diagnostics, or support engineering workflows. EPM gives administrators a controlled way to approve those actions without leaving users permanently overprivileged.

A mature EPM rollout should not start by removing admin rights from everyone on day one. It should begin with discovery, auditing, persona mapping, rule design, pilot groups, and then staged enforcement.

### 3. Certificate Modernization Becomes a Realistic Cloud Project

**Microsoft Cloud PKI** gives Intune administrators a managed certificate authority model for issuing, renewing, and revoking certificates across supported Intune-managed platforms.

This is especially important for organizations still relying heavily on traditional AD CS, NDES, certificate connectors, and manually maintained SCEP infrastructure.

Cloud PKI can reduce infrastructure complexity, but it still requires serious design work. Certificate-based authentication is security-sensitive. Administrators must understand trust chains, relying parties, certificate profiles, EKUs, revocation behavior, and platform-specific certificate deployment behavior before production rollout.

:::tip
Treat Cloud PKI as a security architecture project, not a simple Intune profile change. Certificate mistakes can break Wi-Fi, VPN, device authentication, and application access at enterprise scale.
:::

### 4. Win32 Application Lifecycle Management Becomes More Strategic

**Enterprise Application Management** enables administrators to discover, deploy, and update supported Win32 applications from the Microsoft-hosted **Enterprise App Catalog**.

For organizations managing thousands of Windows endpoints, third-party application updates are often one of the weakest operational areas. Manual packaging, inconsistent detection rules, outdated installers, and slow patch cycles create both support overhead and security exposure.

Enterprise Application Management does not remove the need for application governance. It changes the operating model. Endpoint teams should now define which applications are managed through the catalog, which remain custom Win32 packages, and which require business owner approval before deployment or auto-update.

### 5. Help Desk and Endpoint Operations Can Move Closer to Intune

With **Remote Help** and **Advanced Analytics** becoming more broadly available through Microsoft 365 licensing, service desk and endpoint engineering teams can work from a more integrated operational platform.

Remote Help supports identity-aware, role-based assistance. Advanced Analytics gives IT teams richer endpoint health and performance insights. Together, these capabilities help reduce the gap between detecting an issue and taking action.

For large environments, this matters because endpoint incidents are rarely isolated. A slow device, failed app deployment, certificate issue, or elevation request may be a signal of a wider policy, configuration, or platform health problem.

## Capability Breakdown for Microsoft 365 E5 Customers

### Endpoint Privilege Management

Endpoint Privilege Management allows users to operate as standard users while approved applications or tasks can be elevated under administrator-defined rules.

Key enterprise use cases include:

| Use case | Business value |
|---|---|
| Remove standing local admin rights | Reduces attack surface and lateral movement risk |
| Approve trusted elevation scenarios | Maintains productivity without permanent admin access |
| Audit unmanaged elevation attempts | Helps identify real user requirements before enforcement |
| Support-approved elevation | Gives help desk teams a controlled approval workflow |
| Persona-based rule design | Supports different rules for developers, engineers, finance, IT, and executives |

A recommended deployment model:

1. Enable EPM reporting for pilot users.
2. Review elevation events and group them by persona.
3. Build elevation rules for trusted applications.
4. Test automatic elevation, user-confirmed elevation, and support-approved elevation.
5. Remove local admin rights from pilot users.
6. Monitor reports and refine rules.
7. Expand by department or device group.

:::note
EPM policies apply to Windows devices. Build separate operational plans for macOS, mobile, kiosk, and shared-device privilege scenarios.
:::

### Microsoft Cloud PKI

Microsoft Cloud PKI provides a managed CA experience in Intune for certificate issuance, renewal, and revocation.

Common enterprise scenarios include:

| Scenario | Cloud PKI relevance |
|---|---|
| Wi-Fi certificate authentication | Issue device or user certificates through Intune profiles |
| VPN authentication | Support certificate-based access for managed endpoints |
| SCEP modernization | Reduce dependency on NDES infrastructure |
| BYOCA integration | Anchor a cloud issuing CA to an existing private CA |
| Cross-platform certificate delivery | Support Windows, iOS/iPadOS, macOS, and Android scenarios where supported |

Important design considerations:

| Area | Design question |
|---|---|
| CA hierarchy | Will you use Microsoft Cloud PKI root CA or bring your own CA? |
| Relying parties | Which Wi-Fi, VPN, RADIUS, or application systems must trust the CA chain? |
| Certificate profiles | Which platforms require trusted certificate and SCEP profiles? |
| EKU | Are the required Extended Key Usages present on the issuing CA? |
| Revocation | Can relying parties reach CRL/AIA locations? |
| Migration | Will legacy AD CS and NDES run in parallel during transition? |

### Enterprise Application Management

Enterprise Application Management uses the **Enterprise App Catalog**, a Microsoft-hosted catalog of prepared Win32 applications with built-in install metadata.

Enterprise benefits include:

| Benefit | Operational impact |
|---|---|
| Faster app deployment | Reduces packaging time for supported catalog apps |
| Standardized app metadata | Improves consistency across app assignments |
| Application update handling | Helps keep third-party apps current |
| Reduced manual packaging | Frees endpoint engineers for higher-value work |
| Better governance | Supports central review of supported business applications |

Recommended adoption approach:

1. Export the current Win32 application inventory.
2. Identify apps available in the **Enterprise App Catalog**.
3. Prioritize high-risk, frequently updated applications.
4. Pilot catalog-based deployment with a controlled Entra ID group.
5. Compare detection behavior, install success rate, and update timing.
6. Replace custom packages only after validation.
7. Document ownership and rollback for each business application.

:::warning
Do not blindly replace existing production Win32 apps with catalog versions. Validate detection rules, install context, reboot behavior, dependencies, supersedence, and user experience first.
:::

### Remote Help

Remote Help provides cloud-based remote assistance with role-based access controls.

Enterprise implementation points:

| Area | Recommendation |
|---|---|
| RBAC | Limit who can initiate sessions, elevate sessions, or view devices |
| Audit | Review remote assistance logs regularly |
| Help desk process | Update ticket templates to include session ID and user consent evidence |
| Conditional Access | Align administrator access with privileged access controls |
| Pilot | Start with IT-managed devices before expanding to general users |

Remote Help is most valuable when it is integrated into a broader support process, not treated as a standalone remote control tool.

### Advanced Analytics

Advanced Analytics helps IT teams understand endpoint health, performance, and user experience signals.

Useful enterprise scenarios include:

| Scenario | Example use |
|---|---|
| Device health review | Identify unstable or underperforming endpoints |
| Battery health | Prioritize device refresh decisions |
| Query-based investigation | Use device-level data to troubleshoot at scale |
| Anomaly detection | Detect unusual endpoint behavior patterns |
| Executive reporting | Translate endpoint experience into business impact |

Advanced Analytics should be owned jointly by endpoint engineering and service management. The real value is not only seeing device data, but using it to drive remediation campaigns.

### Microsoft Tunnel for Mobile Application Management

Microsoft Tunnel for MAM extends Microsoft Tunnel VPN access to supported unenrolled iOS and Android devices so users can access on-premises resources through managed apps.

This is important for BYOD scenarios where the organization wants secure app-level access without taking full device management control.

Key considerations:

| Area | Consideration |
|---|---|
| BYOD strategy | Decide whether users need MAM-only or full MDM enrollment |
| App support | Validate Microsoft Edge and line-of-business app requirements |
| Identity | Use Microsoft Entra ID and Conditional Access controls |
| Network | Confirm Tunnel gateway capacity, routing, firewall, and proxy requirements |
| Data protection | Pair Tunnel for MAM with App Protection Policies |

## Administrator Readiness Checklist

Before enabling these capabilities broadly, endpoint teams should complete the following readiness work.

### Licensing and Tenant Validation

Validate licensing in **Microsoft 365 admin center**:

1. Go to **Billing** > **Licenses**.
2. Confirm Microsoft 365 E5 subscription availability.
3. Review assigned and available license counts.
4. Go to **Billing** > **Your products**.
5. Confirm product status and tenant availability.

Validate Intune capability availability in **Microsoft Intune admin center**:

1. Go to **Tenant administration**.
2. Open **Intune add-ons**.
3. Review capability status under available add-ons.
4. Confirm whether each capability shows as active, eligible, trial, or unavailable.
5. Review **Tenant administration** > **Tenant status** > **Tenant details**.

You can also use Microsoft Graph PowerShell for a quick subscribed SKU review:

```powershell
Connect-MgGraph -Scopes "Organization.Read.All","Directory.Read.All","User.Read.All"

Get-MgSubscribedSku |
    Select-Object SkuPartNumber,
                  ConsumedUnits,
                  @{Name = "EnabledUnits"; Expression = { $_.PrepaidUnits.Enabled }},
                  @{Name = "SuspendedUnits"; Expression = { $_.PrepaidUnits.Suspended }},
                  @{Name = "WarningUnits"; Expression = { $_.PrepaidUnits.Warning }} |
    Sort-Object SkuPartNumber
```

To inspect service plans under Microsoft 365 E5 or related SKUs:

```powershell
Connect-MgGraph -Scopes "Organization.Read.All"

Get-MgSubscribedSku |
    Where-Object { $_.SkuPartNumber -match "E5|SPE" } |
    Select-Object SkuPartNumber -ExpandProperty ServicePlans |
    Select-Object ServicePlanName, ProvisioningStatus, AppliesTo |
    Sort-Object ServicePlanName
```

:::tip
SKU names and service plan names can vary depending on agreement type, geography, tenant history, and licensing channel. Use your tenant output as the source of truth.
:::

### RBAC and Administrative Roles

Review administrative access before enabling advanced capabilities.

| Capability | Suggested admin owner |
|---|---|
| Endpoint Privilege Management | Endpoint Security Manager / Endpoint Privilege Manager |
| Cloud PKI | Intune Administrator plus PKI/security architecture owner |
| Enterprise Application Management | Application Manager / Endpoint application owner |
| Remote Help | Help desk lead and Intune RBAC administrator |
| Advanced Analytics | Endpoint engineering and service management |
| Tunnel for MAM | Network, identity, and mobile endpoint teams |

Avoid assigning broad roles such as **Global Administrator** for daily endpoint operations. Use least privilege RBAC and separate implementation duties from approval duties where possible.

### Change Management

For enterprise environments, treat this as a formal platform change.

Recommended change records:

| Change type | Example |
|---|---|
| Licensing activation review | Confirm E5 tenant capability availability |
| EPM pilot | Enable EPM reporting and pilot elevation rules |
| Cloud PKI design | Create non-production CA hierarchy and test certificate profiles |
| EAM pilot | Deploy catalog app to IT pilot group |
| Remote Help rollout | Enable support teams and define support workflow |
| Analytics adoption | Create endpoint health reporting cadence |

Each change should include:

- Business justification
- Target groups
- Rollback plan
- Monitoring plan
- Evidence screenshots
- Known limitations
- Support contacts
- Approval and sign-off

## Recommended Enterprise Adoption Roadmap

### Phase 1: Discovery and Licensing Confirmation

Start with visibility.

Tasks:

- Confirm Microsoft 365 E5 licensing status.
- Review **Message Center** notifications.
- Check **Intune add-ons** availability.
- Export current endpoint management tool inventory.
- Identify duplicate third-party tools.
- Map existing spend against newly available Intune capabilities.

Deliverables:

- Licensing validation report
- Capability availability matrix
- Current tool overlap assessment
- Initial risk register

### Phase 2: Pilot Low-Risk Capabilities

Start with capabilities that improve visibility or support operations.

Good pilot candidates:

- Advanced Analytics
- Remote Help
- Enterprise App Catalog deployment for a non-critical app

Avoid starting with high-impact certificate or privilege changes until the team has completed design validation.

Deliverables:

- Pilot group definition
- Help desk runbook
- App deployment test evidence
- Analytics baseline dashboard

### Phase 3: Privilege and Application Modernization

Move into EPM and application lifecycle improvement.

Tasks:

- Enable EPM reporting.
- Identify local admin users.
- Build persona-based elevation rules.
- Pilot removal of standing local admin rights.
- Identify Enterprise App Catalog replacement candidates.
- Document app ownership and rollback.

Deliverables:

- EPM pilot design
- Elevation rule catalogue
- Local admin reduction plan
- Application modernization plan

### Phase 4: Certificate Modernization

Introduce Microsoft Cloud PKI only after architecture review.

Tasks:

- Identify relying parties.
- Decide between Microsoft Cloud PKI root CA and BYOCA.
- Build test CA hierarchy.
- Create trusted certificate profiles.
- Create SCEP certificate profiles.
- Validate Wi-Fi, VPN, and application authentication.
- Test revocation and renewal behavior.

Deliverables:

- PKI design document
- Certificate profile matrix
- Relying party trust checklist
- Migration and rollback plan

### Phase 5: Production Scale-Out

Scale only after operational proof.

Tasks:

- Expand by ring.
- Monitor incidents.
- Review Intune reports.
- Update support documentation.
- Retire duplicate tooling only after business sign-off.
- Track cost avoidance and operational improvement.

Deliverables:

- Production rollout plan
- Operational acceptance checklist
- Tool retirement decision log
- Executive summary report

## Common Pitfalls

### Pitfall 1: Treating Licensing Availability as Production Readiness

A capability being included in Microsoft 365 E5 does not mean the environment is ready to use it. EPM, Cloud PKI, EAM, and Tunnel for MAM all require technical design, pilot validation, RBAC planning, and operational documentation.

### Pitfall 2: Removing Third-Party Tools Too Quickly

Some third-party tools may still provide features, integrations, or platform coverage that your organization needs. Use a structured comparison before retirement.

Assessment areas:

| Area | Question |
|---|---|
| Feature parity | Does the Intune capability meet all required use cases? |
| Platform support | Does it support Windows, macOS, iOS, Android, Linux, or specialty devices as required? |
| Reporting | Does it provide equivalent audit evidence? |
| Integration | Does it integrate with ITSM, SIEM, and security operations workflows? |
| Support model | Can the internal team support it at scale? |

### Pitfall 3: Designing EPM Without User Personas

EPM fails when administrators create generic rules without understanding user workflows. Developers, finance users, IT staff, engineers, and executives usually have different elevation requirements.

### Pitfall 4: Treating Cloud PKI as a Simple Replacement for NDES

Cloud PKI can simplify infrastructure, but certificate trust is still architecture-sensitive. Relying parties, CRL access, EKU design, certificate profile targeting, and migration sequencing must be tested carefully.

### Pitfall 5: Ignoring Message Center and Rollout Timing

Microsoft notes that eligible customers receive Message Center notifications and access by August 2026. Large tenants should track rollout status and avoid committing to fixed production dates until tenant availability is confirmed.

## Architectural Considerations for Microsoft 365 E5 Environments

### Identity and Conditional Access

Advanced Intune capabilities should align with Microsoft Entra ID and Conditional Access.

Examples:

| Capability | Identity dependency |
|---|---|
| Remote Help | Role-based access and administrator identity governance |
| Tunnel for MAM | Modern authentication, Conditional Access, App Protection Policies |
| EPM | Admin approval workflows and least privilege operations |
| Cloud PKI | User/device attributes used in certificate subject names |
| Advanced Analytics | Role-scoped access to endpoint insights |

### Security Operations

Endpoint teams should coordinate with security operations before enabling EPM and Cloud PKI.

Security questions:

- Who reviews elevation trends?
- Are unmanaged elevation attempts sent to security reporting?
- Are certificate issuance and revocation events reviewed?
- How are high-risk endpoints prioritized?
- How does Defender for Endpoint risk feed into endpoint actions?

### ITSM Integration

Update service desk processes for:

- EPM support-approved elevation requests
- Remote Help session recording or audit requirements
- Enterprise App Catalog app request workflow
- Certificate-related incident templates
- Device health escalation paths

### Reporting and Evidence

For portfolio, audit, and enterprise governance, capture evidence from:

- **Microsoft 365 admin center** > **Billing** > **Licenses**
- **Microsoft Intune admin center** > **Tenant administration** > **Intune add-ons**
- **Microsoft Intune admin center** > **Endpoint security** > **Endpoint Privilege Management**
- **Microsoft Intune admin center** > **Tenant administration** > **Cloud PKI**
- **Microsoft Intune admin center** > **Apps** > **Enterprise App Catalog**
- **Microsoft Intune admin center** > **Tenant administration** > **Remote Help**
- **Microsoft Intune admin center** > **Reports** > endpoint analytics and advanced analytics views

## Practical Implementation Guidance

### For Existing Microsoft 365 E5 Tenants

Recommended immediate actions:

1. Review **Message Center** for licensing and activation notices.
2. Validate capability status under **Tenant administration** > **Intune add-ons**.
3. Create an Intune Suite capability matrix for your tenant.
4. Identify existing tools that overlap with EPM, PKI, app management, remote support, and analytics.
5. Build pilot groups in Microsoft Entra ID.
6. Assign least privilege Intune RBAC roles.
7. Create separate implementation plans for EPM, Cloud PKI, EAM, Remote Help, and Advanced Analytics.
8. Start with discovery and reporting before enforcement.

### For Organizations Currently Buying Standalone Add-Ons

Do not cancel anything immediately. Instead:

1. Confirm Microsoft 365 E5 eligibility.
2. Confirm tenant activation.
3. Compare currently purchased standalone capabilities against newly included E5 capabilities.
4. Review contract renewal dates.
5. Validate production feature parity.
6. Move pilot workloads first.
7. Retire duplicate licensing only after procurement, security, and operations sign-off.

### For Microsoft 365 E3 Tenants Considering E5

This licensing update strengthens the business case for Microsoft 365 E5 if the organization needs:

- Endpoint Privilege Management
- Cloud PKI
- Enterprise Application Management
- Microsoft Defender XDR integration
- Advanced security operations
- Stronger endpoint and identity security consolidation

The E3-to-E5 business case should include not only license cost, but also reduced tool sprawl, simplified operations, faster endpoint remediation, reduced local admin risk, and improved certificate lifecycle management.

## Suggested Evidence for a Portfolio Blog or Enterprise Design

If you are documenting this as part of a professional endpoint management portfolio, capture the following screenshots:

| Evidence | Screenshot |
|---|---|
| Licensing validation | **Microsoft 365 admin center** > **Billing** > **Licenses** |
| Tenant products | **Microsoft 365 admin center** > **Billing** > **Your products** |
| Intune add-ons | **Microsoft Intune admin center** > **Tenant administration** > **Intune add-ons** |
| EPM policy | **Endpoint security** > **Endpoint Privilege Management** |
| EPM reports | EPM elevation report or managed elevation report |
| Cloud PKI CA | **Tenant administration** > **Cloud PKI** |
| Certificate profile | Device configuration trusted certificate or SCEP profile |
| Enterprise App Catalog | **Apps** > add app from **Enterprise App Catalog** |
| Remote Help | Remote Help settings and RBAC role assignment |
| Advanced Analytics | Endpoint analytics or advanced analytics report view |

## Final Thoughts

The July 2026 Microsoft 365 E5 licensing update is a major shift for enterprise endpoint management. Microsoft is moving more advanced endpoint security and operations capabilities into the Microsoft 365 licensing stack, which gives E5 customers a stronger reason to standardize around Intune as the central endpoint management platform.

The best organizations will not treat this as a simple feature activation. They will treat it as an opportunity to modernize endpoint architecture: reduce standing privilege, simplify certificate infrastructure, improve third-party app management, strengthen remote support, and build a more data-driven endpoint operations model.

For endpoint administrators, this is the right time to review licensing, map overlapping tools, design pilots, and produce evidence-based implementation plans. The value is not only in having the capabilities. The value is in operationalizing them safely, with governance, monitoring, rollback, and measurable business outcomes.

## References

- [Advanced Microsoft Intune capabilities now available in Microsoft 365 E3 and E5](https://techcommunity.microsoft.com/blog/microsoftintuneblog/advanced-microsoft-intune-capabilities-now-available-in-microsoft-365-e3-and-e5/4529335)
- [Microsoft 365 adds advanced Microsoft Intune solutions at scale](https://techcommunity.microsoft.com/blog/microsoftintuneblog/microsoft-365-adds-advanced-microsoft-intune-solutions-at-scale/4474272)
- [Microsoft Intune advanced capabilities](https://learn.microsoft.com/en-us/intune/fundamentals/advanced-capabilities)
- [Microsoft Intune licensing](https://learn.microsoft.com/en-us/intune/fundamentals/licensing)
- [Assign Microsoft Intune licenses](https://learn.microsoft.com/en-us/intune/fundamentals/assign-licenses)
- [Deploy Endpoint Privilege Management with Microsoft Intune](https://learn.microsoft.com/en-us/intune/epm/deploy)
- [Microsoft Intune Enterprise Application Management](https://learn.microsoft.com/en-us/intune/app-management/deployment/enterprise-app-catalog)
- [Configure root and issuing CA for Microsoft Cloud PKI](https://learn.microsoft.com/en-us/intune/cloud-pki/configure-ca)
- [Microsoft Cloud PKI deployment models](https://learn.microsoft.com/en-us/intune/cloud-pki/deployment-models)
- [Microsoft Tunnel for Mobile Application Management](https://learn.microsoft.com/en-us/intune/device-security/microsoft-tunnel/mam)
