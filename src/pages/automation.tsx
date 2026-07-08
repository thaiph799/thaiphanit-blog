import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const tracks = [
  {
    title: 'Network Automation',
    body: 'Python, Netmiko, Pandas, Ansible, n8n workflows, device inventory parsing, configuration backup, and repeatable network operations.',
    link: '/projects',
  },
  {
    title: 'System & Cloud Scripting',
    body: 'PowerShell and Microsoft Graph API automation for Microsoft 365, Entra ID, Intune reporting, compliance checks, and operational evidence.',
    link: '/docs/automation/cloud-automation/powershell-graph-api',
  },
];

export default function Automation(): React.ReactElement {
  return (
    <Layout title="Automation" description="Network, system, cloud scripting, and workflow automation portfolio hub.">
      <main className="tpDomainPage">
        <section className="tpDomainHero">
          <p className="tpEyebrow">Automation</p>
          <h1>Automation and scripting for infrastructure operations.</h1>
          <p>Evidence for repeatable engineering: scripts, reports, workflow automation, Graph API, device automation, validation, and operational handover.</p>
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
