'use client';

import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

type MDXContentRendererProps = {
  slug: string;
};

export default function MDXContentRenderer({ slug }: MDXContentRendererProps) {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Dynamically import the MDX content
    async function loadMDXContent() {
      const importedModule = await import(`app/content/news/${slug}.mdx`); // Renamed variable to importedModule
      const MDXComponent = importedModule.default;
      setMDXContent(() => MDXComponent);
    }

    loadMDXContent();
  }, [slug]);

  useEffect(() => {
    // Function to add the 'newsHidden' class to elements inside 'newsContainer'
    // except those with the class 'newsContent'
    function applyNewsHiddenClass() {
      const newsContainers = document.querySelectorAll('.newsContainer');

      newsContainers.forEach((container) => {
        const children = Array.from(container.children); // Convert HTMLCollection to Array

        children.forEach((child) => {
          if (!child.classList.contains('newsContent')) {
            (child as HTMLElement).classList.add('newsHidden');
          }
        });
      });
    }

    // Run the function after the content is loaded and rendered
    if (MDXContent) {
      applyNewsHiddenClass();
    }
  }, [MDXContent]); // Re-run when MDXContent is set

  return (
    <div className="newsContainer">
      {MDXContent ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <MDXProvider>
            <MDXContent />
          </MDXProvider>
        </React.Suspense>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
}
