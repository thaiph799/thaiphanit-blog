import React from 'react';
import Layout from '@theme/Layout';

export default function About(): React.ReactElement {
  return (
    <Layout title="About">
      <main style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>About Me</h1>

        <p>
          My name is Phan Hoang Thai. I am building my career around Microsoft 365,
          Endpoint Management, Azure Networking, and enterprise IT operations.
        </p>

        <p>
          This website documents my hands-on labs, technical troubleshooting notes,
          certification journey, and enterprise-style portfolio projects.
        </p>

        <h2>Focus Areas</h2>
        <ul>
          <li>Microsoft Intune and Endpoint Management</li>
          <li>Microsoft Entra ID and Conditional Access</li>
          <li>Microsoft Defender XDR</li>
          <li>Microsoft Purview</li>
          <li>Azure Networking</li>
          <li>SCCM/MECM troubleshooting</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
          <li>Microsoft Certified: Azure Administrator Associate - AZ-104</li>
          <li>Microsoft Certified: Azure Network Engineer Associate - AZ-700</li>
          <li>Microsoft 365 Certified: Administrator Expert - MS-102</li>
          <li>Microsoft 365 Certified: Endpoint Administrator Associate - MD-102</li>
        </ul>
      </main>
    </Layout>
  );
}