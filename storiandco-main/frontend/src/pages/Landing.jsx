import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Process from "@/components/landing/Process";
import Services from "@/components/landing/Services";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Landing() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} data-testid="landing-root" className="bg-obsidian text-stark">
      <Nav />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
