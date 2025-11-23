"use client";

type Color = "blue" | "green" | "purple" | "orange" | "red" | "indigo";

interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
  color: Color;
  stats: string;
}

export default function ExpertiseOverview() {
  const expertiseAreas: ExpertiseArea[] = [
    {
      icon: "ri-database-line",
      title: "Data Engineering & ETL",
      description:
        "Enterprise-scale data pipelines with automated ingestion, transformation, quality validation, and version control for production ML workflows",
      color: "blue",
      stats: "8+ Production Pipelines",
    },
    {
      icon: "ri-brain-line",
      title: "Deep Learning & Neural Networks",
      description:
        "Advanced architectures spanning CNNs, transformers, attention mechanisms, and large language models for complex pattern recognition",
      color: "green",
      stats: "12+ Trained Models",
    },
    {
      icon: "ri-robot-2-line",
      title: "Agentic AI Systems",
      description:
        "Autonomous intelligent agents with dynamic planning, contextual reasoning, and coordinated multi-agent orchestration capabilities",
      color: "purple",
      stats: "5+ Agent Frameworks",
    },
    {
      icon: "ri-search-line",
      title: "RAG & Semantic Search",
      description:
        "Production-grade retrieval-augmented generation with multimodal embeddings, vector databases, and intelligent context management",
      color: "orange",
      stats: "7+ RAG Implementations",
    },
    {
      icon: "ri-eye-line",
      title: "Computer Vision",
      description:
        "Real-time object detection, instance segmentation, pose estimation, and clinical medical imaging analysis systems",
      color: "red",
      stats: "10+ Vision Solutions",
    },
    {
      icon: "ri-cloud-line",
      title: "MLOps & Infrastructure",
      description:
        "End-to-end model deployment with containerization, CI/CD automation, monitoring, and scalable cloud infrastructure",
      color: "indigo",
      stats: "15+ Production Systems",
    },
  ];

  const colorClasses: Record<Color, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Technical Competencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack AI engineering expertise spanning data infrastructure, model development,
            intelligent systems architecture, and scalable production deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
            >
              <div
                className={`w-14 h-14 ${colorClasses[area.color]} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <i className={`${area.icon} text-2xl`}></i>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {area.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-3">
                {area.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 font-medium">
                <i className="ri-projector-line mr-2"></i>
                {area.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                <i className="ri-settings-3-line text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                End-to-End Development Process
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data Engineering</h4>
                  <p className="text-sm text-gray-600">
                    Automated collection, validation, preprocessing at scale
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Architecture Design</h4>
                  <p className="text-sm text-gray-600">
                    Model selection, prototyping, validation strategy
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Training & Optimization</h4>
                  <p className="text-sm text-gray-600">
                    Distributed training, hyperparameter tuning, fine-tuning
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Production Deployment</h4>
                  <p className="text-sm text-gray-600">
                    API development, monitoring, continuous improvement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                <i className="ri-trophy-line text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Industry Specializations
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-3 bg-red-50 rounded-xl">
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-heart-pulse-line text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Clinical AI & Healthcare</h4>
                  <p className="text-sm text-gray-600">
                    Medical imaging diagnostics, patient data intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-file-text-line text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Document Intelligence</h4>
                  <p className="text-sm text-gray-600">
                    Intelligent OCR, automated form processing, data extraction
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-earth-line text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Geospatial Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Satellite image analysis, environmental pattern detection
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-voice-recognition-line text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Speech & Voice AI</h4>
                  <p className="text-sm text-gray-600">
                    Multilingual ASR, natural TTS, voice interface design
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer shadow-lg">
            <i className="ri-arrow-right-line mr-2"></i>
            Explore Detailed
          </button>
        </div>

      </div>
    </section>
  );
}
