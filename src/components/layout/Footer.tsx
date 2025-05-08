
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Johnny Vaz</h3>
            <p className="text-muted-foreground mb-4">
              Desenvolvedor e empreendedor com mais de 10 anos de experiência em sistemas ERP.
              Mentor e criador do Método PPA.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contato@example.com" 
                aria-label="Email"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                  Experiência
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
            <p className="text-muted-foreground mb-2">
              Tem alguma pergunta ou quer discutir um projeto?
            </p>
            <Link 
              to="/contact"
              className="text-portfolio-primary hover:text-portfolio-primary/80 font-medium transition-colors"
            >
              Entre em contato
            </Link>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Johnny Vaz. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="hover:text-portfolio-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-portfolio-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
