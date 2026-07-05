import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Phan Hoang Thai',
  tagline: 'Microsoft 365 | Endpoint Management | Azure Network | Security Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://thaiphanit.com',
  baseUrl: '/',

  organizationName: 'https://github.com/thaiph799',
  projectName: 'thaiphanit-blog',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
  title: 'Thai Phan IT',
  logo: {
    alt: 'Thai Phan IT Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      label: 'Microsoft 365',
      to: '/blog/tags/microsoft-365',
      position: 'left',
    },
    {
      label: 'Intune',
      to: '/blog/tags/intune',
      position: 'left',
    },
    {
      label: 'Azure',
      to: '/blog/tags/azure',
      position: 'left',
    },
    {
      label: 'Security',
      to: '/blog/tags/security',
      position: 'left',
    },
    {
      label: 'Hands-on Labs',
      to: '/docs/portfolio/intro',
      position: 'left',
    },
    {
      label: 'Portfolio',
      to: '/docs/portfolio/intro',
      position: 'right',
    },
    {
      label: 'Blog',
      to: '/blog',
      position: 'right',
    },
    {
      label: 'Resume',
      to: '/resume',
      position: 'right',
    },
    {
      href: 'https://github.com/thaiph799',
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
        {
          label: 'Microsoft 365 E5 Portfolio',
          to: '/docs/portfolio/intro',
        },
        {
          label: 'Intune Labs',
          to: '/docs/portfolio/intro',
        },
        {
          label: 'Security Labs',
          to: '/docs/portfolio/intro',
        },
      ],
    },
    {
      title: 'Topics',
      items: [
        {
          label: 'Microsoft 365',
          to: '/blog/tags/microsoft-365',
        },
        {
          label: 'Intune',
          to: '/blog/tags/intune',
        },
        {
          label: 'Azure',
          to: '/blog/tags/azure',
        },
        {
          label: 'Security',
          to: '/blog/tags/security',
        },
      ],
    },
    {
      title: 'Connect',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/YOUR-GITHUB-USERNAME',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/YOUR-LINKEDIN',
        },
        {
          label: 'Resume',
          to: '/resume',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Thai Phan IT. Built with Docusaurus.`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
