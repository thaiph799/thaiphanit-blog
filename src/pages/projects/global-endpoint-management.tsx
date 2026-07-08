import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const tags = ['Intune', 'Entra ID', 'Configuration Manager', 'PowerShell', 'Autopilot', 'Endpoint Analytics'];

const implementations = [
  'Defined program governance, phase gates, RACI, risk ownership, evidence strategy, and go-live acceptance criteria.',
  'Designed co-management and tenant attach operating model between Configuration Manager and Microsoft Intune.',
  'Built global scale model for 25,000+ endpoints across AMER, EMEA, and APAC using groups, rings, reporting, and ownership boundaries.',
  'Planned Windows Autopilot zero-touch provisioning, enterprise app deployment, update rings, Windows 11 baselines, and compliance workflows.',
  'Added Endpoint Analytics, proactive remediation, automation reporting, RBAC, SOPs, runbooks, rollout management, and hypercare transition.',
];

export default function GlobalEndpointManagement(): React.ReactElement {
  return (
    <Layout
      title="Global Endpoint Management"
      description="Case study for an enterprise endpoint modernization program using Intune, Entra ID, Configuration Manager, and PowerShell."
    >
      <main className="tpCaseStudy">
        <header className="tpCaseHeader">
          <p className="tpEyebrow">Modern Workplace Case Study</p>
          <h1>Global Endpoint Management</h1>
          <p className="tpCaseMeta">Role: Solution Architect / Lead Engineer</p>
          <div className="tpTagRow">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <section className="tpCaseSection">
          <h2>Context & Challenges</h2>
          <p>
            Apex Global operates a 25,000+ device endpoint estate across AMER, EMEA, and APAC. The legacy operating model is fragmented across regional tooling, inconsistent policies, separate Configuration Manager practices, and limited executive visibility.
          </p>
          <p>
            The challenge is to modernize endpoint management without creating a risky cutover: preserve operational continuity, introduce Intune governance, validate every phase with evidence, and prepare support teams for production handover.
          </p>
        </section>

        <section className="tpCaseSection">
          <h2>Solution Architecture</h2>
          <div className="tpArchitecturePanel">
            <div>Global Endpoint Estate</div>
            <span>{'->'}</span>
            <div>Entra ID + Intune</div>
            <span>{'->'}</span>
            <div>ConfigMgr Co-Management</div>
            <span>{'->'}</span>
            <div>Security, Apps, Updates, Analytics</div>
          </div>
          <p>
            The architecture uses Microsoft Intune as the modern management control plane while Configuration Manager remains part of a governed transition model. Workloads, groups, rings, RBAC, reporting, rollout waves, and hypercare criteria are documented as phase-based technical design documents.
          </p>
        </section>

        <section className="tpCaseSection">
          <h2>Key Implementations</h2>
          <ul className="tpCaseList">
            {implementations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="tpCaseSection">
          <h2>Results & Impact</h2>
          <div className="tpImpactGrid">
            <div>
              <strong>25,000+</strong>
              <span>Endpoint scale modeled across global regions</span>
            </div>
            <div>
              <strong>16</strong>
              <span>Program phases from charter to hypercare transition</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Readable workstreams for architecture, rollout, security, and operations</span>
            </div>
          </div>
          <p>
            The final portfolio structure gives recruiters a fast executive brief while giving technical reviewers deep evidence for architecture, deployment, troubleshooting, automation, security, and operational handover.
          </p>
        </section>

        <section className="tpCaseCta">
          <Link className="button button--primary" to="/docs/modern-workspace/endpoint-management/global-endpoint-management-case-study">
            Read Executive Brief
          </Link>
          <Link className="button button--secondary" to="/docs/modern-workspace/endpoint-management/overview">
            Open Program Navigation
          </Link>
        </section>
      </main>
    </Layout>
  );
}
