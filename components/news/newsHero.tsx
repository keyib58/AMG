import Image from "next/image";
import SubscribeForm from "./subscribeForm";


export default function NewsHero() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
            {/* Left Column */}
            <div className="flex justify-center">
                <div className="space-y-8">
                    <h1 className="text-4xl font-bold text-white Montserrat">Stay in the loop with our newsletter</h1>
                    <p className="text-lg Montserrat text-white">
                        Game launches, company news, and more —<br />
                        conveniently packaged for a swift read.
                    </p>
                    <SubscribeForm />
                </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-center">
                <Image
                    src="https://res.cloudinary.com/detatjujs/image/upload/v1721706615/website_news_banner_2024_ver2_1_iz5ul7.png"
                    alt="News Banner"
                    width={700}
                    height={500}
                    className="object-contain"
                />
            </div>
        </div>

    )
}