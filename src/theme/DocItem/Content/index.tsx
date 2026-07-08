import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type PortfolioFrontMatter = {
  certification_mapped?: string[];
  difficulty_level?: string;
};

export default function ContentWrapper(props: Record<string, unknown>): React.ReactElement {
  const {frontMatter} = useDoc();
  const portfolioFrontMatter = frontMatter as PortfolioFrontMatter;
  const certifications = portfolioFrontMatter.certification_mapped ?? [];
  const difficulty = portfolioFrontMatter.difficulty_level;

  return (
    <>
      {(certifications.length > 0 || difficulty) && (
        <div className="tpDocBadgeRow" aria-label="Document metadata">
          {certifications.map((certification) => (
            <span className="tpDocBadge" key={certification}>
              {certification}
            </span>
          ))}
          {difficulty && <span className="tpDocBadge tpDocBadgeLevel">{difficulty}</span>}
        </div>
      )}
      <OriginalContent {...props} />
    </>
  );
}
