"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 poppins text-gray-900 dark:text-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: 6 Jul, 2025</p>

      <div className="space-y-6 leading-relaxed">
        {/* Intro */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Introduction</h2>
        <p>
          Welcome to <strong>Commeriva</strong>. We provide a cloud-based
          e-commerce management platform designed to streamline online retail
          operations, reduce manual effort, and optimize costs for merchants and
          distributors (referred to as “Service”).
        </p>
        <p>
          This Privacy Policy describes how we gather, use, and under certain
          circumstances disclose your personal information. It also outlines the
          safeguards we put in place to protect it. Additionally, this Policy
          explains your options regarding the collection, use, and sharing of
          your information. It applies to our websites, mobile applications, and
          any Commeriva-branded services or portals. By accessing or using our
          Site or App, you acknowledge and agree to the practices described in
          this Policy.
        </p>
        <p>
          Your privacy and trust are important to us. We only collect
          information when it is necessary and relevant to our business
          relationship with you. Data is kept only as long as required by law or
          for the purpose for which it was collected.
        </p>
        <p>This document represents the initial version of our Privacy Policy.</p>

        {/* Data Collection */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">1. Information We Collect</h2>
        <p>
          When you use our services, we may collect different types of personal
          and transactional information. This may include, but is not limited
          to, your name, contact details, billing/shipping address, phone
          number, email address, payment information, and location data. We
          collect and store such information to:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Process orders and manage your account</li>
          <li>Confirm and process payments securely</li>
          <li>Improve the content and usability of our website/app</li>
          <li>Monitor downloads and usage activity</li>
          <li>
            Provide updates, promotions, or requested information about our
            products and services
          </li>
        </ul>
        <p>
          We may also share your details with trusted third-party service
          providers (e.g., logistics partners) solely to fulfill your orders.
          You are responsible for ensuring the accuracy of the information you
          provide.
        </p>
        <p>
          Your account details and service information are stored securely and
          can be accessed by logging into your Commeriva account. You are
          responsible for keeping your login credentials confidential.
        </p>

        {/* Other Uses */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          2. Other Uses of Your Information
        </h2>
        <p>
          We may use your data for internal purposes such as analytics, customer
          support, and product development. We may also contact you with updates
          about our services, newsletters, promotions, or offers from partners
          within our business group. You can opt out of promotional emails at
          any time by clicking the unsubscribe link included in those messages.
        </p>
        <p>
          Aggregated or anonymized data may also be shared with third parties
          (such as analytics providers or advertisers), but it will not identify
          you personally.
        </p>

        {/* Third Parties */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">3. Third Parties and Links</h2>
        <p>
          We sometimes work with external vendors, agents, or subcontractors who
          help us deliver services, process payments, analyze data, or provide
          marketing and support assistance. These parties may have limited
          access to your personal information but are contractually obligated to
          protect it.
        </p>
        <p>
          Commeriva does not sell your personal data to unrelated third parties.
          However, if our business undergoes a merger, acquisition, or sale,
          your data may be transferred as part of that transaction. Our website
          may contain links to third-party websites. We are not responsible for
          the privacy practices or content of those external sites.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">4. Cookies</h2>
        <p>
          We use cookies—small text files stored on your device—to improve your
          browsing experience, recognize returning users, and analyze site
          traffic. Some cookies are essential for site functionality, while
          others help us improve our services. You may disable cookies through
          your browser settings, but this could affect site usability.
        </p>
        <p>
          Our website also uses Google Analytics to gather anonymous traffic and
          usage statistics. By using Commeriva’s Site or App, you consent to
          this processing of data in line with Google’s privacy practices.
        </p>

        {/* Retention */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">5. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes described in this Policy, comply with legal
          obligations, resolve disputes, and enforce agreements. Usage data may
          be kept longer for analytics or security purposes, unless law requires
          otherwise.
        </p>

        {/* Transfers */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">6. Data Transfers</h2>
        <p>
          Your personal information may be stored and processed outside your
          home country. By providing your information, you consent to such
          transfers, provided adequate safeguards are in place to protect your
          data in accordance with this Policy.
        </p>

        {/* Security */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">7. Security</h2>
        <p>
          We use appropriate technical and organizational measures to safeguard
          your information from unauthorized access, alteration, or disclosure.
          While no system can be guaranteed 100% secure, we continuously review
          and update our practices to help protect your data.
        </p>

        {/* Rights */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">8. Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of your
          personal information that we hold. You may also request that we limit
          or stop using your data for marketing purposes. To exercise these
          rights, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
