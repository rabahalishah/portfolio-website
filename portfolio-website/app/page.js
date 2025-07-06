import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <GoogleAnalytics gaId={`${process.env.GID}`} />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
