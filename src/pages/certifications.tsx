import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const certifications = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    exam: 'AZ-104',
    image: '/img/certifications/az104.jpg',
    description:
      'Validates Azure administration skills including identity, governance, compute, storage, virtual networking, monitoring, and backup.',
    relatedLabs: [
      {
        label: 'Azure Networking Overview',
        link: '/docs/hybrid-cloud/azure-networking/overview',
      },
      {
        label: 'Azure VNet, Subnet, and NSG',
        link: '/docs/hybrid-cloud/azure-networking/virtual-wan-vpn-firewall',
      },
    ],
  },
  {
    name: 'Microsoft Certified: Azure Network Engineer Associate',
    exam: 'AZ-700',
    image: '/img/certifications/az700.jpg',
    description:
      'Validates Azure networking skills including hybrid connectivity, routing, load balancing, private access, network security, and monitoring.',
    relatedLabs: [
      {
        label: 'AZ-700 Lab Track',
        link: '/docs/hybrid-cloud/azure-networking/overview',
      },
      {
        label: 'Azure Hub-Spoke Architecture',
        link: '/docs/hybrid-cloud/azure-networking/virtual-wan-vpn-firewall',
      },
      {
        label: 'Site-to-Site VPN to Azure',
        link: '/docs/hybrid-cloud/azure-networking/virtual-wan-vpn-firewall',
      },
    ],
  },
  {
    name: 'Microsoft 365 Certified: Administrator Expert',
    exam: 'MS-102',
    image: '/img/certifications/ms102.jpg',
    description:
      'Validates Microsoft 365 administration skills including tenant management, identity, security, compliance, governance, and service operations.',
    relatedLabs: [
      {
        label: 'Microsoft 365 Cloud Operations Scenario',
        link: '/docs/modern-workspace/intro',
      },
      {
        label: 'Microsoft Secure Score Improvement',
        link: '/docs/modern-workspace/enterprise-defense/overview',
      },
      {
        label: 'Identity & Access Governance Overview',
        link: '/docs/hybrid-cloud/azure-core/entra-rbac-policy',
      },
    ],
  },
  {
    name: 'Microsoft 365 Certified: Endpoint Administrator Associate',
    exam: 'MD-102',
    image: '/img/certifications/md102.jpg',
    description:
      'Validates endpoint administration skills including Microsoft Intune, Windows endpoint management, compliance, configuration, security baseline, and application protection.',
    relatedLabs: [
      {
        label: 'Endpoint Modernization Executive Brief',
        link: '/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study',
      },
      {
        label: 'Windows Autopilot Provisioning',
        link: '/docs/modern-workspace/endpoint-management/windows-autopilot-intune',
      },
      {
        label: 'Enterprise Application Deployment',
        link: '/docs/modern-workspace/endpoint-management/win32-app-packaging',
      },
      {
        label: 'Windows 11 Security Baseline',
        link: '/docs/modern-workspace/enterprise-defense/conditional-access-defender',
      },
    ],
  },
];

export default function Certifications(): React.ReactElement {
  return (
    <Layout
      title="Certifications"
      description="Microsoft certifications and related portfolio evidence for Phan Hoang Thai."
    >
      <main className="tpPage">
        <section className="tpPageHero">
          <p className="tpEyebrow">Certifications</p>
          <h1>Microsoft Certifications & Portfolio Evidence</h1>
          <p>
            Verified Microsoft certifications supported by practical portfolio labs,
            architecture notes, troubleshooting workflows, and hands-on evidence.
          </p>
        </section>

        <section className="tpSectionNarrow">
          <h2>Earned Microsoft Certifications</h2>

          <div className="tpCardGrid tpCardGridTwo">
            {certifications.map((cert) => (
              <article className="tpContentCard" key={cert.exam}>
                <img
                  src={cert.image}
                  alt={`${cert.exam} certification`}
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                    marginBottom: '1.5rem',
                  }}
                />

                <p className="tpEyebrow">Earned Certification</p>
                <h2>{cert.name}</h2>
                <h3>{cert.exam}</h3>

                <p>{cert.description}</p>

                <h3>Related Portfolio Labs</h3>
                <ul>
                  {cert.relatedLabs.map((lab) => (
                    <li key={lab.link}>
                      <Link to={lab.link}>{lab.label}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
