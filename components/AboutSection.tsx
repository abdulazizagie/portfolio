/* eslint-disable @next/next/no-img-element */
"use client";

export default function AboutSection() {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/my_profile_image.png"
                alt="AI Developer Workspace"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Current Innovation Focus
                    </h4>
                    <p className="text-sm text-gray-600">
                      Autonomous AI Agents & Multimodal Intelligence
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-lightbulb-flash-line text-blue-600 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-3">
              <i className="ri-user-3-line mr-2"></i>
              ABOUT ME
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Engineering AI Solutions That Drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Real-World Impact
              </span>
            </h2>

            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              As a specialized AI engineer, I architect intelligent systems that bridge the gap between 
              cutting-edge research and production-ready applications. With deep expertise across machine 
              learning, computer vision, and natural language processing, I deliver enterprise-grade AI 
              solutions that solve complex challenges in healthcare, automation, and data intelligence.
            </p>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              My approach combines rigorous engineering discipline with innovative thinking—integrating 
              advanced architectures like transformers, retrieval-augmented generation, and vision models 
              into scalable, maintainable systems. Currently pioneering agentic AI frameworks that enable 
              autonomous reasoning, planning, and adaptive decision-making for next-generation applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-robot-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Agentic AI Systems</h3>
                <p className="text-gray-600 text-sm">
                  Autonomous multi-agent architectures with intelligent tool orchestration
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-green-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Computer Vision
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced object detection, segmentation, and clinical imaging analytics
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-search-line text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  RAG & Knowledge Systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Enterprise multimodal retrieval with semantic vector databases
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-flow-chart text-orange-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Production MLOps</h3>
                <p className="text-gray-600 text-sm">
                  Containerized deployment pipelines with FastAPI microservices
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-trophy-line text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Track Record of Excellence
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">
                    8+ Clinical AI Deployments
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Multi-Agent RAG Systems
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Real-Time Vision Processing
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Enterprise ML Infrastructure
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
