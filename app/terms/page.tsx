"use client";

import Link from "next/link";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().getFullYear()} | Guidelines for using my portfolio and services
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using this portfolio website, you accept and agree to be bound by 
                these Terms of Service. If you disagree with any part of these terms, please do not 
                use my website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Services</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-computer-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Engineering Services</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Computer Vision Systems</li>
                    <li>• Natural Language Processing</li>
                    <li>• Multimodal AI Solutions</li>
                    <li>• Agentic AI Development</li>
                    <li>• MLOps & Production Deployment</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-handshake-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation & Collaboration</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Technical Architecture Review</li>
                    <li>• AI Strategy Development</li>
                    <li>• Proof of Concept Development</li>
                    <li>• Team Training & Mentoring</li>
                    <li>• Research Partnership</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">Portfolio Content</h3>
                <p className="text-purple-800 text-sm">
                  All content on this website, including but not limited to text, graphics, logos, 
                  images, AI models, code samples, and project descriptions, is the property of 
                  Abdul Aziz and is protected by intellectual property laws.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3">Usage Rights</h3>
                <p className="text-orange-800 text-sm">
                  You may view and download content for personal, non-commercial use. You may not 
                  reproduce, distribute, or use any content for commercial purposes without 
                  explicit written permission.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Engagement</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="ri-chat-quote-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                    <p className="text-gray-700 text-sm">
                      Free initial consultation to discuss project requirements, scope, and feasibility. 
                      This includes technical assessment and preliminary recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="ri-file-text-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Project Agreement</h3>
                    <p className="text-gray-700 text-sm">
                      Formal projects require a detailed agreement outlining deliverables, timelines, 
                      payment terms, intellectual property rights, and confidentiality provisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="ri-shield-keyhole-line text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Confidentiality</h3>
                    <p className="text-gray-700 text-sm">
                      All client information and project details are treated with strict confidentiality. 
                      Non-disclosure agreements are available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations of Liability</h2>
              <div className="bg-gray-100 p-5 rounded-lg">
                <p className="text-gray-700 text-sm italic">
                  The information and AI solutions presented on this portfolio are for demonstration 
                  purposes. While I strive for accuracy and excellence in all projects, I cannot 
                  guarantee specific results for future engagements. All professional services are 
                  provided on a best-effort basis with clear scope definitions in project agreements.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ethical AI Commitment</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-heart-3-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Responsible AI Development</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  I am committed to developing AI solutions that are ethical, transparent, and 
                  socially responsible. This includes:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    <span>Fairness and bias mitigation</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    <span>Transparency in AI decision-making</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    <span>Privacy protection and data security</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    <span>Accountability and human oversight</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="ri-customer-service-2-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Contact & Questions</h3>
                  <p className="text-blue-800 text-sm">
                    For any questions about these Terms of Service or to discuss potential collaboration, 
                    please contact me at:
                    <br />
                    <strong>Email:</strong> abdulaziz.agie@gmail.com
                    <br />
                    <strong>Response Time:</strong> Within 24-48 hours for professional inquiries
                  </p>
                </div>
              </div>
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