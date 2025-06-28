import About from "./_components/About";
import FeaturedProjects from "./_components/FeaturedProjects";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import InstagramMarquee from "./_components/InstagramMarquee";
import Navbar from "./_components/Navbar";
import NewArrivals from "./_components/NewArrivals";
import Projects from "./_components/Projects";
import CaseStudiesSection from "./_components/CaseStudiesSection";
import Team from "./_components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Team />
      <Projects />
      <CaseStudiesSection />
      <InstagramMarquee />
      <NewArrivals />
      <Footer />
    </>
  );
}
