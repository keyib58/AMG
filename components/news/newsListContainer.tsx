import SubHeader from '../shared/subHeader';
import NewsListing from '@/components/news/newsListing';
import NewsHero from './newsHero';


const NewsListContainer = () => {
    return (
        <div className="max-w-[1320px] mt-10 mx-auto flex flex-col items-center px-4 lg:px-0">
            <NewsHero />

            <div className="w-full mt-8">
                <SubHeader title="OUR LATEST NEWS" />
            </div>

            <NewsListing />
        </div>
    );
}

export default NewsListContainer;