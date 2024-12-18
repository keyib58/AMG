import SubHeader from '../shared/subHeader';
import NewsListing from '@/components/news/newsListing';
import NewsHero from './newsHero';


const NewsListContainer = () => {
    return (
        <div className="max-w-[1320px] mx-auto flex flex-col items-center px-4 lg:px-0">
      

            <div className="w-full mt-8">
                <SubHeader title="OUR LATEST BLOG" />
            </div>

            <NewsListing />
        </div>
    );
}

export default NewsListContainer;