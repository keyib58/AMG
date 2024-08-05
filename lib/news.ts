import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { NewsType } from 'types/newsType';

const newsDirectory = path.join(process.cwd(), 'content/news');

// Get all news slugs (both .md and .mdx files)
export function getAllNewsSlugs() {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx')) // Filter for .md and .mdx
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.(md|mdx)$/, ''), // Remove the file extension
        },
      };
    });
}

// Get news data based on the slug (includes only the metadata)
export function getNewsData(slug: string): NewsType {
  const fullPathMd = path.join(newsDirectory, `${slug}.md`);
  const fullPathMdx = path.join(newsDirectory, `${slug}.mdx`);
  
  const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
  } as NewsType;
}

// Get the complete news content (process Markdown or MDX to HTML)
export async function getNewsContent(slug: string): Promise<NewsType> {
  const fullPathMd = path.join(newsDirectory, `${slug}.md`);
  const fullPathMdx = path.join(newsDirectory, `${slug}.mdx`);
  
  const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  } as NewsType;
}

// Get sorted news data based on the date
export function getSortedNewsData(): NewsType[] {
  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(md|mdx)$/, ''); // Handle both .md and .mdx

    const fullPathMd = path.join(newsDirectory, `${slug}.md`);
    const fullPathMdx = path.join(newsDirectory, `${slug}.mdx`);
    
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    } as NewsType;
  });
  return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
