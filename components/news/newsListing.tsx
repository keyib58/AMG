import { getSortedNewsData } from '@/lib/news';
import { NewsType } from 'types/newsType';
import CardNews from './cardNews';

export default function NewsListing() {
  const allNewsData: NewsType[] = getSortedNewsData();

  return (
    <ul className="w-full mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {allNewsData.map((news) => (
        <CardNews key={news.slug} news={news} />
      ))}
    </ul>
  );
}
