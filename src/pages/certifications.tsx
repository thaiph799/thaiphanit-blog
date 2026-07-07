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
        label: 'Azure Network Overview',
        link: '/docs/network/azure/azure-network-overview',
      },
      {
        label: 'Azure VNet, Subnet, and NSG',
        link: '/docs/network/azure/azure-vnet-subnet-nsg',
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
        link: '/docs/network/azure/az-700-lab-track',
      },
      {
        label: 'Azure Hub-Spoke Architecture',
        link: '/docs/network/azure/azure-hub-spoke-architecture',
      },
      {
        label: 'Site-to-Site VPN to Azure',
        link: '/docs/network/hybrid/site-to-site-vpn-to-azure',
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
        label: 'Microsoft 365 E5 Global Enterprise Scenario',
        link: '/docs/portfolio/m365-e5/global-enterprise-scenario',
      },
      {
        label: 'Microsoft Secure Score Improvement',
        link: '/docs/portfolio/m365-e5/secure-score-improvement',
      },
      {
        label: 'Identity & Zero Trust Overview',
        link: '/docs/portfolio/identity-zero-trust/identity-zero-trust-overview',
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
        label: 'Intune & Endpoint Portfolio Overview',
        link: '/docs/portfolio/intune-endpoint/intune-portfolio-overview',
      },
      {
        label: 'BYOD Data Protection',
        link: '/docs/portfolio/intune-endpoint/byod-data-protection',
      },
      {
        label: 'Windows 11 Compliance Policy',
        link: '/docs/portfolio/intune-endpoint/windows-11-compliance-policy',
      },
      {
        label: 'Windows 11 Security Baseline',
        link: '/docs/portfolio/intune-endpoint/windows-11-security-baseline',
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