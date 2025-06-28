import About from "./_components/About";
import FeaturedProjects from "./_components/FeaturedProjects";

import Hero from "./_components/Hero";
import InstagramMarquee from "./_components/InstagramMarquee";

import NewArrivals from "./_components/NewArrivals";
import Projects from "./_components/Projects";
import CaseStudiesSection from "./_components/CaseStudiesSection";
import Team from "./_components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Team />
      <Projects />
      <CaseStudiesSection />
      <InstagramMarquee />
      <NewArrivals />
    </>
  );
}
