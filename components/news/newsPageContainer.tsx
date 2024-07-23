import Image from 'next/image';
import NewsCTA from '@/components/news/newsCTA';


const newsContainer = () => {
    return (
        <div className="max-w-[1320px] mt-20 flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
            <NewsCTA />
            </div>
            
            {/* Right Column */}
            <div className="flex">
            <Image 
                src="https://res.cloudinary.com/detatjujs/image/upload/v1721706615/website_news_banner_2024_ver2_1_iz5ul7.png" 
                alt="News Banner" 
                width={700} 
                height={500} 
                className="object-fit"
            />
            </div>
        </div>
        </div>
    );
    }

export default newsContainer;