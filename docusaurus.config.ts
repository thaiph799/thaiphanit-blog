import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Phan Hoang Thai',
  tagline:
    'Microsoft 365, Intune, Azure Networking, Security, and Enterprise Infrastructure Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://www.thaiphanit.com',
  baseUrl: '/',

  organizationName: 'thaiph799',
  projectName: 'thaiphanit-blog',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
         },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/thai-phan-it-social-card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'Microsoft 365, Intune, Endpoint Management, Azure Networking, AZ-700, AZ-104, Entra ID, Conditional Access, Defender XDR, Purview, SCCM, MECM, IT Support, System Administrator',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Phan Hoang Thai',
      items: [
        {
          type: 'dropdown',
          label: 'Portfolio',
          position: 'left',
          items: [
            {label: 'Portfolio Overview', to: '/docs/portfolio/intro'},
            {label: 'Microsoft 365 E5', to: '/docs/portfolio/m365-e5/global-enterprise-scenario'},
            {label: 'Intune & Endpoint', to: '/docs/portfolio/intune-endpoint/intune-portfolio-overview'},
            {label: 'Identity & Zero Trust', to: '/docs/portfolio/identity-zero-trust/identity-zero-trust-overview'},
            {label: 'Security', to: '/docs/portfolio/security/security-portfolio-overview'},
            {label: 'Compliance & Purview', to: '/docs/portfolio/compliance-purview/purview-overview'},
            {label: 'SCCM / MECM', to: '/docs/portfolio/sccm-mecm/sccm-mecm-overview'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Network',
          position: 'left',
          items: [
            {label: 'Network Overview', to: '/docs/network/intro'},
            {label: 'On-Prem Network', to: '/docs/network/on-prem/on-prem-network-foundation'},
            {label: 'Windows Server DNS & DHCP', to: '/docs/network/on-prem/windows-server-dns-dhcp'},
            {label: 'Hybrid Connectivity', to: '/docs/network/hybrid/site-to-site-vpn-to-azure'},
            {label: 'Azure Network', to: '/docs/network/azure/azure-network-overview'},
            {label: 'Network Troubleshooting', to: '/docs/network/on-prem/on-prem-network-troubleshooting-toolkit'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Enterprise Network Architecture',
          position: 'left',
          items: [
            {label: 'Architecture Overview', to: '/docs/enterprise-network-architecture/intro'},
            {label: 'Architecture Roadmap', to: '/docs/enterprise-network-architecture/enterprise-network-portfolio-roadmap'},
            {label: 'CML Lab Environment', to: '/docs/enterprise-network-architecture/cml-lab-environment'},
            {label: 'WAN OSPF Master Topology', to: '/docs/enterprise-network-architecture/cisco-cml/lab-01-wan-ospf-master-topology'},
            {label: 'MPLS LDP Site Pair', to: '/docs/enterprise-network-architecture/cisco-cml/lab-02-mpls-ldp-site-pair'},
            {label: 'BFD, OSPF, and BGP', to: '/docs/enterprise-network-architecture/cisco-cml/lab-11-bfd-ospf-bgp'},
          ],
        },
        {label: 'Blog', to: '/blog', position: 'left'},
        {label: 'Certifications', to: '/certifications', position: 'right'},
        {label: 'Recruiters', to: '/recruiters', position: 'right'},
        {label: 'Resume', to: '/resume', position: 'right'},
        {
          href: 'https://github.com/thaiph799/thaiphanit-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'Microsoft 365 E5', to: '/docs/portfolio/m365-e5/global-enterprise-scenario'},
            {label: 'Intune & Endpoint', to: '/docs/portfolio/intune-endpoint/intune-portfolio-overview'},
            {label: 'Identity & Security', to: '/docs/portfolio/identity-zero-trust/identity-zero-trust-overview'},
            {label: 'SCCM / MECM', to: '/docs/portfolio/sccm-mecm/sccm-mecm-overview'},
          ],
        },
        {
          title: 'Network',
          items: [
            {label: 'On-Prem Network', to: '/docs/network/on-prem/on-prem-network-foundation'},
            {label: 'Hybrid Network', to: '/docs/network/hybrid/hybrid-network-overview'},
            {label: 'Azure Network', to: '/docs/network/azure/azure-network-overview'},
            {label: 'Troubleshooting', to: '/docs/network/on-prem/on-prem-network-troubleshooting-toolkit'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub Repository', href: 'https://github.com/thaiph799/thaiphanit-blog'},
            {label: 'Resume', to: '/resume'},
            {label: 'Contact', to: '/contact'},
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Phan Hoang Thai. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
