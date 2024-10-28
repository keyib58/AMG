import React from 'react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] lg:mt-[150px] mt-[100px] text-white mx-auto px-6">
      <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      <p className="text-xl">Last updated: 28 Oct 2024</p>

      <h3 className="text-xl font-bold my-4">Acceptance of Terms</h3>
      <p>
        By accessing or using our services, you agree to comply with these Terms and Conditions. By using our services, you agree to our Terms, which may be updated periodically. Your continued use of our services confirms your acceptance of the Terms in force at the time.
      </p>

      <h3 className="text-xl font-bold my-4">Changes to Terms</h3>
      <p>
        We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes your acceptance of the new Terms. Please review these Terms periodically for updates.
      </p>

      <h3 className="text-xl font-bold my-4">User Responsibilities</h3>
      <p>
        Users are required to provide accurate and complete information when using our services. You are responsible for maintaining the security of your account, and you accept responsibility for all activities that occur under your account.
      </p>

      <h3 className="text-xl font-bold my-4">Limitation of Liability</h3>
      <p>
        We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. This limitation of liability applies to the fullest extent permitted by law.
      </p>

      <h3 className="text-xl font-bold my-4">Governing Law</h3>
      <p>
        These Terms are governed by the laws of Ontario, Canada. Any legal proceedings related to these Terms will be subject to the jurisdiction of the courts in Ontario.
      </p>
    </div>
  );
};

export default TermsConditionsPage;
