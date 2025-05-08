
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const technicalSkills = [
  { name: "Java", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "React", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Shell Script", level: 70 },
  { name: "Python", level: 65 },
  { name: "Linux", level: 85 },
  { name: "Asterisk", level: 70 },
];

const softSkills = [
  "Liderança de Equipes",
  "Gestão de Projetos",
  "Comunicação",
  "Metodologias Ágeis",
  "Resolução de Problemas",
  "Mentoria",
  "Negociação",
  "Análise de Requisitos"
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section bg-slate-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <p className="text-muted-foreground">
            Combinação de competências técnicas e interpessoais adquiridas ao longo
            de mais de uma década de experiência no setor de tecnologia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Habilidades Técnicas</CardTitle>
              <CardDescription>
                Tecnologias e linguagens de programação que utilizo no desenvolvimento de soluções
              </CardDescription>
            </CardHeader>
            <CardContent>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Habilidades Interpessoais</CardTitle>
              <CardDescription>
                Competências que me permitem trabalhar eficientemente em equipe e liderar projetos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-slate-100 dark:bg-gray-800 p-3 rounded-md flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-3"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
