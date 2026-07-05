import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Microsoft 365 Endpoint Security Portfolio"
      description="Phan Hoang Thai - Microsoft 365, Intune, Azure, Endpoint Security Portfolio">
      <main style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>Phan Hoang Thai</h1>
          <h2>Microsoft 365 | Endpoint Management | Azure Network | Security Portfolio</h2>
          <p style={{ fontSize: '1.2rem' }}>
            I document enterprise-style labs, troubleshooting workflows, and technical projects
            across Microsoft Intune, Entra ID, Conditional Access, Defender XDR, Purview,
            Azure Networking, and SCCM/MECM.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Link className="button button--primary button--lg" to="/docs/portfolio/intune-byod-data-protection">
              View Portfolio
            </Link>
            <Link className="button button--secondary button--lg" to="/blog" style={{ marginLeft: '1rem' }}>
              Read Blog
            </Link>
          </div>
        </section>

        <section>
          <h2>Featured Portfolio Projects</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            <div>
              <h3>Microsoft 365 E5 Global Enterprise</h3>
              <p>Enterprise scenario covering identity, endpoint, security, compliance, and governance.</p>
            </div>

            <div>
              <h3>Intune BYOD Data Protection</h3>
              <p>Protect corporate data in Outlook, Teams, and OneDrive using App Protection Policy.</p>
            </div>

            <div>
              <h3>Zero Trust Access Control</h3>
              <p>Conditional Access, MFA, compliant device access, and break-glass account design.</p>
            </div>

            <div>
              <h3>Windows 11 Security Baseline</h3>
              <p>Endpoint hardening using Intune security baseline, BitLocker, Defender, and compliance policy.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}