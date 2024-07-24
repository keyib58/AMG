import HomeSlider from "./HomeSlider";
import InnovationGrid from "./InnovationGrid";
import GifGrid from "./GifGrid";
import StaticGrid from "./StaticGrid";
import LetsTalk from "../shared/letstalk";

const HomeContainer = () => {
    return (
        <div className="w-full">
            <HomeSlider />
            <div className="m-auto max-w-[1320px] mb-[200px]">
                <InnovationGrid
                    bgImage1="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/722f7341fb6c9f158266fe852f2087bfrs_lunsyq.png"
                    bgImage2="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/39a5ea18f63a0f1ce592b22d82fe5267_mmls0w.png"
                    bgImage3="https://res.cloudinary.com/detatjujs/image/upload/v1721802969/667e72352890b23ac6a09f5c99f79189_ajikf8.png"
                    opacity1={0.5}
                    opacity2={0.1}
                    opacity3={0.1}
                />
                <GifGrid />
                <StaticGrid />
                <LetsTalk />
            </div>
        </div>
    );
}

export default HomeContainer;
