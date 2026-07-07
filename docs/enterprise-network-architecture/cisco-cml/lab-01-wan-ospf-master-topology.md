---
title: Lab 01 - WAN OSPF Master Topology
description: Cisco CML enterprise WAN OSPF master topology.
sidebar_position: 1
---

# Lab 01 - WAN OSPF Master Topology

## Scenario

Design a multi-site enterprise WAN using OSPF as the internal routing protocol. The lab focuses on clean addressing, predictable route propagation, and validation across site routers.

## Design Goals

- Build a repeatable hub-and-branch WAN topology.
- Use loopback interfaces for router identity and stable protocol operations.
- Separate LAN, transit, and management addressing.
- Validate OSPF adjacency, route learning, and end-to-end reachability.

## Validation Evidence

| Evidence | Purpose |
|---|---|
| OSPF neighbor table | Confirms routing adjacencies are established |
| Routing table | Confirms expected site routes are learned |
| Ping and traceroute | Confirms data-plane reachability |
| Failure test | Shows behavior during link or device interruption |

## Interview Talking Points

- Why OSPF area design matters in enterprise networks.
- How loopbacks improve router identity and troubleshooting.
- How to distinguish a control-plane issue from a data-plane issue.

