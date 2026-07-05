---
title: Intune BYOD Data Protection
description: Protect corporate data on personal devices using Microsoft Intune App Protection Policy.
---

# Intune BYOD Data Protection

## 1. Business Problem

The organization allows employees to access corporate email and files from personal mobile devices. However, unmanaged devices introduce data leakage risks because users may copy corporate data to personal apps or save files outside company-controlled locations.

## 2. Solution Overview

This lab implements Microsoft Intune App Protection Policy to protect corporate data in Outlook, Teams, and OneDrive without requiring full device enrollment.

## 3. Microsoft Technologies Used

- Microsoft Intune
- Microsoft Entra ID
- App Protection Policy
- Conditional Access
- Outlook
- Teams
- OneDrive

## 4. Implementation Steps

### Step 1: Create a pilot user group

Evidence placeholder:

![Pilot group evidence](/evidence/intune-byod/pilot-group.png)

### Step 2: Create App Protection Policy

Evidence placeholder:

![App protection policy evidence](/evidence/intune-byod/app-protection-policy.png)

### Step 3: Assign policy to pilot users

Evidence placeholder:

![Assignment evidence](/evidence/intune-byod/assignment.png)

### Step 4: Test Outlook, Teams, and OneDrive

Evidence placeholder:

![Testing evidence](/evidence/intune-byod/testing.png)

## 5. Verification

Expected result:

- Corporate data cannot be copied to unmanaged apps.
- Save As is restricted.
- PIN or biometric access is required.
- Policy applies only to targeted pilot users.

## 6. Troubleshooting

Check:

- Intune app protection policy status
- User group assignment
- App sign-in account
- Conditional Access report-only result
- Device platform targeting

## 7. Interview Talking Points

This lab demonstrates how to protect corporate data on BYOD devices without fully managing the personal device. It balances user privacy, security, and business productivity.