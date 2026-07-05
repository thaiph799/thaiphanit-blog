import React from 'react';
import Layout from '@theme/Layout';

export default function Resume(): React.ReactElement {
  return (
    <Layout title="Resume">
      <main style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Resume</h1>

        <p>
          Download my latest resume for Microsoft 365, Endpoint Management,
          Azure Networking, and IT Support roles.
        </p>

        <a
          className="button button--primary button--lg"
          href="/resume/Phan-Hoang-Thai-CV.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Download Resume
        </a>
      </main>
    </Layout>
  );
}