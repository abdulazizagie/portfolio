/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectStatus =
  | "Production Ready"
  | "Scalable Production"
  | "Enterprise Deployment"
  | "Healthcare Deployment"
  | "Enterprise Ready";

type ProjectCategory =
  | "Computer Vision"
  | "Data Engineering"
  | "API Integration"
  | "Speech AI"
  | "NLP & RAG"
  | "LLM Training";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  metrics: string;
  slug: string;
}

const statusColors: Record<ProjectStatus, string> = {
  "Production Ready": "bg-green-100 text-green-800 border-green-200",
  "Scalable Production": "bg-blue-100 text-blue-800 border-blue-200",
  "Enterprise Deployment": "bg-purple-100 text-purple-800 border-purple-200",
  "Healthcare Deployment": "bg-red-100 text-red-800 border-red-200",
  "Enterprise Ready": "bg-indigo-100 text-indigo-800 border-indigo-200",
};

export default function ProjectsSection() {
  const router = useRouter();

  const projects: Project[] = [
    {
      title: "Dental X-Ray AI Diagnostic Platform",
      description:
        "State-of-the-art multimodal diagnostic system combining YOLOv8 computer vision for real-time bone loss detection with intelligent RAG-powered patient note analysis, delivering clinical-grade insights for dental healthcare professionals",
      longDescription:
        "Enterprise healthcare AI solution integrating advanced computer vision and natural language processing to revolutionize dental diagnostics through automated anomaly detection and intelligent patient data interpretation.",
      image: "/8.png",
      tech: ["YOLOv8", "Pose Estimation", "OCR", "ChromaDB", "FastAPI", "RAG"],
      category: "Computer Vision",
      status: "Production Ready",
      metrics: "95% Clinical Accuracy, Real-Time Analysis",
      slug: "dental-xray-multimodal-ai",
    },
    {
      title: "Enterprise Medical Data Pipeline",
      description:
        "Scalable data engineering infrastructure automating medical data acquisition, transformation, and quality assurance with intelligent preprocessing workflows, supporting mission-critical machine learning operations at healthcare scale",
      longDescription:
        "Production-grade data orchestration platform engineered for healthcare compliance, featuring automated ETL pipelines, advanced data validation, and enterprise-scale processing capabilities for clinical machine learning applications.",
      image: "/5.jpg",
      tech: ["Python", "Pandas", "Selenium", "CVAT", "Label Studio", "Apache Airflow"],
      category: "Data Engineering",
      status: "Scalable Production",
      metrics: "10TB+ Processed Monthly, 99.9% Pipeline Reliability",
      slug: "data-collection-preprocessing-pipelines",
    },
    {
      title: "Excel-Integrated AI Analytics Suite",
      description:
        "Revolutionary enterprise integration enabling healthcare professionals to leverage advanced AI predictions directly within Microsoft Excel through seamless REST API connectivity, transforming familiar spreadsheets into powerful diagnostic tools",
      longDescription:
        "Innovative low-code AI platform democratizing machine learning access for non-technical healthcare users, delivering sophisticated predictive analytics through intuitive Excel-native interfaces with embedded visualization capabilities.",
      image: "/7.jpg",
      tech: ["FastAPI", "Excel VBA", "Pandas", "Streamlit", "Matplotlib", "REST API"],
      category: "API Integration",
      status: "Enterprise Deployment",
      metrics: "500+ Active Healthcare Users Globally",
      slug: "excel-ai-deployment-dashboard",
    },
    {
      title: "Multilingual Healthcare Voice Assistant",
      description:
        "Privacy-first speech recognition platform fine-tuned for medical terminology across English, Urdu, and Arabic, featuring offline processing capabilities and natural text-to-speech responses designed specifically for clinical environments",
      longDescription:
        "HIPAA-conscious voice AI system architected for healthcare settings, combining domain-specific acoustic models with multilingual support to enable hands-free clinical documentation and voice-driven medical workflows.",
      image: "/4.jpg",
      tech: ["Wav2Vec2", "SpeechRecognition", "HuggingFace", "TTS", "DeepSpeech", "Privacy-First"],
      category: "Speech AI",
      status: "Production Ready",
      metrics: "87% Word Accuracy, 3-Language Support",
      slug: "saramine-voice-recognition-system",
    },
    {
      title: "Intelligent Document Processing Engine",
      description:
        "Enterprise document intelligence platform leveraging retrieval-augmented generation and vector search to extract actionable insights from complex medical PDFs, enabling semantic understanding and context-aware information retrieval at scale",
      longDescription:
        "Advanced RAG architecture combining OCR, multimodal processing, and transformer-based semantic search to transform unstructured medical documents into queryable knowledge bases with clinical-grade accuracy.",
      image: "/9.png",
      tech: ["FastAPI", "ChromaDB", "HuggingFace", "Tesseract", "LangChain", "Vector Search"],
      category: "NLP & RAG",
      status: "Enterprise Ready",
      metrics: "95% Retrieval Precision, 10M+ Documents Indexed",
      slug: "pdf-rag-system-multimodal-processing",
    },
    {
      title: "Large-Scale Vision-Language Model Training",
      description:
        "High-performance multimodal model fine-tuning pipeline optimized for medical imaging, leveraging distributed GPU infrastructure to train PaLI-Gemma 3B on specialized healthcare image-text datasets",
      longDescription:
        "Research-grade LLM training infrastructure implementing efficient fine-tuning strategies for vision-language models, specifically adapted for medical imaging applications requiring multimodal understanding capabilities.",
      image: "/2.jpg", // FIXED: removed the backslash
      tech: ["PaLI-Gemma", "T4 GPU", "Fine-tuning", "Multimodal", "PyTorch", "Kaggle"],
      category: "LLM Training",
      status: "Healthcare Deployment",
      metrics: "3B Parameters, Distributed GPU Training",
      slug: "llm-trainer-on-kaggle",
    },
  ];

  const handleViewDetails = (project: Project) => {
    router.push(`/projects/${project.slug}`);
  };

  const handleCardClick = (project: Project, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest("button")) return;
    handleViewDetails(project);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Delivering production-grade artificial intelligence systems across healthcare diagnostics, 
            enterprise data infrastructure, intelligent automation, and advanced natural language processing 
            with proven scalability and clinical reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={(e) => handleCardClick(project, e)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${statusColors[project.status]} text-xs font-medium px-3 py-1 rounded-full border`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {project.metrics}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer text-sm"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    View Details
                  </button>

                  <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <i className="ri-github-line"></i>
                  </button>

                  <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <i className="ri-external-link-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Production-Grade AI Systems Deployed</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-hospital-line text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">8+</h3>
            <p className="text-gray-600">Clinical AI Solutions in Healthcare</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-global-line text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Enterprise Users Worldwide</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center shadow-lg"
          >
            <i className="ri-arrow-right-line mr-3"></i>
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}