---
title: Virtual WAN, VPN Gateway, and Azure Firewall
description: Hybrid connectivity architecture with routing and firewall control points.
sidebar_position: 2
certification_mapped: [AZ-700]
difficulty_level: Associate
---

# Virtual WAN, VPN Gateway, and Azure Firewall

## Architecture

```mermaid
flowchart LR
  Branch[Branch Site] --> VPN[VPN Gateway]
  VPN --> VWAN[Virtual WAN Hub]
  VWAN --> Firewall[Azure Firewall]
  Firewall --> Spoke[Application Spoke VNet]
```
