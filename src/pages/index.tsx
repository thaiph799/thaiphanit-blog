import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

type Card = {
  title: string;
  category: string;
  description: string;
  link: string;
};

const featuredPosts: Card[] = [
  {
    title: 'Modern Workspace & Security',
    category: 'MD-102 / MS-102',
    description:
      'A practical review of the July 2026 Microsoft 365 E5 licensing update and what it means for Intune Suite capabilities, endpoint teams, and enterprise planning.',
    link: '/docs/modern-workspace/intro',
  },
  {
    title: 'Observability & Monitoring',
    category: 'Monitoring Operations',
    description:
      'A practical deployment guide covering architecture, access control, polling, alerting, logs, IPAM, and operational governance for SolarWinds Platform.',
    link: '/docs/enterprise-networking/observability/overview',
  },
  {
    title: 'SNMP, Syslog, and Dashboarding',
    category: 'Observability Pipeline',
    description:
      'A production reference architecture for polling SolarWinds SWQL/SWIS data into Elastic, including security, parsing, and pipeline review findings.',
    link: '/docs/enterprise-networking/observability/snmp-syslog-dashboarding',
  },
];

const writingTopics: Card[] = [
  {
    title: 'Microsoft 365 Cloud Operations',
    category: 'Cloud Admin',
    description:
      'Tenant administration, service health, Secure Score, identity governance, compliance, and the operational habits that keep Microsoft 365 manageable.',
    link: '/docs/modern-workspace/intro',
  },
  {
    title: 'Endpoint Modernization Program',
    category: 'Endpoint',
    description:
      'A fast view of how I plan and execute endpoint modernization: co-management, Autopilot, app deployment, baselines, updates, support, and remediation.',
    link: '/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study',
  },
  {
    title: 'Network Foundation & Infrastructure',
    category: 'Infrastructure',
    description:
      'Real-world thinking around DNS, DHCP, AD dependency, routing, VPN, Azure networking, monitoring, and failure investigation.',
    link: '/docs/enterprise-networking/intro',
  },
  {
    title: 'Security, Identity, and Zero Trust',
    category: 'Security',
    description:
      'Practical lessons on Conditional Access, MFA, break-glass accounts, Defender XDR, alert triage, data protection, and secure operations.',
    link: '/docs/hybrid-cloud/azure-core/entra-rbac-policy',
  },
];

const focusAreas = [
  'Microsoft 365 admin experience',
  'Intune endpoint lessons',
  'Identity and Conditional Access',
  'Defender XDR operations',
  'Purview and data protection',
  'Configuration Manager troubleshooting',
  'Windows Server DNS / DHCP',
  'Active Directory dependencies',
  'Hybrid connectivity',
  'Azure networking',
  'SolarWinds monitoring',
  'Elastic ingestion pipelines',
  'Incident review notes',
  'Operational documentation',
];

const proofPoints = [
  'AZ-104 Azure Administrator Associate',
  'AZ-700 Azure Network Engineer Associate',
  'Microsoft 365 and Intune operations focus',
  'Network, monitoring, and troubleshooting writing',
];

