import About from "@/components/global/about";
import Contributions from "@/components/global/contributions";
import Experience from "@/components/global/experience";
import Projects from "@/components/global/projects";
import ThankYou from "@/components/global/thanks";
import HeroSection from "@/components/hero-section";
import { BackgroundImageTexture } from "@/components/ui/bg-image-texture";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <BackgroundImageTexture variant="groovepaper" opacity={.1}>
      <div className="min-h-screen ">
        <BlurFade duration={.5}>
          <HeroSection />
        </BlurFade>
        <About />
        <Projects />
        <Experience />
        <Contributions />
        <ThankYou />
      </div>
    </BackgroundImageTexture>

  );
}
