
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-highlight');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block px-3 py-1 mb-6 text-sm font-medium text-portfolio-primary bg-portfolio-primary/10 rounded-full animate-fade-in">
            Desenvolvedor & Empreendedor
          </p>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Olá, sou <span className="gradient-text">Johnny Vaz</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up [animation-delay:200ms]">
            Especialista em desenvolvimento de sistemas ERP com foco em áreas
            financeira, fiscal, administrativa e logística. Criador do Método PPA
            para auxiliar pessoas em transição de carreira para a área de tecnologia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms]">
            <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white">
              <Link to="/contact">Entre em contato</Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToProjects}
              className="group"
            >
              Ver projetos
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-4 opacity-80 animate-fade-in [animation-delay:600ms]">
            <img src="https://skillicons.dev/icons?i=java" alt="Java" className="h-12" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="h-12" />
            <img src="https://skillicons.dev/icons?i=react" alt="React" className="h-12" />
            <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="h-12" />
            <img src="https://skillicons.dev/icons?i=python" alt="Python" className="h-12" />
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
