import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Phan Hoang Thai',
  tagline:
    'Microsoft cloud operations, endpoint modernization, network architecture, and security portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://www.thaiphanit.com',
  baseUrl: '/',

  organizationName: 'thaiph799',
  projectName: 'thaiphanit-blog',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ['docusaurus-plugin-image-zoom'],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig: {
    image: 'img/thai-phan-it-social-card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'Microsoft 365, Intune, Endpoint Management, Azure Networking, AZ-700, AZ-104, Entra ID, Conditional Access, Defender XDR, Purview, SCCM, MECM, IT Support, System Administrator',
      },
    ],
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ?? 'YOUR_APP_ID',
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY ?? 'YOUR_SEARCH_API_KEY',
      indexName: process.env.ALGOLIA_INDEX_NAME ?? 'thaiphanit',
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Phan Hoang Thai',
      items: [
        {label: 'Home', to: '/', position: 'left'},
        {
          type: 'dropdown',
          label: 'Enterprise Networking',
          position: 'left',
          items: [
            {label: 'Overview', to: '/docs/enterprise-networking/intro'},
            {label: 'Core Routing & Switching', to: '/docs/enterprise-networking/core-routing-switching/overview'},
            {label: 'Network Security', to: '/docs/enterprise-networking/network-security/overview'},
            {label: 'Observability', to: '/docs/enterprise-networking/observability/overview'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Hybrid Cloud Infrastructure',
          position: 'left',
          items: [
            {label: 'Overview', to: '/docs/hybrid-cloud/intro'},
            {label: 'Azure Core', to: '/docs/hybrid-cloud/azure-core/overview'},
            {label: 'Azure Networking', to: '/docs/hybrid-cloud/azure-networking/overview'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Modern Workspace & Security',
          position: 'left',
          items: [
            {label: 'Overview', to: '/docs/modern-workspace/intro'},
            {label: 'Endpoint Management', to: '/docs/modern-workspace/endpoint-management/overview'},
            {label: 'Global Endpoint Case Study', to: '/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study'},
            {label: 'Enterprise Defense', to: '/docs/modern-workspace/enterprise-defense/overview'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Automation & DevNet',
          position: 'left',
          items: [
            {label: 'Overview', to: '/docs/automation/intro'},
            {label: 'NetDevOps', to: '/docs/automation/netdevops/overview'},
            {label: 'Cloud Automation', to: '/docs/automation/cloud-automation/overview'},
          ],
        },
        {
          type: 'dropdown',
          label: 'About Me',
          position: 'right',
          items: [
            {label: 'Profile', to: '/about'},
            {label: 'Resume', to: '/resume'},
            {label: 'Recruiter Summary', to: '/recruiters'},
            {label: 'Certifications', to: '/certifications'},
            {label: 'Contact', to: '/contact'},
          ],
        },
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
          title: 'Enterprise Networking',
          items: [
            {label: 'Core Routing & Switching', to: '/docs/enterprise-networking/core-routing-switching/overview'},
            {label: 'Network Security', to: '/docs/enterprise-networking/network-security/overview'},
            {label: 'Observability', to: '/docs/enterprise-networking/observability/overview'},
          ],
        },
        {
          title: 'Cloud & Workspace',
          items: [
            {label: 'Hybrid Cloud', to: '/docs/hybrid-cloud/intro'},
            {label: 'Modern Workspace', to: '/docs/modern-workspace/intro'},
            {label: 'Automation & DevNet', to: '/docs/automation/intro'},
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
      additionalLanguages: ['powershell', 'python', 'yaml', 'bash'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
