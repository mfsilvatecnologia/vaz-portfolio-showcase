
import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';

const projects: Project[] = [
  {
    id: 1,
    title: "ValeCar Clube de Benefícios",
    description: "Plataforma de proteção veicular com contratação 100% online e assistência 24 horas.",
    longDescription: "Plataforma completa de proteção veicular que oferece contratação 100% online e assistência 24 horas. O sistema integra funcionalidades como gestão de associados, processamento de sinistros, e interface para usuários finais com acesso via aplicativo móvel.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2574&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "React Native"],
    liveUrl: "https://valecar.com",
    featured: true
  },
  {
    id: 2,
    title: "Desktop Cloud",
    description: "Solução de desktops Windows na nuvem com alta performance e segurança avançada.",
    longDescription: "Infraestrutura de desktops virtuais Windows na nuvem que oferece alta performance, segurança avançada e flexibilidade para empresas de todos os tamanhos. A solução inclui backup automático, monitoramento em tempo real e suporte técnico especializado.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
    tags: ["Cloud Computing", "Windows Server", "Virtualização", "Azure"],
    liveUrl: "https://desktopcloud.com"
  },
  {
    id: 3,
    title: "Contrato Automático",
    description: "Plataforma que utiliza IA para automatizar a geração de contratos.",
    longDescription: "Sistema de geração automática de contratos baseado em inteligência artificial que analisa requisitos específicos e produz documentos legais personalizados. A plataforma inclui validação jurídica e integração com sistemas de assinatura digital.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2226&auto=format&fit=crop",
    tags: ["IA", "React", "Node.js", "API", "GPT"],
    liveUrl: "https://contratoautomatico.com",
    githubUrl: "https://github.com/johnnyvaz/contratoautomatico",
    featured: true
  },
  {
    id: 4,
    title: "Cod2D Software",
    description: "Solução integrada de ERP, CRM e E-commerce para distribuidoras de peças de smartphone.",
    longDescription: "Sistema completo que integra ERP, CRM e E-commerce voltado especificamente para distribuidoras de peças de reposição para smartphones. Inclui gestão de inventário, controle financeiro, automação de vendas e plataforma de comércio eletrônico B2B.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2670&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "JavaScript", "E-commerce", "ERP"],
    liveUrl: "https://cod2d.com"
  },
  {
    id: 5,
    title: "Sistema de Gestão Financeira",
    description: "Software para gestão completa de finanças empresariais com dashboards analíticos.",
    longDescription: "Ferramenta completa para gestão financeira empresarial que oferece controle de fluxo de caixa, contas a pagar e receber, conciliação bancária e dashboards analíticos para tomada de decisão. Inclui integração com principais bancos brasileiros.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React"]
  },
  {
    id: 6,
    title: "Plataforma de E-learning",
    description: "Sistema para criação e gestão de cursos online com recursos interativos.",
    longDescription: "Plataforma educacional completa para criação, distribuição e gestão de cursos online. Inclui funcionalidades como videoaulas, questionários interativos, fóruns de discussão, emissão de certificados e gestão de alunos.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
    tags: ["Node.js", "MongoDB", "React", "AWS"]
  }
];

const ProjectsList = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Extract unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section className="section container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
        <p className="text-muted-foreground">
          Conheça os principais projetos que desenvolvi em minha trajetória profissional
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={activeFilter === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(tag)}
            className={activeFilter === tag ? "bg-portfolio-primary hover:bg-portfolio-primary/90" : ""}
          >
            {tag === 'all' ? 'Todos' : tag}
          </Button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum projeto encontrado com este filtro.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsList;
