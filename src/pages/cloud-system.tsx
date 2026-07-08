import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const tracks = [
  {
    title: 'Identity & Access',
    body: 'Entra ID, Conditional Access, MFA, break-glass design, RBAC, privileged access, and lifecycle governance.',
    link: '/docs/hybrid-cloud/azure-core/entra-rbac-policy',
  },
  {
    title: 'Azure Infrastructure',
    body: 'Virtual networks, VPN Gateway, Azure Firewall, hub-spoke topology, private DNS, Private Link, and Network Watcher.',
    link: '/docs/hybrid-cloud/azure-networking/overview',
  },
  {
    title: 'Observability & Monitoring',
    body: 'SolarWinds, Elastic/ELK, Syslog, SNMP OID mapping, monitoring governance, alerting, and centralized log pipelines.',
    link: '/docs/enterprise-networking/observability/overview',
  },
];

export default function CloudSystem(): React.ReactElement {
  return (
    <Layout title="Cloud & System" description="Azure, identity, and observability portfolio hub.">
      <main className="tpDomainPage">
        <section className="tpDomainHero">
          <p className="tpEyebrow">Cloud & System</p>
          <h1>Azure infrastructure, identity, and observability.</h1>
          <p>System engineering evidence for secure access, hybrid infrastructure, monitoring, centralized logs, and cloud operations.</p>
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
