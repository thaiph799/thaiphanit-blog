import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const tracks = [
  {
    title: 'Microsoft 365 Services',
    body: 'Mail flow, Exchange Online, Teams, SharePoint, Microsoft 365 admin center, service health, Secure Score, and Security & Compliance operations.',
    link: '/docs/modern-workspace/intro',
  },
  {
    title: 'Endpoint Management',
    body: 'Windows Autopilot, Intune MDM and MAM, Win32/MSI application deployment, compliance policy, security baselines, and endpoint analytics.',
    link: '/docs/modern-workspace/endpoint-management/overview',
  },
];

export default function ModernWorkplace(): React.ReactElement {
  return (
    <Layout title="Modern Workplace" description="Microsoft 365 and endpoint management portfolio hub.">
      <main className="tpDomainPage">
        <section className="tpDomainHero">
          <p className="tpEyebrow">Modern Workplace</p>
          <h1>Microsoft 365 services and endpoint management.</h1>
          <p>Focused evidence for tenant operations, endpoint modernization, application delivery, security baseline, and user productivity platforms.</p>
        </section>
        <section className="tpDomainGrid">
          {tracks.map((track) => (
            <article className="tpDomainCard" key={track.title}>
              <h2>{track.title}</h2>
              <p>{track.body}</p>
              <Link to={track.link}>Open track</Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