const editorialPrinciples = [
  {
    label: 'Context first',
    detail: 'What problem appeared, why it mattered, and what risk or business impact was behind it.',
  },
  {
    label: 'Decisions explained',
    detail: 'Why a design, control, query, policy, or troubleshooting path was chosen over another option.',
  },
  {
    label: 'Lessons captured',
    detail: 'What to verify, what can go wrong, and how I would document the outcome for operations.',
  },
];

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="IT Infrastructure, Cloud, Network, and Automation Portfolio"
      description="Phan Hoang Thai shares practical IT operations experience, troubleshooting notes, architecture thinking, and lessons learned across Microsoft 365, Intune, Azure networking, security, monitoring, and infrastructure."
    >
      <header className="tpHero">
        <div className="tpHeroInner">
          <div className="tpHeroText">
            <p className="tpEyebrow">IT Infrastructure Portfolio</p>
            <h1>Notes from real-world Microsoft cloud, endpoint, network, and security work.</h1>
            <p className="tpHeroDescription">
              I write about what I learn while solving infrastructure problems: how systems are designed, what breaks in practice, how to verify the result, and what I would document for the next engineer.
            </p>
            <div className="tpHeroButtons">
              <Link className="button button--primary button--lg" to="/docs/enterprise-networking/intro">
                Start Documentation
              </Link>
              <Link className="button button--secondary button--lg" to="/projects">
                View Projects
              </Link>
              <Link className="button button--outline button--lg button--light" to="/resume">
                Resume
              </Link>
            </div>
          </div>

          <aside className="tpHeroCard">
            <p className="tpCardLabel">Writing Focus</p>
            <h2>Experience translated into clear technical notes.</h2>
            <p>
              This site is where I turn operational work, study notes, troubleshooting reviews, and architecture decisions into articles that are useful to engineers, recruiters, and future me.
            </p>
            <div className="tpMetricGrid">
              <div>
                <strong>M365</strong>
                <span>Admin notes</span>
              </div>
              <div>
                <strong>Intune</strong>
                <span>Modernization</span>
              </div>
              <div>
                <strong>Network</strong>
                <span>Troubleshooting</span>
              </div>
              <div>
                <strong>Security</strong>
                <span>Operations</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="tpSection">
          <div className="tpSectionHeader">
            <p className="tpEyebrow">Featured Tracks</p>
            <h2>Start with focused infrastructure and cloud evidence.</h2>
            <p>
              The best posts on this site are written like field notes: problem, context, design choices, verification, risk, and lessons learned.
            </p>
          </div>

          <div className="tpArticleGrid">
            {featuredPosts.map((post) => (
              <article className="tpArticleCard" key={post.title}>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link to={post.link}>Open track</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tpSection tpSectionCompact">
          <div className="tpSectionHeader">
            <p className="tpEyebrow">How I Write</p>
            <h2>Not just commands. The reasoning around the work.</h2>
            <p>
              I want each article to be useful after the first read: something you can use for troubleshooting, architecture review, interview preparation, or operational documentation.
            </p>
          </div>

          <div className="tpProcessGrid">
            {editorialPrinciples.map((item, index) => (
              <article className="tpProcessItem" key={item.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tpDarkSection">
          <div className="tpSectionHeader tpLightText">
            <p className="tpEyebrow">Topics</p>
            <h2>What I write about</h2>
            <p>
              The site focuses on the intersection of Microsoft cloud administration, endpoint management, infrastructure, monitoring, and security operations.
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
          <div className="tpSectionHeader">
            <p className="tpEyebrow">Writing Series</p>
              <h2>Browse by focused evidence track.</h2>
            <p>
              These sections keep deeper notes, diagrams, checklists, and reference material behind the blog posts.
            </p>
          </div>

          <div className="tpCardGrid">
            {writingTopics.map((topic) => (
              <article className="tpLabCard" key={topic.title}>
                <span>{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <Link to={topic.link}>Open notes</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tpSection">
          <div className="tpTwoColumn">
            <div>
              <p className="tpEyebrow">About the Author</p>
              <h2>Written from an operations mindset.</h2>
              <p>
                I use this site to sharpen how I explain technical work: what happened, what I checked, what I changed, and what I would improve next time.
              </p>
              <p>
                The goal is a professional blog that feels grounded in actual IT work, while still keeping structured documentation available for reviewers.
              </p>
              <div className="tpButtonRow">
                <Link className="button button--primary" to="/docs/enterprise-networking/intro">
                  Explore Docs
                </Link>
                <Link className="button button--secondary" to="/about">
                  About Me
                </Link>
              </div>
            </div>

            <aside className="tpProfileBox">
              <h3>Phan Hoang Thai</h3>
              <p>Microsoft 365 Cloud Operations | Endpoint Modernization | Azure Networking | Security | IT Support</p>
              <ul>
                {proofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
