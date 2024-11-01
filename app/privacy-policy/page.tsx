import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] lg:mt-[150px] mt-[100px] text-white mx-auto px-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="text-xl mb-4">Last updated: 28 Oct 2024</p>

      <h3 className="text-xl font-bold">Introduction</h3>
      <p>
        At Ace Maker Gaming Ltd., we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you use our services. By accessing or using our services, you agree to the practices described in this policy.
      </p>

      <h3 className="text-xl font-bold mt-4">Information We Collect</h3>
      <p>
        We collect personal information directly from you when you create an account, interact with our services, or communicate with us. This may include contact details, account information, and usage data related to your activity on our platform.
      </p>

      <h3 className="text-xl font-bold mt-4">How We Use Your Information</h3>
      <p>
        We use your information to operate, maintain, and improve our services. This includes personalizing your experience, managing your account, responding to your requests, and complying with legal requirements. We may also use aggregated data for analytics to enhance service functionality and user experience.
      </p>

      <h3 className="text-xl font-bold mt-4">Data Security</h3>
      <p>
        We implement robust security measures to protect your personal information from unauthorized access or disclosure. However, please be aware that no security measures can provide absolute protection. We are committed to regularly reviewing and enhancing our security practices to ensure your data’s safety.
      </p>

      <h3 className="text-xl font-bold mt-4">Information Sharing</h3>
      <p>
        We do not sell your personal data. We may share your information with trusted partners and service providers who assist us in delivering and improving our services. Any third-party access to your data is subject to strict confidentiality agreements and compliance with data protection laws.
      </p>

      <h3 className="text-xl font-bold mt-4">Your Data Rights</h3>
      <p>
        You have the right to access, update, and delete your personal data. You may also request details on how your information is processed and ask for restrictions on specific processing activities. To exercise these rights, please contact us through the channels provided below.
      </p>

      <h3 className="text-xl font-bold mt-4">Policy Updates</h3>
      <p>
        We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. If we make substantial modifications, we will notify you through appropriate means. Your continued use of our services after these updates constitutes your acceptance of the revised policy.
      </p>

      <h3 className="text-xl font-bold mt-4">Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at <a href="mailto:hello@amgaming.ca" className="underline">hello@amgaming.ca</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
