import About from "@/components/global/about";
import Contributions from "@/components/global/contributions";
import Experience from "@/components/global/experience";
import Projects from "@/components/global/projects";
import ThankYou from "@/components/global/thanks";
import HeroSection from "@/components/hero-section";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <BlurFade>
        <HeroSection />
      </BlurFade>
      <About />
      <Projects />
      <Experience />
      <Contributions/>
      <ThankYou/>
    </div>
  );
}
