import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const featuredLabs = [
  {
    title: 'Microsoft 365 E5 Global Enterprise Portfolio',
    category: 'Portfolio',
    description:
      'Enterprise-style Microsoft 365 E5 deployment scenario covering identity, endpoint, security, compliance, and governance.',
    link: '/docs/portfolio/intro',
  },
  {
    title: 'Intune BYOD Data Protection',
    category: 'Intune',
    description:
      'Protect corporate data in Outlook, Teams, and OneDrive on personal devices using Intune App Protection Policy.',
    link: '/docs/portfolio/intro',
  },
  {
    title: 'Zero Trust Access Control',
    category: 'Identity & Security',
    description:
      'Conditional Access, MFA, compliant device access, report-only testing, and break-glass account design.',
    link: '/docs/portfolio/intro',
  },
  {
    title: 'Windows 11 Security Baseline',
    category: 'Endpoint Security',
    description:
      'Endpoint hardening with Intune security baseline, BitLocker, Microsoft Defender, and compliance policy.',
    link: '/docs/portfolio/intro',
  },
];

const focusAreas = [
  'Microsoft Intune',
  'Microsoft Entra ID',
  'Conditional Access',
  'Defender XDR',
  'Microsoft Purview',
  'Azure Networking',
  'SCCM / MECM',
  'Windows Endpoint Security',
];

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Microsoft 365 Endpoint Security Portfolio"
      description="Thai Phan IT - Microsoft 365, Intune, Azure, Endpoint Security, and SCCM portfolio.">
      <main>
        <section className="tpHero">
          <div className="tpHeroInner">
            <div className="tpHeroText">
              <p className="tpEyebrow">Microsoft 365 • Endpoint • Azure • Security</p>

              <h1>
                Building enterprise-ready Microsoft cloud and endpoint security skills.
              </h1>

              <p className="tpHeroDescription">
                I document hands-on labs, troubleshooting workflows, and real-world
                implementation notes across Microsoft Intune, Entra ID, Conditional Access,
                Defender XDR, Purview, Azure Networking, and SCCM/MECM.
              </p>

              <div className="tpHeroButtons">
                <Link className="button button--primary button--lg" to="/docs/portfolio/intro">
                  View Portfolio
                </Link>

                <Link className="button button--secondary button--lg" to="/blog">
                  Read Blog
                </Link>
              </div>
            </div>

            <div className="tpHeroCard">
              <p className="tpCardLabel">Featured Track</p>
              <h2>Microsoft 365 E5 Global Enterprise Portfolio</h2>
              <p>
                A structured portfolio project designed around enterprise identity,
                endpoint management, threat protection, compliance, and Zero Trust.
              </p>

              <div className="tpMetricGrid">
                <div>
                  <strong>MS-102</strong>
                  <span>Admin Expert</span>
                </div>
                <div>
                  <strong>MD-102</strong>
                  <span>Endpoint Admin</span>
                </div>
                <div>
                  <strong>AZ-104</strong>
                  <span>Azure Admin</span>
                </div>
                <div>
                  <strong>AZ-700</strong>
                  <span>Azure Network</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tpSection">
          <div className="tpSectionHeader">
            <p className="tpEyebrow">Technical Portfolio</p>
            <h2>Featured Hands-on Labs</h2>
            <p>
              Practical implementation scenarios written with business context,
              configuration steps, verification, evidence, and interview talking points.
            </p>
          </div>

          <div className="tpCardGrid">
            {featuredLabs.map((lab) => (
              <article className="tpLabCard" key={lab.title}>
                <span>{lab.category}</span>
                <h3>{lab.title}</h3>
                <p>{lab.description}</p>
                <Link to={lab.link}>Read lab →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tpDarkSection">
          <div className="tpSectionHeader tpLightText">
            <p className="tpEyebrow">Focus Areas</p>
            <h2>What this site covers</h2>
            <p>
              The content is focused on Microsoft enterprise administration,
              endpoint management, cloud security, and real-world IT operations.
            </p>
          </div>

          <div className="tpPillGrid">
            {focusAreas.map((item) => (
              <div className="tpPill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="tpSection tpTwoColumn">
          <div>
            <p className="tpEyebrow">About This Portfolio</p>
            <h2>Designed for real interviews and real IT operations.</h2>
            <p>
              This website is not only a personal blog. It is a professional evidence
              portfolio showing how I approach Microsoft 365, endpoint security,
              Azure networking, and enterprise troubleshooting.
            </p>

            <p>
              Every major lab is structured around the same logic: business problem,
              technical solution, implementation, verification, troubleshooting, and
              interview explanation.
            </p>

            <Link className="button button--primary" to="/resume">
              View Resume
            </Link>
          </div>

          <div className="tpProfileBox">
            <h3>Phan Hoang Thai</h3>
            <p>Microsoft 365 | Endpoint Management | Azure Network | Security</p>

            <ul>
              <li>AZ-104 Azure Administrator Associate</li>
              <li>AZ-700 Azure Network Engineer Associate</li>
              <li>Microsoft 365 / Intune portfolio labs</li>
              <li>SCCM / MECM troubleshooting notes</li>
            </ul>
          </div>
        </section>

        <section className="tpSection">
          <div className="tpSectionHeader">
            <p className="tpEyebrow">Latest Writing</p>
            <h2>Technical Blog</h2>
            <p>
              Notes, labs, troubleshooting workflows, and learning reflections from my
              Microsoft cloud and endpoint journey.
            </p>
          </div>

          <div className="tpBlogCta">
            <Link className="button button--secondary button--lg" to="/blog">
              Explore All Articles
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}