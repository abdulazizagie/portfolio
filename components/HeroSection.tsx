"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Abdul-Aziz-AI-Developer-Resume.pdf";
    link.download = "Abdul-Aziz-AI-Developer-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:abdulaziz.agie@gmail.com?subject=Hello%20Abdul%20Aziz";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923191566730";
  };

  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative py-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.92)), url('https://readdy.ai/api/search-image?query=Professional%20AI%20developer%20workspace%20with%20multiple%20high-resolution%20monitors%20displaying%20advanced%20neural%20network%20architectures%20and%20machine%20learning%20algorithms%2C%20modern%20tech%20office%20environment%20with%20ambient%20blue%20and%20purple%20lighting%2C%20sophisticated%20coding%20setup%20with%20AI%20research%20papers%20and%20deep%20learning%20frameworks%2C%20clean%20minimalist%20workspace%20design%20with%20futuristic%20technology%20elements%2C%20inspiring%20tech%20professional%20atmosphere%20with%20data%20visualization%20and%20code%20interfaces&width=1920&height=1080&seq=hero-bg-enhanced&orientation=landscape')`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div
            className={`text-white transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm tracking-wider">
                AVAILABLE FOR AI PROJECTS
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              AI & Machine Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-1">
                Developer
              </span>
            </h1>

            <p className="text-base leading-relaxed mb-3 text-gray-300">
              Creating intelligent systems that transform data into actionable insights. Specialized in{" "}
              <span className="text-blue-300 font-medium">Agentic AI</span>,
              <span className="text-green-300 font-medium"> Computer Vision</span>, and
              <span className="text-purple-300 font-medium"> Healthcare AI</span> solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <button
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group p-2 rounded-lg hover:bg-white/5"
              >
                <i className="ri-mail-line mr-2 text-blue-400 group-hover:text-blue-300"></i>
                <span className="text-sm">abdulaziz.agie@gmail.com</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group p-2 rounded-lg hover:bg-white/5"
              >
                <i className="ri-phone-line mr-2 text-green-400 group-hover:text-green-300"></i>
                <span className="text-sm">+92 319 1566 730</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                <i className="ri-robot-line text-blue-400 mr-1"></i>
                <span className="text-sm">Multi-Agent Systems</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                <i className="ri-eye-line text-green-400 mr-1"></i>
                <span className="text-sm">Medical Imaging AI</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                <i className="ri-search-line text-purple-400 mr-1"></i>
                <span className="text-sm">RAG Pipelines</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all inline-flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <i className="ri-folder-line mr-1"></i>
                View Projects
              </Link>
              <button
                onClick={handleDownloadResume}
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center justify-center"
              >
                <i className="ri-download-line mr-1"></i>
                Download CV
              </button>
            </div>

            <div className="flex space-x-2 mb-6">
              <button
                onClick={handleLinkedInClick}
                className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600/20 transition-colors cursor-pointer border border-white/10"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gray-700/20 transition-colors cursor-pointer border border-white/10">
                <i className="ri-github-fill text-lg"></i>
              </button>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-red-600/20 transition-colors cursor-pointer border border-white/10"
              >
                <i className="ri-mail-fill text-lg"></i>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium group-hover:text-blue-300 transition-colors">
                  AI Systems
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:border-green-500/30 transition-all group">
                <div className="text-2xl font-bold text-white mb-1">8+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium group-hover:text-green-300 transition-colors">
                  Healthcare AI
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="text-2xl font-bold text-white mb-1">4+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium group-hover:text-purple-300 transition-colors">
                  Years Exp
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`relative transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-3">
              {/* Hero Boxes */}
              {[
                {
                  title: "Agentic AI",
                  icon: "ri-robot-line",
                  color: "blue",
                  text: "Multi-agent systems with autonomous reasoning and tool calling capabilities",
                },
                {
                  title: "Computer Vision",
                  icon: "ri-eye-line",
                  color: "green",
                  text: "YOLOv8, SAM, medical imaging, and real-time detection systems",
                },
                {
                  title: "RAG Systems",
                  icon: "ri-search-line",
                  color: "purple",
                  text: "Multimodal retrieval with ChromaDB and advanced vector databases",
                },
                {
                  title: "MLOps",
                  icon: "ri-cloud-line",
                  color: "orange",
                  text: "Production deployment with FastAPI, Docker, and comprehensive monitoring",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mr-3`}>
                      <i className={`${item.icon} text-${item.color}-400 text-xl`}></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-purple-400/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
