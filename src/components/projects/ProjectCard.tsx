
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  roles?: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card 
      id={`project-${project.id}`}
      className={`overflow-hidden border card-hover gradient-border ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`aspect-video ${project.featured ? 'md:h-80' : ''} overflow-hidden`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
          
          {project.featured && (
            <Badge className="bg-portfolio-accent text-white hover:bg-portfolio-accent/90">
              Destaque
            </Badge>
          )}
        </div>
        
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
          {project.longDescription || project.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex gap-4">
        {project.liveUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
            <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe size={16} /> Ver site
            </Link>
          </Button>
        )}
        
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
            <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Código
            </Link>
          </Button>
        )}
        
        <Button variant="ghost" size="sm" className="ml-auto text-portfolio-primary" asChild>
          <Link to="#" className="flex items-center gap-1 group">
            Detalhes
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
