import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] lg:mt-[150px] mt-[100px] text-white mx-auto px-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="text-xl mb-4">Last updated: 28 Oct 2024</p>

      <h3 className="text-xl font-bold">Introduction</h3>
      <p>
        We collect personal information to enhance our services. Your data is secured and will not be sold to third parties. You have the right to access, correct, or delete your information at any time. We may update this policy, and you will be notified of significant changes.
      </p>

      <h3 className="text-xl font-bold mt-4">Information Collection</h3>
      <p>
        We collect personal information when you register or use our services, including data provided during account creation, website interactions, and communications with us.
      </p>

      <h3 className="text-xl font-bold mt-4">Use of Information</h3>
      <p>
        Your information is used to provide and improve our services, communicate with you, and comply with legal obligations. We may also use data to personalize your experience and respond to your inquiries.
      </p>

      <h3 className="text-xl font-bold mt-4">Data Security</h3>
      <p>
        We implement reasonable security measures to protect your information; however, absolute security cannot be guaranteed. We continuously assess and improve our security practices to safeguard your data.
      </p>

      <h3 className="text-xl font-bold mt-4">Sharing Information</h3>
      <p>
        We do not sell your personal information to third parties. Your information may only be shared with trusted partners to support service improvements, under strict confidentiality and data protection requirements.
      </p>

      <h3 className="text-xl font-bold mt-4">Your Rights</h3>
      <p>
        You have the right to access, correct, or delete your personal information at any time. Additionally, you may request information about how your data is being used or request restrictions on certain processing activities.
      </p>

      <h3 className="text-xl font-bold mt-4">Changes to Privacy Policy</h3>
      <p>
        We may update this Privacy Policy periodically. In the event of significant changes, we will notify you through appropriate communication channels. Your continued use of our services following these changes constitutes acceptance of the updated policy.
      </p>

    </div>
  );
};

export default PrivacyPolicyPage;
