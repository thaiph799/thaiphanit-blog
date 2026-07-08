import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const focusAreas = [
  'Microsoft 365 administration',
  'Microsoft Intune and endpoint management',
  'Microsoft Entra ID and Conditional Access',
  'Azure networking and hybrid connectivity',
  'On-prem network services: DNS, DHCP, AD DS, file access',
  'Microsoft Defender XDR and security operations',
  'Microsoft Purview and data protection',
  'Configuration Manager troubleshooting',
];

export default function About(): React.ReactElement {
  return (
    <Layout
      title="About"
      description="About Phan Hoang Thai and the Phan Hoang Thai technical portfolio."
    >
      <main className="tpPage">
        <section className="tpPageHero">
          <p className="tpEyebrow">About Phan Hoang Thai</p>
          <h1>Microsoft cloud, endpoint, network, and security portfolio.</h1>
          <p>
            My name is Phan Hoang Thai. I am building a professional technical portfolio focused on Microsoft 365 cloud operations, endpoint modernization, Azure networking, on-prem infrastructure, security, and enterprise IT operations.
          </p>
        </section>

        <section className="tpContentGrid">
          <article className="tpContentCard">
            <h2>Professional Direction</h2>
            <p>
              This website documents hands-on labs, architecture notes, troubleshooting workflows, and evidence-based projects for Microsoft 365, endpoint management, Azure network, IT support, and modern workplace roles.
            </p>
            <p>
              The goal is to show not only what I studied, but how I think through real operational scenarios: business impact, technical implementation, verification, logs, troubleshooting, and documentation.
            </p>
          </article>

          <article className="tpContentCard">
            <h2>Verified Certifications</h2>
            <ul>
              <li>Microsoft Certified: Azure Administrator Associate - AZ-104</li>
              <li>Microsoft Certified: Azure Network Engineer Associate - AZ-700</li>
            </ul>

            <h3>Active Portfolio Learning Tracks</h3>
            <ul>
              <li>Microsoft 365 Administrator / MS-102 direction</li>
              <li>Endpoint Administrator / MD-102 direction</li>
              <li>Intune, Entra ID, Conditional Access, Defender XDR, and Purview labs</li>
            </ul>
          </article>
        </section>

        <section className="tpSectionNarrow">
          <h2>Focus Areas</h2>
          <div className="tpPillGrid tpPillGridLight">
            {focusAreas.map((item) => (
              <span className="tpPillLight" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="tpBlogCta">
          <h2>Explore the portfolio</h2>
          <p>
            Start with the portfolio overview or the Network track to see the complete on-prem, hybrid, and Azure infrastructure structure.
          </p>
          <div className="tpButtonRowCenter">
            <Link className="button button--primary" to="/docs/enterprise-networking/intro">
              Portfolio Roadmap
            </Link>
            <Link className="button button--secondary" to="/docs/hybrid-cloud/intro">
              Network Track
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
