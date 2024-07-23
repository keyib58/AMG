'use client';
import SubscribeForm from "./subscribeForm";

const NewsCTA = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white Montserrat">Stay in the loop with our newsletter</h1>
      <p className="text-lg OpenSans text-white">Game launches, company news, and more — conveniently packaged for a swift read.</p>
      <SubscribeForm />
    </div>
  );
};

export default NewsCTA;
