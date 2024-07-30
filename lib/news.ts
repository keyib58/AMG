// lib/news.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { NewsType } from 'types/newsType';

const newsDirectory = path.join(process.cwd(), 'content/news');

export function getAllNewsSlugs() {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getNewsData(slug: string): NewsType {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
  } as NewsType;
}

export async function getNewsContent(slug: string): Promise<NewsType> {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
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

export function getSortedNewsData(): NewsType[] {
  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    } as NewsType;
  });
  return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
