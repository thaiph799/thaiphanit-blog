import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Contact(): React.ReactElement {
  return (
    <Layout
      title="Contact"
      description="Contact Phan Hoang Thai for Microsoft 365, Endpoint Management, Azure, and Security portfolio.">
      <main style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Contact</h1>

        <p>
          Thank you for visiting my technical portfolio. This website documents my
          hands-on work across Microsoft 365, Intune, Entra ID, Azure Networking,
          Endpoint Management, and Security.
        </p>

        <h2>Connect with me</h2>

        <ul>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/thaiph"
              target="_blank"
              rel="noopener noreferrer">
              View LinkedIn Profile
            </a>
          </li>

          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/thaiph799"
              target="_blank"
              rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </li>

          <li>
            <strong>Resume:</strong>{' '}
            <Link to="/resume">
              View Resume
            </Link>
          </li>
        </ul>

        <h2>Focus Areas</h2>

        <ul>
          <li>Microsoft 365 Administration</li>
          <li>Microsoft Intune and Endpoint Management</li>
          <li>Microsoft Entra ID and Conditional Access</li>
          <li>Microsoft Defender XDR</li>
          <li>Microsoft Purview</li>
          <li>Azure Networking</li>
          <li>SCCM / MECM Troubleshooting</li>
        </ul>
      </main>
    </Layout>
  );
}