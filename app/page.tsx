import About from "@/components/global/about";
import Projects from "@/components/global/projects";
import HeroSection from "@/components/hero-section";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BlurFade>
        <HeroSection />
      </BlurFade>
      <About />
      <Projects />
    </div>
  );
}
