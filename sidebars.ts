import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  enterpriseNetworkingSidebar: [
    {
      type: 'category',
      label: 'Enterprise Networking',
      collapsed: false,
      items: [
        'enterprise-networking/intro',
        {
          type: 'category',
          label: 'Core Routing & Switching',
          collapsed: false,
          items: [
            'enterprise-networking/core-routing-switching/overview',
            'enterprise-networking/core-routing-switching/ospf-enterprise-routing',
            'enterprise-networking/core-routing-switching/bgp-routing-policy',
            'enterprise-networking/core-routing-switching/layer2-layer3-campus-design',
          ],
        },
        {
          type: 'category',
          label: 'Network Security',
          collapsed: true,
          items: [
            'enterprise-networking/network-security/overview',
            'enterprise-networking/network-security/palo-alto-policy-nat-vpn',
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          collapsed: true,
          items: [
            'enterprise-networking/observability/overview',
            'enterprise-networking/observability/snmp-syslog-dashboarding',
          ],
        },
      ],
    },
  ],

  hybridCloudSidebar: [
    {
      type: 'category',
      label: 'Hybrid Cloud Infrastructure',
      collapsed: false,
      items: [
        'hybrid-cloud/intro',
        {
          type: 'category',
          label: 'Azure Core',
          collapsed: false,
          items: [
            'hybrid-cloud/azure-core/overview',
            'hybrid-cloud/azure-core/entra-rbac-policy',
          ],
        },
        {
          type: 'category',
          label: 'Azure Networking',
          collapsed: false,
          items: [
            'hybrid-cloud/azure-networking/overview',
            'hybrid-cloud/azure-networking/virtual-wan-vpn-firewall',
          ],
        },
      ],
    },
  ],

  modernWorkspaceSidebar: [
    {
      type: 'category',
      label: 'Modern Workspace & Security',
      collapsed: false,
      items: [
        'modern-workspace/intro',
        {
          type: 'category',
          label: 'Endpoint Management',
          collapsed: false,
          items: [
            'modern-workspace/endpoint-management/overview',
            'modern-workspace/endpoint-management/global-endpoint-management-case-study',
            'modern-workspace/endpoint-management/windows-autopilot-intune',
            'modern-workspace/endpoint-management/win32-app-packaging',
          ],
        },
        {
          type: 'category',
          label: 'Enterprise Defense',
          collapsed: true,
          items: [
            'modern-workspace/enterprise-defense/overview',
            'modern-workspace/enterprise-defense/conditional-access-defender',
          ],
        },
      ],
    },
  ],

  automationSidebar: [
    {
      type: 'category',
      label: 'Automation & DevNet',
      collapsed: false,
      items: [
        'automation/intro',
        {
          type: 'category',
          label: 'NetDevOps',
          collapsed: false,
          items: [
            'automation/netdevops/overview',
            'automation/netdevops/python-netmiko-ansible-n8n',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Automation',
          collapsed: false,
          items: [
            'automation/cloud-automation/overview',
            'automation/cloud-automation/powershell-graph-api',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
