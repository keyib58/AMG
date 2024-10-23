import AboutHero from "./aboutHero";
import AboutGrid from "./aboutGrid";
import ClientsLogo from "../shared/clientLogos";
import ValuesGrid from "./valuesGrid";
import StoryGrid from "./storyGrid";
const AboutPageContainer = () => {
    return (
        <div className="max-w-[1320px] lg:mt-10 mx-auto flex flex-col items-center px-4 lg:px-0">
            <AboutHero />
            <AboutGrid className="mt-[50px] lg:mt-[150px]" />
            <ValuesGrid className="mt-20" />
            <StoryGrid className="mt-20" />
        </div>
    );
}

export default AboutPageContainer;