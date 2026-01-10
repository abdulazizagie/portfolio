/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
type ProjectStatus = "Production" | "Completed" | "In Progress";
type ProjectCategory =
  | "Computer Vision"
  | "Data Engineering"
  | "API Integration"
  | "Speech AI"
  | "NLP & RAG"
  | "Remote Sensing"
  | "LLM Training";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  tech: string[];
  status: ProjectStatus;
  date: string;
  github: string;
  demo: string;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Dental X-ray Multimodal AI",
      description:
        "Real-time dental X-ray analysis for bone loss using custom pose estimation. Detects bone level, calculates measurement ratios, and integrates with RAG chatbot for patient notes via OCR.",
      longDescription:
        "Comprehensive dental AI system combining computer vision and natural language processing. Features real-time bone loss detection using YOLOv8 object detection, custom pose estimation for dental structure analysis, and an intelligent chatbot powered by OCR for patient note processing. Outputs diagnosis in both visual and textual formats.",
      image:"./8.png",
      category: "Computer Vision",
      tech: ["YOLOv8", "Pose Estimation", "OCR", "ChromaDB", "FastAPI", "RAG"],
      status: "Production",
      date: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Data Collection & Preprocessing Pipelines",
      description:
        "Automated collection of medical images and documents via APIs and scraping. Robust data cleaning, labeling, and augmentation pipelines for large-scale training datasets.",
      longDescription:
        "Comprehensive data engineering solution featuring automated medical data collection, cleaning, and preprocessing. Includes advanced augmentation pipelines using Albumentations with support for flip, blur, noise, brightness, and zoom transformations for both NLP and CV model training.",
      image:"./5.jpg",
      category: "Data Engineering",
      tech: ["Python", "Pandas", "OpenCV", "Selenium", "CVAT", "Label Studio"],
      status: "Production",
      date: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Excel AI Deployment Dashboard",
      description:
        "FastAPI backend connecting with Excel via REST APIs. Doctors upload patient data in Excel and get model predictions directly in spreadsheet with embedded visualizations.",
      longDescription:
        "Innovative Excel-integrated AI system allowing healthcare professionals to interact with AI models directly through spreadsheets. Features REST API connectivity, embedded visualizations using Matplotlib, and dual deployment via Streamlit for non-technical users.",
      image:"./7.jpg",
      category: "API Integration",
      tech: [
        "FastAPI",
        "Uvicorn",
        "Excel VBA",
        "Pandas",
        "Streamlit",
        "Matplotlib",
      ],
      status: "Production",
      date: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "SaraMine Voice Recognition System",
      description:
        "Voice-controlled healthcare assistant with multilingual support (English, Urdu, Arabic). Converts speech to structured text using fine-tuned Wav2Vec2 on medical terms.",
      longDescription:
        "Advanced voice recognition system designed for healthcare environments. Features speech-to-structured text conversion using fine-tuned Wav2Vec2, multilingual support, integrated TTS for natural responses, and offline deployment for privacy preservation.",
      image:"./4.jpg",
      category: "Speech AI",
      tech: [
        "Wav2Vec2",
        "SpeechRecognition",
        "DeepSpeech",
        "HuggingFace",
        "TTS",
      ],
      status: "Production",
      date: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "PDF RAG System",
      description:
        "FastAPI + ChromaDB + HuggingFace + Tesseract OCR for intelligent document question-answering with semantic search capabilities.",
      longDescription:
        "Enterprise-grade document processing system with Retrieval-Augmented Generation. Extracts text from PDFs using OCR, creates semantic embeddings, and provides intelligent Q&A functionality with context-aware responses.",
      image:"./9.png",
      category: "NLP & RAG",
      tech: [
        "FastAPI",
        "ChromaDB",
        "HuggingFace",
        "Tesseract",
        "LangChain",
        "Streamlit",
      ],
      status: "Production",
      date: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 8,
      title: "LLM Trainer on Kaggle",
      description:
        "PaLI-Gemma 3B fine-tuning using dual T4 GPUs with JSONL-based image-text pairs for multimodal understanding.",
      longDescription:
        "Large-scale multimodal model training project focusing on vision-language understanding. Fine-tuned PaLI-Gemma 3B model using efficient distributed training techniques on Kaggle infrastructure.",
      image:"./2.jpg",
      category: "LLM Training",
      tech: [
        "PaLI-Gemma",
        "T4 GPU",
        "Fine-tuning",
        "Multimodal",
        "PyTorch",
        "Kaggle",
      ],
      status: "Completed",
      date: "2023",
      github: "#",
      demo: "#",
    },
  ];

  const categories = [
    "All",
    "Computer Vision",
    "Data Engineering",
    "API Integration",
    "Speech AI",
    "NLP & RAG",
    "Remote Sensing",
    "LLM Training",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const statusColors = {
    Production: "bg-green-100 text-green-800",
    Completed: "bg-blue-100 text-blue-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive showcase of AI solutions spanning Healthcare, Data
              Engineering, Voice Recognition, and advanced Computer Vision
              implementations across various domains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 lg:h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${statusColors[project.status]} text-xs font-medium px-2 py-0.5 rounded-full`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {project.date}
                    </span>
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-3 leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-1.5 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer text-sm lg:text-base">
                      <i className="ri-eye-line mr-1.5"></i>
                      View Details
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-1.5 px-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm lg:text-base">
                      <i className="ri-github-line"></i>
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-1.5 px-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm lg:text-base">
                      <i className="ri-external-link-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-folder-open-line text-5xl text-gray-300 mb-2"></i>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">
                No projects found
              </h3>
              <p className="text-gray-500 text-sm">
                Try selecting a different category filter
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 lg:p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-base lg:text-lg opacity-90 mb-4 lg:mb-6">
              Let&apos;s collaborate to build intelligent AI solutions that
              solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-sm lg:text-base">
                <i className="ri-mail-line mr-2"></i>
                Get In Touch
              </Link>
              <button className="border-2 border-white text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap text-sm lg:text-base">
                <i className="ri-download-line mr-2"></i>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
