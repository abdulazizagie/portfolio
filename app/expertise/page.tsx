import ExpertiseOverview from "@/components/ExpertiseOverview";
import TechStack from "@/components/TechStack";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Expertise | Abdul Aziz - AI Engineer",
  description: "Full-stack AI engineering expertise spanning data infrastructure, model development, intelligent systems architecture, and scalable production deployment",
};

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
              <i className="ri-star-line mr-2"></i>
              TECHNICAL EXPERTISE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Full-Stack AI Engineering
            </h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the entire AI development lifecycle, from data engineering 
              and model training to production deployment and continuous optimization
            </p>
          </div>
        </div>
      </section>

      <ExpertiseOverview />
      <TechStack />

      <Footer />
    </div>
  );
}
