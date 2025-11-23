"use client";

import Link from "next/link";

export default function Footer() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/abdulazizagie", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/Abdulaziz_agie", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:abdulaziz.agie@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923191566730";
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-['Pacifico'] text-blue-400 hover:text-blue-300 cursor-pointer">
              Abdul Aziz
            </Link>
            <p className="mt-2 text-gray-400 leading-relaxed max-w-md text-sm">
              AI Engineer specializing in production-grade computer vision, natural language processing, 
              multimodal intelligence, and agentic systems. Transforming complex challenges into 
              scalable AI solutions with proven enterprise deployment experience.
            </p>
            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleLinkedInClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                aria-label="LinkedIn Profile">
                <i className="ri-linkedin-fill text-base"></i>
              </button>
              <button
                onClick={handleGitHubClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                aria-label="GitHub Profile">
                <i className="ri-github-fill text-base"></i>
              </button>
              <button
                onClick={handleTwitterClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer"
                aria-label="Twitter Profile">
                <i className="ri-twitter-fill text-base"></i>
              </button>
              <button
                onClick={handleEmailClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                aria-label="Email Contact">
                <i className="ri-mail-fill text-base"></i>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
                  <i className="ri-mail-line mr-2"></i>
                  abdulaziz.agie@gmail.com
                </button>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
                  <i className="ri-phone-line mr-2"></i>
                  +92 319 1566 730
                </button>
              </li>
              <li>
                <button
                  onClick={handleLinkedInClick}
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
                  <i className="ri-linkedin-line mr-2"></i>
                  LinkedIn Profile
                </button>
              </li>
              <li>
                <button
                  onClick={handleGitHubClick}
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
                  <i className="ri-github-line mr-2"></i>
                  GitHub Portfolio
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © 2024 Abdul Aziz. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-xs transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-xs transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}