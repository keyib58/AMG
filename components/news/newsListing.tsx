import { getSortedNewsData } from '@/lib/news';
import { NewsType } from 'types/newsType';
import CardNews from './cardNews';

export default function NewsListing() {
  const allNewsData: NewsType[] = getSortedNewsData();

  return (
    <ul className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
      {allNewsData.map((news) => (
        <CardNews key={news.slug} news={news} />
      ))}
    </ul>
  );
}
