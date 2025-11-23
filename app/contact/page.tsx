// "use client";

// import { useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("idle");

//     try {
//       const subject = encodeURIComponent(formData.subject);
//       const body = encodeURIComponent(
//         `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
//       );
//       const mailtoLink = `mailto:abdulaziz.agie@gmail.com?subject=${subject}&body=${body}`;
      
//       window.location.href = mailtoLink;
//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", subject: "", message: "" });
      
//       setTimeout(() => {
//         setSubmitStatus("idle");
//       }, 5000);
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setSubmitStatus("error");
//       setTimeout(() => {
//         setSubmitStatus("idle");
//       }, 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactMethods = [
//     {
//       icon: "ri-mail-line",
//       title: "Email",
//       value: "abdulaziz.agie@gmail.com",
//       action: () => window.location.href = "mailto:abdulaziz.agie@gmail.com",
//       color: "blue",
//     },
//     {
//       icon: "ri-phone-line",
//       title: "Phone",
//       value: "+92 319 1566 730",
//       action: () => window.location.href = "tel:+923191566730",
//       color: "green",
//     },
//     {
//       icon: "ri-linkedin-line",
//       title: "LinkedIn",
//       value: "Connect on LinkedIn",
//       action: () => window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank"),
//       color: "purple",
//     },
//     {
//       icon: "ri-github-line",
//       title: "GitHub",
//       value: "View My Work",
//       action: () => window.open("https://github.com/abdulazizagie", "_blank"),
//       color: "orange",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Hero Section */}
//       <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center">
//             <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
//               <i className="ri-message-3-line mr-2"></i>
//               GET IN TOUCH
//             </div>
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Let's Build Something Amazing
//             </h1>
//             <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
//               Have a project in mind or want to discuss AI solutions? I'd love to hear from you. 
//               Let's explore how we can work together to bring your ideas to life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//             {contactMethods.map((method, index) => (
//               <div
//                 key={index}
//                 onClick={method.action}
//                 className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group border border-gray-200"
//               >
//                 <div className={`w-12 h-12 bg-${method.color}-100 text-${method.color}-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
//                   <i className={`${method.icon} text-2xl`}></i>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {method.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {method.value}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Info */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
//             <h2 className="text-2xl lg:text-3xl font-bold mb-3">
//               Open to Opportunities
//             </h2>
//             <p className="text-base lg:text-lg opacity-90 mb-4 max-w-2xl mx-auto">
//               I'm currently available for freelance projects, consulting opportunities, 
//               and full-time positions in AI engineering and machine learning.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
//                 onClick={() => window.location.href = "mailto:abdulaziz.agie@gmail.com"}
//                 className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
//                 <i className="ri-mail-line mr-2"></i>
//                 Email Me Directly
//               </button>
//               <button
//                 onClick={() => window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank")}
//                 className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer">
//                 <i className="ri-linkedin-line mr-2"></i>
//                 Connect on LinkedIn
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:abdulaziz.agie@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "ri-mail-line",
      title: "Email",
      value: "abdulaziz.agie@gmail.com",
      action: () => window.location.href = "mailto:abdulaziz.agie@gmail.com",
      color: "blue",
    },
    {
      icon: "ri-phone-line",
      title: "Phone",
      value: "+92 319 1566 730",
      action: () => window.location.href = "tel:+923191566730",
      color: "green",
    },
    {
      icon: "ri-linkedin-line",
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank"),
      color: "purple",
    },
    {
      icon: "ri-github-line",
      title: "GitHub",
      value: "View My Work",
      action: () => window.open("https://github.com/abdulazizagie", "_blank"),
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
              <i className="ri-message-3-line mr-2"></i>
              GET IN TOUCH
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Build Something Amazing
            </h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss AI solutions? I&apos;d love to hear from you. 
              Let&apos;s explore how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                onClick={method.action}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group border border-gray-200"
              >
                <div className={`w-12 h-12 bg-${method.color}-100 text-${method.color}-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <i className={`${method.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {method.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Open to Opportunities
            </h2>
            <p className="text-base lg:text-lg opacity-90 mb-4 max-w-2xl mx-auto">
              I&apos;m currently available for freelance projects, consulting opportunities, 
              and full-time positions in AI engineering and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = "mailto:abdulaziz.agie@gmail.com"}
                className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                <i className="ri-mail-line mr-2"></i>
                Email Me Directly
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/abdul-aziz-3494a434a/", "_blank")}
                className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-line mr-2"></i>
                Connect on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}