"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-['Pacifico'] text-blue-600 hover:text-blue-700 transition-colors">
              Abdul Aziz
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().getFullYear()} | How we protect and handle your information
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy explains how Abdul Aziz ("I", "me", or "my") collects, uses, 
                and protects your personal information when you visit my portfolio website. 
                As an AI Engineer dedicated to ethical technology practices, I take your privacy seriously.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Collection</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Information You Provide</h3>
                  <p className="text-blue-800 text-sm">
                    When you contact me through the website forms, I collect:
                  </p>
                  <ul className="text-blue-800 text-sm mt-2 space-y-1">
                    <li>• Name and email address</li>
                    <li>• Company/organization details</li>
                    <li>• Project requirements and messages</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-green-800 text-sm">
                    Through analytics and security tools:
                  </p>
                  <ul className="text-green-800 text-sm mt-2 space-y-1">
                    <li>• IP address and browser type</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Referral sources and device information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How I Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-chat-3-line text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-700 text-sm">
                    Respond to your inquiries and discuss potential collaborations or project opportunities.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-line-chart-line text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-700 text-sm">
                    Understand how visitors interact with my portfolio to improve user experience and content.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-shield-check-line text-purple-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-700 text-sm">
                    Monitor and prevent potential security threats and unauthorized access to the website.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-customer-service-2-line text-orange-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Improvement</h3>
                  <p className="text-gray-700 text-sm">
                    Enhance my services and tailor content to better serve visitors and potential clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-lock-2-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Measures</h3>
                    <p className="text-gray-700">
                      I implement appropriate technical and organizational security measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, 
                      or destruction. This includes encryption, secure servers, and regular security assessments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Right to access your personal information</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Right to correct inaccurate data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Right to request deletion of your information</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Right to object to processing of your data</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <i className="ri-information-line text-yellow-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Contact Information</h3>
                  <p className="text-yellow-800 text-sm">
                    For any privacy-related questions or to exercise your rights, please contact me at:
                    <br />
                    <strong>Email:</strong> abdulaziz.agie@gmail.com
                    <br />
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm">
              <p>This privacy policy may be updated periodically. Please check back for the latest version.</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}