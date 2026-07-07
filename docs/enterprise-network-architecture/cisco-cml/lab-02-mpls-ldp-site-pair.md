---
title: Lab 02 - MPLS LDP Site Pair
description: MPLS and LDP validation between enterprise site pairs.
sidebar_position: 2
---

# Lab 02 - MPLS LDP Site Pair

## Scenario

Build a small provider-style transport network to understand MPLS label distribution and site-to-site forwarding behavior.

## Design Goals

- Establish IGP reachability between provider routers.
- Enable MPLS forwarding on transport links.
- Validate LDP neighbor relationships and label bindings.
- Explain the packet path between customer edge sites.

## Validation Evidence

| Evidence | Purpose |
|---|---|
| LDP neighbor output | Confirms label distribution sessions |
| MPLS forwarding table | Confirms labels are assigned to prefixes |
| IGP routing table | Confirms underlay reachability |
| End-to-end test | Confirms forwarding across the transport network |

## Operational Notes

The lab is designed to prove conceptual depth, not only command memorization. The final write-up should explain why underlay reachability is required before MPLS label switching can work.

