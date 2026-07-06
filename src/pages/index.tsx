import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

type Card = {
  title: string;
  category: string;
  description: string;
  link: string;
};

const featuredTracks: Card[] = [
  {
    title: 'Microsoft 365 E5 Global Enterprise Portfolio',
    category: 'Microsoft 365',
    description:
      'Enterprise-style deployment scenario covering identity, endpoint management, threat protection, compliance, governance, and operational readiness.',
    link: '/docs/portfolio/m365-e5/global-enterprise-scenario',
  },
  {
    title: 'Intune & Endpoint Management',
    category: 'Endpoint',
    description:
      'BYOD protection, Windows compliance, security baselines, app protection, configuration profiles, Autopilot concepts, and device access control.',
    link: '/docs/portfolio/intune-endpoint/intune-portfolio-overview',
  },
  {
    title: 'Network & Infrastructure',
    category: 'Network',
    description:
      'On-prem network foundation, Windows Server DNS/DHCP, AD network dependency, hybrid VPN, Azure hub-spoke, firewall, routing, and troubleshooting.',
    link: '/docs/network/intro',
  },
  {
    title: 'Identity, Security & Zero Trust',
    category: 'Security',
    description:
      'Microsoft Entra ID, Conditional Access, MFA, break-glass design, Defender XDR, incident response, Purview, and security operations workflows.',
    link: '/docs/portfolio/identity-zero-trust/identity-zero-trust-overview',
  },
];

const focusAreas = [
  'Microsoft 365 Administration',
  'Microsoft Intune',
  'Microsoft Entra ID',
  'Conditional Access',
  'Defender XDR',
  'Microsoft Purview',
  'SCCM / MECM',
  'Windows Endpoint Security',
  'On-Prem Network',
  'Windows Server DNS / DHCP',
  'Active Directory Network Dependency',
  'Hybrid Connectivity',
  'Azure Hub-Spoke Network',
  'Azure Firewall / NSG / UDR',
  'Private Link / Private DNS',
  'Network Watcher Troubleshooting',
];

const proofPoints = [
  'AZ-104 Azure Administrator Associate',
  'AZ-700 Azure Network Engineer Associate',
  'Microsoft 365 / Intune portfolio labs',
  'Network on-prem to Azure hybrid lab track',
];

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Microsoft 365, Intune, Azure Network & Security Portfolio"
      description="Thai Phan IT is a professional technical portfolio covering Microsoft 365, Intune, Endpoint Management, Azure Networking, On-Prem Infrastructure, Security, and enterprise IT troubleshooting."
    >
      <header className="tpHero">
        <div className="tpHeroInner">
          <div className="tpHeroText">
            <p className="tpEyebrow">Microsoft Cloud • Endpoint • Network • Security</p>
            <h1>Building an enterprise-ready Microsoft infrastructure portfolio.</h1>
            <p className="tpHeroDescription">
              I document hands-on labs, architecture notes, troubleshooting workflows, and recruiter-ready evidence across Microsoft 365, Intune, Entra ID, Azure Networking, on-prem infrastructure, Defender XDR, Purview, and SCCM/MECM.
            </p>
            <div className="tpHeroButtons">
              <Link className="button button--primary button--lg" to="/docs/portfolio/intro">
                View Portfolio
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/network/intro">
                Explore Network Track
              </Link>
              <Link className="button button--outline button--lg button--light" to="/resume">
                Resume
              </Link>
            </div>
          </div>

          <aside className="tpHeroCard">
            <p className="tpCardLabel">Featured Track</p>
            <h2>On-Prem → Hybrid → Azure</h2>
            <p>
              A structured network and infrastructure portfolio that connects Windows Server, AD DS, DNS/DHCP, VPN, Azure hub-spoke design, firewall routing, and Microsoft 365 cloud access.
            </p>
            <div className="tpMetricGrid">
              <div>
                <strong>AZ-700</strong>
                <span>Network focus</span>
              </div>
              <div>
                <strong>AZ-104</strong>
                <span>Azure admin</span>
              </div>
              <div>
                <strong>Intune</strong>
                <span>Endpoint labs</span>
              </div>
              <div>
                <strong>M365</strong>
                <span>Enterprise portfolio</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="tpSection">
          <div className="tpSectionHeader">
            <p className="tpEyebrow">Portfolio Tracks</p>
            <h2>Structured around real enterprise responsibilities.</h2>
            <p>
              The site is organized as a technical evidence portfolio, not just a blog. Each track is designed to show business context, architecture, implementation, verification, troubleshooting, and interview explanation.
            </p>
          </div>

          <div className="tpCardGrid">
            {featuredTracks.map((track) => (
              <article className="tpLabCard" key={track.title}>
                <span>{track.category}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <Link to={track.link}>Open track →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tpDarkSection">
          <div className="tpSectionHeader tpLightText">
            <p className="tpEyebrow">Coverage</p>
            <h2>What this site covers</h2>
            <p>
              Focused on Microsoft enterprise administration, endpoint management, cloud and on-prem networking, security operations, and practical troubleshooting.
            </p>
          </div>

          <div className="tpPillGrid">
            {focusAreas.map((item) => (
              <span className="tpPill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="tpSection">
          <div className="tpTwoColumn">
            <div>
              <p className="tpEyebrow">Recruiter Overview</p>
              <h2>Designed for real interviews and real IT operations.</h2>
              <p>
                This portfolio demonstrates how I approach Microsoft 365 administration, endpoint security, Azure networking, on-prem infrastructure, and enterprise troubleshooting using repeatable implementation workflows.
              </p>
              <p>
                Every major lab follows the same operating logic: business problem, architecture, configuration, verification, troubleshooting, evidence, and interview talking points.
              </p>
              <div className="tpButtonRow">
                <Link className="button button--primary" to="/recruiters">
                  For Recruiters
                </Link>
                <Link className="button button--secondary" to="/about">
                  About Me
                </Link>
              </div>
            </div>

            <aside className="tpProfileBox">
              <h3>Phan Hoang Thai</h3>
              <p>Microsoft 365 | Endpoint Management | Azure Network | Security | IT Support</p>
              <ul>
                {proofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="tpSection">
          <div className="tpBlogCta">
            <p className="tpEyebrow">Latest Writing</p>
            <h2>Technical Blog</h2>
            <p>
              Notes, lab explanations, troubleshooting workflows, and learning reflections from my Microsoft cloud, endpoint, and infrastructure journey.
            </p>
            <Link className="button button--primary" to="/blog">
              Explore Articles
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
