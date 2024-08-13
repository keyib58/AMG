import Image from "next/image";
import SubscribeForm from "./subscribeForm";

export default function NewsHero() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center lg:mt-6">
            {/* Right Column (Image) - Moved to top for tablet and mobile */}
            <div className="flex justify-center order-1 md:order-2">
                <Image
                    src="https://res.cloudinary.com/detatjujs/image/upload/v1721706615/website_news_banner_2024_ver2_1_iz5ul7.png"
                    alt="News Banner"
                    width={700}
                    height={500}
                    className="object-contain"
                />
            </div>

            {/* Left Column (Text and Form) */}
            <div className="flex justify-center order-2 md:order-1">
                <div className="lg:space-y-8 space-y-4">
                    <h1 className="text-4xl font-bold text-white Montserrat">Stay in the loop with our newsletter</h1>
                    <p className="text-lg Montserrat text-white">
                        Game launches, company news, and more —<br />
                        conveniently packaged for a swift read.
                    </p>
                    <SubscribeForm />
                </div>
            </div>
        </div>
    )
}
