import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const tracks = [
  {
    title: 'Routing & Switching',
    body: 'Enterprise routing and switching design across Cisco IOS-XE, IOS-XR, NX-OS, Aruba AOS-CX, OSPF, BGP, VLANs, and failure testing.',
    link: '/docs/enterprise-networking/core-routing-switching/overview',
  },
  {
    title: 'Network Security',
    body: 'Zone-based firewall thinking, NAT, VPN, segmentation, Azure Firewall, and Palo Alto-style security architecture patterns.',
    link: '/docs/enterprise-networking/network-security/overview',
  },
];

export default function EnterpriseNetworking(): React.ReactElement {
  return (
    <Layout title="Enterprise Networking" description="Enterprise routing, switching, and network security portfolio hub.">
      <main className="tpDomainPage">
        <section className="tpDomainHero">
          <p className="tpEyebrow">Enterprise Networking</p>
          <h1>Routing, switching, WAN, and network security.</h1>
          <p>Lab-backed infrastructure design covering topology, routing behavior, resiliency, VPN, firewall policy, and troubleshooting evidence.</p>
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
