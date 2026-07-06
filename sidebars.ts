import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  portfolioSidebar: [
    {
      type: 'category',
      label: 'Portfolio Overview',
      collapsed: false,
      items: ['portfolio/intro/intro'],
    },
    {
      type: 'category',
      label: 'Microsoft 365 E5',
      collapsed: true,
      items: [
        'portfolio/m365-e5/global-enterprise-scenario',
        'portfolio/m365-e5/m365-e5-portfolio-roadmap',
        'portfolio/m365-e5/microsoft-365-admin-center-baseline',
        'portfolio/m365-e5/secure-score-improvement',
        'portfolio/m365-e5/service-health-message-center',
      ],
    },
    {
      type: 'category',
      label: 'Intune & Endpoint',
      collapsed: true,
      items: [
        'portfolio/intune-endpoint/intune-portfolio-overview',
        'portfolio/intune-endpoint/byod-data-protection',
        'portfolio/intune-endpoint/windows-11-compliance-policy',
        'portfolio/intune-endpoint/windows-11-security-baseline',
        'portfolio/intune-endpoint/app-protection-policy',
        'portfolio/intune-endpoint/device-configuration-profile',
        'portfolio/intune-endpoint/conditional-access-with-compliant-device',
        'portfolio/intune-endpoint/autopilot-lab-overview',
      ],
    },
    {
      type: 'category',
      label: 'Identity & Zero Trust',
      collapsed: true,
      items: [
        'portfolio/identity-zero-trust/identity-zero-trust-overview',
        'portfolio/identity-zero-trust/entra-id-user-group-role-model',
        'portfolio/identity-zero-trust/mfa-and-authentication-methods',
        'portfolio/identity-zero-trust/conditional-access-baseline',
        'portfolio/identity-zero-trust/break-glass-account-design',
        'portfolio/identity-zero-trust/privileged-identity-management',
        'portfolio/identity-zero-trust/joiner-mover-leaver-access-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Security Operations',
      collapsed: true,
      items: [
        'portfolio/security/security-portfolio-overview',
        'portfolio/security/defender-xdr-incident-response',
        'portfolio/security/defender-for-endpoint-onboarding',
        'portfolio/security/defender-for-office-365-phishing-protection',
        'portfolio/security/attack-simulation-training',
        'portfolio/security/security-alert-triage-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Compliance & Purview',
      collapsed: true,
      items: [
        'portfolio/compliance-purview/purview-overview',
        'portfolio/compliance-purview/sensitivity-labels',
        'portfolio/compliance-purview/data-loss-prevention',
        'portfolio/compliance-purview/retention-policy',
        'portfolio/compliance-purview/audit-search',
        'portfolio/compliance-purview/ediscovery-basic-case',
      ],
    },
    {
      type: 'category',
      label: 'SCCM / MECM',
      collapsed: true,
      items: [
        'portfolio/sccm-mecm/sccm-mecm-overview',
        'portfolio/sccm-mecm/client-policy-troubleshooting',
        'portfolio/sccm-mecm/software-deployment-troubleshooting',
        'portfolio/sccm-mecm/reboot-deployment-policy-check',
        'portfolio/sccm-mecm/client-log-analysis',
        'portfolio/sccm-mecm/group-policy-sysvol-troubleshooting',
      ],
    },
  ],

  networkSidebar: [
    {
      type: 'category',
      label: 'Network Overview',
      collapsed: false,
      items: [
        'network/intro',
        'network/network-portfolio-roadmap',
        'network/network-lab-environment',
      ],
    },
    {
      type: 'category',
      label: 'On-Prem Network',
      collapsed: false,
      items: [
        'network/on-prem/on-prem-network-foundation',
        'network/on-prem/ip-addressing-subnetting',
        'network/on-prem/vlan-subnet-routing-design',
        'network/on-prem/windows-server-dns-dhcp',
        'network/on-prem/active-directory-network-foundation',
        'network/on-prem/domain-join-client-network-test',
        'network/on-prem/file-share-permission-network-access',
        'network/on-prem/group-policy-network-dependency',
        'network/on-prem/rras-vpn-remote-access',
        'network/on-prem/on-prem-network-troubleshooting-toolkit',
      ],
    },
    {
      type: 'category',
      label: 'Hybrid Network',
      collapsed: false,
      items: [
        'network/hybrid/hybrid-network-overview',
        'network/hybrid/site-to-site-vpn-to-azure',
        'network/hybrid/hybrid-dns-resolution',
        'network/hybrid/on-prem-to-azure-routing',
        'network/hybrid/azure-arc-hybrid-server-management',
        'network/hybrid/hybrid-network-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Azure Network',
      collapsed: false,
      items: [
        'network/azure/azure-network-overview',
        'network/azure/az-700-lab-track',
        'network/azure/azure-vnet-subnet-nsg',
        'network/azure/azure-hub-spoke-architecture',
        'network/azure/azure-vpn-gateway',
        'network/azure/azure-firewall-udr-egress-control',
        'network/azure/private-link-private-dns',
        'network/azure/load-balancer-application-gateway',
        'network/azure/network-watcher-troubleshooting',
        'network/azure/azure-virtual-wan-overview',
      ],
    },
  ],

  careerSidebar: [
    {
      type: 'category',
      label: 'Career & Recruiter Evidence',
      collapsed: false,
      items: [
        'career/recruiter-overview',
        'career/certification-roadmap',
        'career/lab-evidence-guide',
        'career/interview-story-bank',
      ],
    },
  ],
};

export default sidebars;
