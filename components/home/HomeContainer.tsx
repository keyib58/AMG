import HomeSlider from "./HomeSlider";
import InnovationGrid from "./InnovationGrid";
import GifGrid from "./GifGrid";
import StaticGrid from "./StaticGrid";
import LetsTalk from "../shared/letstalk";
import ClientsLogo from "../shared/clientLogos";

const HomeContainer = () => {
    return (
        <div className="w-full">
            <HomeSlider />
            <div className="m-auto max-w-[1320px] lg:mt-20">
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <h1 className="text-5xl font-bold Montserrat uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FFD868] to-[#FFFFFF]">
                        YOUR NEXT-GEN GAMING PARTNER
                    </h1>
                    <p className="mt-4 text-lg OpenSans text-white">
                    Since 2018, KingMidas Games has been redefining iGaming.<br className="block md:hidden" /> <br className="block md:hidden" />
                        Our next-gen content isn&apos;t just different— <br className="block" />
                        it&apos;s transformative, driving engagement and revenue for partners seeking innovation and results.
                    </p>
                </div>

                <InnovationGrid
                    bgImage1="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/722f7341fb6c9f158266fe852f2087bfrs_lunsyq.png"
                    bgImage2="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/39a5ea18f63a0f1ce592b22d82fe5267_mmls0w.png"
                    bgImage3="https://res.cloudinary.com/detatjujs/image/upload/v1722928525/a32d9b783f4b32943f8eeaa3c8054cce_bn3l6o.jpg"
                    opacity1={0.5}
                    opacity2={0.1}
                    opacity3={0.15}
                    className="mt-20"
                />
                <GifGrid className="mt-20" />
                <StaticGrid className="mt-20" />
                <ClientsLogo className="mt-20" />
                <LetsTalk className="mt-20" />
            </div>
        </div>
    );
}

export default HomeContainer;
