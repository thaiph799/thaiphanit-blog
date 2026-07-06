import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const strengths = [
  'Microsoft 365 administration and tenant operations',
  'Intune endpoint management, compliance, and app protection',
  'Microsoft Entra ID, Conditional Access, MFA, and Zero Trust access control',
  'Azure networking, hub-spoke architecture, VPN, routing, DNS, NSG, and firewall concepts',
  'On-prem infrastructure fundamentals: AD DS, DNS, DHCP, file access, and troubleshooting',
  'SCCM / MECM client-side troubleshooting and log analysis',
];

export default function Recruiters(): React.ReactElement {
  return (
    <Layout
      title="For Recruiters"
      description="Recruiter overview for Thai Phan IT portfolio."
    >
      <main className="tpPage">
        <section className="tpPageHero">
          <p className="tpEyebrow">For Recruiters</p>
          <h1>Evidence-based portfolio for Microsoft cloud, endpoint, network, and IT operations roles.</h1>
          <p>
            This page summarizes the role alignment, strengths, certifications, and portfolio evidence available on this website.
          </p>
        </section>

        <section className="tpContentGrid">
          <article className="tpContentCard">
            <h2>Target Roles</h2>
            <ul>
              <li>IT Support / Desktop Support Engineer</li>
              <li>System Administrator</li>
              <li>Microsoft 365 Administrator</li>
              <li>Intune / Endpoint Administrator</li>
              <li>Modern Workplace Engineer</li>
              <li>Azure Network / Infrastructure Support</li>
              <li>Junior Security Administrator</li>
            </ul>
          </article>

          <article className="tpContentCard">
            <h2>Certifications</h2>
            <ul>
              <li>AZ-104 — Azure Administrator Associate</li>
              <li>AZ-700 — Azure Network Engineer Associate</li>
            </ul>
            <p>
              Current portfolio learning direction: MS-102, MD-102, Microsoft 365 E5, Intune, Defender XDR, Purview, and enterprise troubleshooting.
            </p>
          </article>
        </section>

        <section className="tpSectionNarrow">
          <h2>Technical Strengths</h2>
          <div className="tpPillGrid tpPillGridLight">
            {strengths.map((item) => (
              <span className="tpPillLight" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="tpBlogCta">
          <h2>Fast review links</h2>
          <p>
            Review the main portfolio track, network track, and downloadable resume.
          </p>
          <div className="tpButtonRowCenter">
            <Link className="button button--primary" to="/docs/portfolio/intro">
              Portfolio
            </Link>
            <Link className="button button--secondary" to="/docs/network/intro">
              Network
            </Link>
            <Link className="button button--secondary" to="/resume">
              Resume
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
