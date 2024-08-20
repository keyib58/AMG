import ContactForm from "./contactForm";
import SubHeader from "../shared/subHeader";

const ContactPageContainer = () => {
    return (
        <div className="max-w-[1320px] items-center mx-auto flex flex-col lg:mt-[100px] lg:flex-row justify-between px-4 lg:px-0">
            {/* Left Section: Title and Description */}
            <div className="flex flex-col space-y-4 m-4 lg:m-0 text-center lg:text-left lg:max-w-[500px]">
                <div className="bg-[#111111] p-4 rounded-xl">
                    <h2 className="text-3xl lg:text-4xl font-semibold Montserrat bg-gradient-to-r text-transparent from-[#FFD868] to-[#FFFFFF] bg-clip-text">CONTACT US</h2>
                </div>
                <p className="text-white">
                    Get in touch with us! Whether it&apos;s marketing, general questions, or sales, we&apos;re ready to help -
                    just select the relevant department in the form and we&apos;ll get back to you promptly.
                </p>
            </div>

            {/* Right Section: Contact Form */}
            <div className="flex justify-end w-full lg:w-full lg:max-w-[520px] mt-4 lg:mt-0">
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactPageContainer;
