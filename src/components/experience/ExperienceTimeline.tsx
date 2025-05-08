
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Desenvolvedor Sênior",
    company: "TechCorp Solutions",
    period: "2020 - Presente",
    description: "Lidero o desenvolvimento de sistemas ERP para grandes empresas, com foco em soluções para áreas financeira, fiscal e logística. Implemento arquiteturas escaláveis e mantenho a qualidade do código com práticas modernas de desenvolvimento.",
    skills: ["Java", "React", "Node.js", "MongoDB", "Docker"]
  },
  {
    title: "Analista de Sistemas",
    company: "Innovate Software",
    period: "2016 - 2020",
    description: "Atuei no desenvolvimento e manutenção de sistemas ERP, participando do ciclo completo de desenvolvimento, desde o levantamento de requisitos até a implantação e suporte.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript"]
  },
  {
    title: "Mentor e Fundador",
    company: "Método PPA",
    period: "2018 - Presente",
    description: "Criei e desenvolvi o Método PPA, auxiliando profissionais em transição de carreira para a área de tecnologia através de mentoria e treinamentos especializados.",
    skills: ["Mentoria", "Educação", "Desenvolvimento de Carreira"]
  },
  {
    title: "Desenvolvedor Web",
    company: "Digital Solutions",
    period: "2014 - 2016",
    description: "Desenvolvi e mantive aplicações web para clientes de diversos segmentos, implementando funcionalidades e garantindo a usabilidade e performance dos sistemas.",
    skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
  },
  {
    title: "Suporte Técnico",
    company: "TechSupport Inc",
    period: "2012 - 2014",
    description: "Forneci suporte técnico a usuários de sistemas ERP, solucionando problemas e implementando melhorias nos sistemas existentes.",
    skills: ["Suporte ao Cliente", "Troubleshooting", "Documentação Técnica"]
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="section container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
        <p className="text-muted-foreground">
          Minha trajetória profissional em desenvolvimento de sistemas e liderança técnica
        </p>
      </div>
      
      <div className="relative pl-8 ml-4 border-l border-portfolio-primary/30">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className={`relative mb-12 ${index % 2 === 0 ? 'animate-fade-in' : 'animate-slide-up'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute -left-12 p-2 bg-white dark:bg-gray-900 rounded-full border border-portfolio-primary shadow-md">
              <Briefcase size={20} className="text-portfolio-primary" />
            </div>
            
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-bold text-xl">{experience.title}</h3>
                <span className="text-sm text-portfolio-primary font-medium bg-portfolio-primary/10 px-3 py-1 rounded-full">
                  {experience.period}
                </span>
              </div>
              
              <p className="text-muted-foreground font-medium mb-4">{experience.company}</p>
              <p className="mb-4">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-slate-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
