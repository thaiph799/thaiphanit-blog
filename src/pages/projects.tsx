import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const projects = [
  {
    title: 'Global Endpoint Management',
    role: 'Solution Architect / Lead Engineer',
    domain: 'Modern Workplace',
    summary:
      'Enterprise endpoint modernization program for a 25,000+ device estate using Intune, Configuration Manager, Entra ID, Autopilot, security baselines, automation, rollout governance, and hypercare.',
    tags: ['Intune', 'Entra ID', 'ConfigMgr', 'PowerShell', 'Windows Autopilot'],
    link: '/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study',
  },
  {
    title: 'SolarWinds Monitoring Platform',
    role: 'Infrastructure Monitoring Engineer',
    domain: 'Cloud & System',
    summary:
      'Monitoring platform design covering polling, alerting, access control, logs, IPAM, configuration backup, and operational governance.',
    tags: ['SolarWinds', 'SNMP', 'Syslog', 'Monitoring'],
    link: '/docs/enterprise-networking/observability/overview',
  },
  {
    title: 'Enterprise Network Architecture Labs',
    role: 'Network Architecture Lab Builder',
    domain: 'Enterprise Networking',
    summary:
      'Cisco CML lab evidence for WAN routing, OSPF, MPLS LDP, BFD, BGP resiliency, packet path validation, and failure testing.',
    tags: ['Cisco', 'OSPF', 'MPLS', 'BGP', 'CML'],
    link: '/docs/enterprise-networking/intro',
  },
  {
    title: 'Automated Network Backup System',
    role: 'Automation Engineer',
    domain: 'Automation',
    summary:
      'Planned case study template for Python, Netmiko, Pandas, scheduled backups, inventory parsing, diff reporting, and operational workflow automation.',
    tags: ['Python', 'Netmiko', 'Pandas', 'n8n'],
    link: '/docs/automation/netdevops/overview',
  },
];

export default function Projects(): React.ReactElement {
  return (
    <Layout
      title="Projects"
      description="Case study portfolio hub for IT infrastructure, cloud, endpoint, network, and automation projects."
    >
      <main className="tpPage">
        <section className="tpProjectHero">
          <p className="tpEyebrow">Portfolio Hub</p>
          <h1>Projects built as focused case studies.</h1>
          <p>
            Each project is presented with business context, architecture, implementation highlights, and measurable operational impact.
          </p>
        </section>

        <section className="tpProjectGrid">
          {projects.map((project) => (
            <article className="tpProjectCard" key={project.title}>
              <div>
                <span className="tpProjectDomain">{project.domain}</span>
                <h2>{project.title}</h2>
                <p className="tpProjectRole">{project.role}</p>
                <p>{project.summary}</p>
              </div>
              <div className="tpTagRow">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link to={project.link}>Open case study</Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
