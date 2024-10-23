import HomeSlider from "./HomeSlider";
import InnovationGrid from "./InnovationGrid";
import GifGrid from "./GifGrid";
import StaticGrid from "./StaticGrid";
import LetsTalk from "../shared/letstalk";
import ClientsLogo from "../shared/clientLogos";
import Commitment from "./Commitment";

const HomeContainer = () => {
    return (
        <div className="w-full">
            <HomeSlider />
            <div className="m-auto max-w-[1320px] lg:mt-20">
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <h1 className="text-5xl title-font font-bold uppercase text-[#dab765]">
                        Ace the Game
                    </h1>
                    <p className="mt-4 text-lg content-font text-white max-w-[800px]">
                        We offer advanced responsible gaming features and seamless out-of-the-box integrations with top-tier providers. With support for multiple regulatory jurisdictions, our highly customizable open platform delivers the best operational tools in the industry.
                    </p>
                </div>

                {/* <InnovationGrid
                    bgImage1="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/722f7341fb6c9f158266fe852f2087bfrs_lunsyq.png"
                    bgImage2="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/39a5ea18f63a0f1ce592b22d82fe5267_mmls0w.png"
                    bgImage3="https://res.cloudinary.com/detatjujs/image/upload/v1722928525/a32d9b783f4b32943f8eeaa3c8054cce_bn3l6o.jpg"
                    opacity1={0.5}
                    opacity2={0.1}
                    opacity3={0.15}
                    className="mt-20"
                /> */}
                <div className="flex flex-col items-center justify-center text-center p-8 mt-20">
                    <h2 className="text-5xl title-font font-bold uppercase text-[#dab765]">
                    Our Growing List of Partners
                    </h2>
                    <p className="mt-4 text-lg content-font text-white max-w-[800px]">
                    We take pride in partnering with leading companies in the gaming industry, consistently pushing boundaries and achieving remarkable success in the entertainment sector.                   
                    </p>

                    <p className="mt-4 text-lg content-font text-white max-w-[800px]">
                    We collaborate with the most innovative game providers to ensure we have countless games to suit your players. What’s more? We are continuously onboarding new providers!                    </p>
                </div>
                <ClientsLogo />

                <StaticGrid className="mt-20" />    
                <Commitment />
                <LetsTalk className="mt-20" />
            </div>
        </div>
    );
}

export default HomeContainer;
