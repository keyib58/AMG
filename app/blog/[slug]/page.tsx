// app/news/[slug]/page.tsx
import { getAllNewsSlugs, getNewsContent } from '@/lib/news';
import { NewsType } from 'types/newsType';
import MDXContentRenderer from '@/components/news/MDXContentRenderer';
import React from 'react';

export async function generateStaticParams() {
    const paths = await getAllNewsSlugs();
    return paths.map((path) => ({ slug: path.params.slug }));
}

export default async function NewsPage({ params }: { params: { slug: string } }) {

    return (
        <div className="max-w-[1320px] mt-10 mx-auto px-4">
            <MDXContentRenderer slug={params.slug} />
        </div>
    );
}
