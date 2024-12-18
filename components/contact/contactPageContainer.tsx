import ContactForm from "./contactForm";
import SubHeader from "../shared/subHeader";
import SocialMedia from "../layout/socialMedia";

const ContactPageContainer = () => {
  return (
    <div className="max-w-[1320px] items-center mx-auto flex flex-col lg:mt-[100px] lg:flex-row justify-between px-4 lg:px-4">
      {/* Left Section: Title and Description */}
      <div className="flex flex-col space-y-4 m-4 lg:m-0 text-center lg:text-left lg:max-w-[500px]">

        <h2 className="text-3xl lg:text-4xl font-semibold title-font text-[#d9b75e]"> Let&apos;s Ace the Game:</h2>
        <p className="text-lg content-font text-white">
          Together, we can create a new world in the entertainment industry. Have any exciting ideas? Start the change today by connecting with us!
        </p>

        <div className="flex lg:pt-[80px] flex-col items-center text-white lg:items-start space-y-2 text-center lg:text-left">
          <a href="mailto:hello@amgaming.ca" className="block text-xl">hello@amgaming.ca</a>
        </div>

        {/* Divider */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="w-full lg:w-full lg:max-w-[300px] h-[1px] bg-[#dab765]"></div>
        </div>

        <div className="flex pt-4 justify-center lg:justify-start w-full lg:w-auto">
          <SocialMedia />
        </div>
      </div>


      {/* Right Section: Contact Form */}
      <div className="flex justify-end flex-col w-full lg:w-full lg:max-w-[520px] mt-4 lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPageContainer;
