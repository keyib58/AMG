import Image from 'next/image';
import Link from 'next/link';
import { NewsType } from 'types/newsType';

const SingleNews = ({ news }: { news: NewsType }) => {
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date(news.date));

    return (
        <li className="my-8 rounded-lg overflow-hidden">
            <Link href={`/news/${news.slug}`}>
                <div className="flex flex-col items-center">
                    <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={300}
                        height={200}
                        className="w-full object-cover"
                    />
                    <div className="bg-[#151515] p-4 w-full flex flex-col text-white">
                        <h3 className="text-md font-extrabold Montserrat">{news.title}</h3>
                        <p className="mt-3 text-md OpenSans font-semibold line-clamp-2">{news.excerpt}</p>
                        <p className="mt-3 text-sm italic OpenSans">{formattedDate}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default SingleNews;
