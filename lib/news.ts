import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NewsType } from 'types/newsType';

const newsDirectory = path.join(process.cwd(), 'app/content/news');

// Get all slugs for the news articles
export async function getAllNewsSlugs() {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

// Get sorted news data (without content) for listing purposes
export function getSortedNewsData(): NewsType[] {
  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail,
      mdxContent: '' // Add this if mdxContent is not available yet
    } as NewsType;
  });

  return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort by date descending
}

// Get the metadata and content of a specific news article
export async function getNewsContent(slug: string): Promise<{ data: NewsType; content: string }> {
  const fullPath = path.join(newsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the frontmatter and the content
  const { data, content } = matter(fileContents);

  return {
    data: {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail,
      mdxContent: content, // Ensure mdxContent is included
    },
    content, // The MDX content without frontmatter
  };
}
