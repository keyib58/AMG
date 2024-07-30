// components/news/newsPageContainer.tsx
import Image from 'next/image';
import NewsCTA from '@/components/news/newsCTA';
import SubHeader from '../shared/subHeader';
import NewsList from './NewsList';

const NewsPageContainer = () => {
    return (
        <div className="max-w-[1320px] mt-10 mx-auto flex flex-col items-center px-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
                {/* Left Column */}
                <div className="flex justify-center">
                    <NewsCTA />
                </div>

                {/* Right Column */}
                <div className="flex justify-center">
                    <Image
                        src="https://res.cloudinary.com/detatjujs/image/upload/v1721706615/website_news_banner_2024_ver2_1_iz5ul7.png"
                        alt="News Banner"
                        width={700}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Full Width SubHeader */}
            <div className="w-full mt-8">
                <SubHeader title="OUR LATEST NEWS" />
            </div>

            {/* List of News Articles */}
            <NewsList />
        </div>
    );
}

export default NewsPageContainer;
