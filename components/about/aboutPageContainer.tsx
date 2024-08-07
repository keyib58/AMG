import AboutHero from "./aboutHero";
import AboutGrid from "./aboutGrid";
import ClientsLogo from "../shared/clientLogos";

const AboutPageContainer = () => {
    return (
        <div className="max-w-[1320px] lg:mt-10 mx-auto flex flex-col items-center px-4 lg:px-0">
            <AboutHero />
            <AboutGrid className="mt-[50px] lg:mt-[150px]" />
            <ClientsLogo className="mt-[50px] lg:mt-[150px]" />
        </div>
    );
}

export default AboutPageContainer;