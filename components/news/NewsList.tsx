// components/news/newsList.tsx
import { getSortedNewsData } from '@/lib/news';
import { NewsType } from 'types/newsType';
import NewsCard from './newsCard';

export default function NewsList() {
  const allNewsData: NewsType[] = getSortedNewsData();

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
      {allNewsData.map((news) => (
        <NewsCard key={news.slug} news={news} />
      ))}
    </ul>
  );
}
