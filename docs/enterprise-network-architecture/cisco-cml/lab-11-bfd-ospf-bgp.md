---
title: Lab 11 - BFD, OSPF, and BGP Resiliency
description: Fast failure detection and routing resiliency using BFD with OSPF and BGP.
sidebar_position: 11
---

# Lab 11 - BFD, OSPF, and BGP Resiliency

## Scenario

Improve routing convergence by using Bidirectional Forwarding Detection with OSPF and BGP. The lab focuses on resiliency, detection timers, and operational impact.

## Design Goals

- Compare default routing protocol failure detection with BFD-assisted detection.
- Validate neighbor state changes during link failure.
- Measure practical convergence behavior.
- Document rollback considerations for production environments.

## Validation Evidence

| Evidence | Purpose |
|---|---|
| BFD session state | Confirms fast detection is active |
| OSPF neighbor state | Confirms IGP reacts to failure |
| BGP neighbor state | Confirms edge routing reacts to failure |
| Before/after timing notes | Shows the operational value of BFD |

## Interview Talking Points

- BFD is a detection mechanism, not a routing protocol.
- Aggressive timers can create instability if the platform or link quality cannot support them.
- Resiliency design should include monitoring, change control, and rollback steps.

