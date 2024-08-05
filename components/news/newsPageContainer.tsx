// components/news/newsPageContainer.tsx
import SubHeader from '../shared/subHeader';
import NewsList from './newsList';
import NewsHero from './newsHero';


const NewsPageContainer = () => {
    return (
        <div className="max-w-[1320px] mt-10 mx-auto flex flex-col items-center px-4 lg:px-0">
            <NewsHero />

            <div className="w-full mt-8">
                <SubHeader title="OUR LATEST NEWS" />
            </div>

            <NewsList />
        </div>
    );
}

export default NewsPageContainer;
