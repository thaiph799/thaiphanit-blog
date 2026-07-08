import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const portfolioProof = [
  {
    title: 'Microsoft 365 Cloud Operations',
    link: '/docs/modern-workspace/intro',
  },
  {
    title: 'Endpoint Modernization Program',
    link: '/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study',
  },
  {
    title: 'Network Foundation & Infrastructure',
    link: '/docs/enterprise-networking/intro',
  },
  {
    title: 'Identity & Access Governance',
    link: '/docs/hybrid-cloud/azure-core/entra-rbac-policy',
  },
];

export default function Resume(): React.ReactElement {
  return (
    <Layout
      title="Resume"
      description="Resume and recruiter overview for Microsoft 365 cloud operations, endpoint modernization, Azure networking, security, and IT support roles."
    >
      <main className="tpPage">
        <section className="tpPageHero">
          <p className="tpEyebrow">Resume and Recruiter Overview</p>
          <h1>Phan Hoang Thai</h1>
          <p>
            Microsoft 365 Cloud Operations | Endpoint Modernization | Azure Networking | On-Prem Infrastructure | Security | IT Support
          </p>
          <div className="tpButtonRow">
            <Link className="button button--primary button--lg" to="/resume">  
             View Resume Page
            </Link>
            <Link className="button button--secondary button--lg" to="/recruiters">
              Recruiter Summary
            </Link>
          </div>
        </section>

        <section className="tpContentGrid">
          <article className="tpContentCard">
            <h2>Professional Summary</h2>
            <p>
              I am building a practical technical portfolio focused on Microsoft 365 cloud operations, endpoint modernization, Azure networking, on-prem infrastructure, identity governance, security operations, and enterprise troubleshooting.
            </p>
            <p>
              My portfolio demonstrates hands-on implementation workflows, verification steps, troubleshooting logic, and evidence suitable for IT Support, System Administrator, Endpoint Administrator, Modern Workplace, and Network-focused roles.
            </p>
          </article>

          <article className="tpContentCard">
            <h2>Certifications</h2>
            <ul>
              <li>Microsoft Certified: Azure Administrator Associate - AZ-104</li>
              <li>Microsoft Certified: Azure Network Engineer Associate - AZ-700</li>
            </ul>

            <h3>Portfolio Tracks</h3>
            <ul>
              <li>Microsoft 365 Administrator / MS-102 direction</li>
              <li>Endpoint Administrator / MD-102 direction</li>
              <li>Azure Networking / Hybrid Infrastructure direction</li>
            </ul>
          </article>
        </section>

        <section className="tpSectionNarrow">
          <h2>Portfolio Proof</h2>
          <div className="tpCardGrid tpCardGridTwo">
            {portfolioProof.map((item) => (
              <article className="tpLabCard" key={item.title}>
                <span>Evidence</span>
                <h3>{item.title}</h3>
                <p>
                  Open this section to review the business context, implementation thinking, validation approach, troubleshooting model, and deeper evidence.
                </p>
                <Link to={item.link}>Open</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
