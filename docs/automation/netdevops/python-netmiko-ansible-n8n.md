---
title: Python, Netmiko, Ansible, and N8N
description: Network automation workflow for device collection, parsing, reporting, and orchestration.
sidebar_position: 2
certification_mapped: [CCNP]
difficulty_level: Professional
---

# Python, Netmiko, Ansible, and N8N

## Example Workflow

```python
from netmiko import ConnectHandler

device = {
    "device_type": "cisco_ios",
    "host": "switch01.example.local",
    "username": "admin",
    "password": "REPLACE_ME",
}

with ConnectHandler(**device) as conn:
    output = conn.send_command("show version")
    print(output)
```
