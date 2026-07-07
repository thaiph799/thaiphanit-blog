import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Contact(): React.ReactElement {
  return (
    <Layout
      title="Contact"
      description="Contact page for Phan Hoang Thai portfolio."
    >
      <main className="tpPage">
        <section className="tpPageHero">
          <p className="tpEyebrow">Contact</p>
          <h1>Connect with Phan Hoang Thai</h1>
          <p>
            For recruiters and technical reviewers, please use the resume and GitHub links below to review my portfolio evidence and project structure.
          </p>
          <div className="tpButtonRow">
            <Link className="button button--secondary button--lg" to="/recruiters">
              View Resume Page
            </Link>
            <Link className="button button--secondary button--lg" href="https://github.com/thaiph799/thaiphanit-blog">
              GitHub Repository
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
