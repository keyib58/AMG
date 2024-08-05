import { getAllNewsSlugs, getNewsContent } from '@/lib/news';
import { NewsType } from 'types/newsType';

export async function generateStaticParams() {
    const paths = getAllNewsSlugs();
    return paths;
}

export default async function NewsPostPage({ params }: { params: { slug: string } }) {
    const postData: NewsType = await getNewsContent(params.slug);

    return (
        <div className="max-w-[1320px] mt-10 mx-auto px-4">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} className="prose" />
        </div>
    );
}
