
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const highlightedProjects = [
  {
    id: 1,
    title: "ValeCar Clube de Benefícios",
    description: "Plataforma de proteção veicular com contratação 100% online e assistência 24 horas.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2574&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    roles: ["Sócio", "Desenvolvedor"]
  },
  {
    id: 3,
    title: "Contrato Automático",
    description: "Plataforma que utiliza IA para automatizar a geração de contratos.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2226&auto=format&fit=crop",
    tags: ["IA", "React", "Node.js", "API"],
    roles: ["Sócio", "Desenvolvedor"]
  },
  {
    id: 5,
    title: "Estude Online",
    description: "Plataforma de cursos e e-books que oferece infoprodutos de qualidade para desenvolvimento pessoal e profissional.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2960&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "LMS"],
    roles: ["Sócio", "Desenvolvedor", "Analista"]
  }
];

const ProjectsHighlight = () => {
  return (
    <section id="projects-highlight" className="section bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-muted-foreground">
            Alguns dos principais projetos que desenvolvi, combinando tecnologia, inovação e soluções de negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-border card-hover gradient-border">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.roles && project.roles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.roles.map((role, i) => (
                      <Badge key={i} variant="outline" className="border-portfolio-accent text-portfolio-accent">
                        {role}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link to={`/projects/#project-${project.id}`} className="text-portfolio-primary">
                    Ver projeto <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/projects" className="flex items-center group">
              Ver todos os projetos <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
