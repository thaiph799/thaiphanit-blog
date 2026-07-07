---
title: CML Lab Environment
description: Cisco CML lab environment standards for the enterprise network architecture track.
sidebar_position: 3
---

# CML Lab Environment

## Lab Purpose

Cisco CML is used to validate enterprise routing, WAN, resiliency, and troubleshooting scenarios in a repeatable lab environment.

## Baseline Topology Standards

| Area | Standard |
|---|---|
| Device naming | Site-role-number format, for example `BKK-RTR-01` |
| Management | Dedicated management subnet per lab |
| Addressing | Documented loopbacks, transit links, LAN segments, and service networks |
| Routing | Clear separation between underlay, WAN, and service routes |
| Evidence | Topology screenshot, interface state, routing table, protocol neighbor state |

## Evidence Checklist

- Topology diagram or CML screenshot.
- IP addressing table.
- Routing protocol neighbor output.
- Route table for each major routing domain.
- Failure test and recovery observation.
- Short explanation of what the lab proves.

## Operational Notes

Each lab should be written as if it will be reviewed during a technical interview. The page should explain the intent first, then show the configuration and validation evidence.

