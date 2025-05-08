
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutMe = () => {
  return (
    <section className="section container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop" 
            alt="Johnny Vaz - Desenvolvedor e Empreendedor" 
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-portfolio-dark p-4 rounded-lg shadow-lg hidden md:block">
            <p className="text-portfolio-primary font-semibold">10+ anos</p>
            <p className="text-sm text-muted-foreground">de experiência</p>
          </div>
        </div>
        
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
          
          <p className="mb-4 text-lg">
            Sou um profissional graduado em <strong>Análise e Desenvolvimento de Sistemas</strong> e 
            <strong> Bacharel em Administração de Empresas</strong>, com mais de 10 anos de experiência
            em sistemas ERP, focando nas áreas financeira, fiscal, administrativa e logística.
          </p>
          
          <p className="mb-4">
            Tenho mais de 6 anos de experiência como <strong>Analista e Desenvolvedor de Sistemas</strong>,
            trabalhando com linguagens como Java, Node.js, React, PHP, Shell Script, Python e Asterisk. 
            Além disso, possuo ampla vivência em servidores Linux e Sistemas OpenSource.
          </p>
          
          <p className="mb-6">
            Sou mentor e criador do <strong className="text-portfolio-primary">Método PPA</strong>,
            dedicado a auxiliar indivíduos em transição de carreira para a área de tecnologia.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">Formação Acadêmica</h3>
              <ul className="text-sm text-muted-foreground">
                <li>Análise e Desenvolvimento de Sistemas</li>
                <li>Bacharelado em Administração</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">Especialidades</h3>
              <ul className="text-sm text-muted-foreground">
                <li>Desenvolvimento de Sistemas ERP</li>
                <li>Mentoria em Tecnologia</li>
                <li>Empreendedorismo</li>
              </ul>
            </div>
          </div>
          
          <Button asChild>
            <Link to="/experience" className="flex items-center group">
              Minha trajetória profissional <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
