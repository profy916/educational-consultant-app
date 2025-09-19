import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              EduConsult
            </div>
            <p className="text-accent-foreground/80 mb-6">
              Empowering educational success through expert guidance and personalized consulting services.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-accent-foreground/60">
              <span>© 2024 EduConsult. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-accent-foreground transition-smooth">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-accent-foreground transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
