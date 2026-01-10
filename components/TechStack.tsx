"use client";

type Color = "blue" | "green" | "purple" | "orange" | "red" | "indigo";

interface TechCategory {
  category: string;
  icon: string;
  tools: string[];
  color: Color;
}

export default function TechStack() {
  const techCategories: TechCategory[] = [
    {
      category: "Programming Languages",
      icon: "ri-code-line",
      tools: ["Python", "C++", "SQL", "Shell/Bash"],
      color: "blue",
    },
    {
      category: "AI & ML Frameworks",
      icon: "ri-brain-line",
      tools: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "XGBoost",
        "HuggingFace",
      ],
      color: "green",
    },
    {
      category: "Computer Vision",
      icon: "ri-eye-line",
      tools: ["YOLOv8", "Detectron2", "SAM", "OpenCV", "Pose Estimation"],
      color: "purple",
    },
    {
      category: "NLP & Multimodal AI",
      icon: "ri-chat-3-line",
      tools: ["BERT", "LLaMA", "PaLI-Gemma", "Gemini Pro", "Fine-tuning"],
      color: "orange",
    },
    {
      category: "Vector Databases & RAG",
      icon: "ri-database-line",
      tools: ["ChromaDB", "FAISS", "Weaviate", "LangChain", "LangGraph"],
      color: "red",
    },
    {
      category: "Deployment & DevOps",
      icon: "ri-cloud-line",
      tools: ["FastAPI", "Docker", "Kubernetes", "Streamlit", "TorchServe"],
      color: "indigo",
    },
  ];

  const colorClasses: Record<Color, string> = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    purple: "bg-purple-500 text-white",
    orange: "bg-orange-500 text-white",
    red: "bg-red-500 text-white",
    indigo: "bg-indigo-500 text-white",
  };

  return (
    <section className="py-14 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Stack & Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade tools powering AI systems from research to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group border border-gray-200">
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${colorClasses[category.color]}
                    rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-bar-chart-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Performance Evaluation
              </h3>
            </div>

            <div className="space-y-2">
              {[
                "Precision-Recall Analysis",
                "Detection Metrics (mAP, IoU)",
                "Statistical Testing",
                "K-Fold Cross-Validation",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-rocket-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Advanced Methodologies
              </h3>
            </div>

            <div className="space-y-2">
              {[
                "Transfer Learning",
                "Knowledge Distillation",
                "Federated Learning",
                "AutoML & NAS",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-cloud-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                MLOps & Infrastructure
              </h3>
            </div>

            <div className="space-y-2">
              {[
                "Docker & Containers",
                "Kubernetes Orchestration",
                "Automated CI/CD",
                "Real-Time Monitoring",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Let's Build Your Next AI Solution
          </h3>

          <p className="text-lg opacity-90 mb-5 max-w-2xl mx-auto">
            Transform your business challenges into intelligent, scalable AI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <button
              onClick={() => {
                window.location.href =
                  "mailto:abdulazizai01@gmail.com?subject=AI%20Project%20Discussion&body=Hello%20Abdul%2C%20I%20want%20to%20discuss%20an%20AI%20project.";
              }}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <i className="ri-rocket-line mr-2"></i>
              Discuss Your Project
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
