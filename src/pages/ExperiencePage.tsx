
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';

const ExperiencePage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 dark:bg-gray-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiência Profissional</h1>
            <p className="text-xl text-muted-foreground">
              Minha trajetória como desenvolvedor e empreendedor ao longo dos anos
            </p>
          </div>
        </div>
        
        <ExperienceTimeline />
        
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-6">Premiações e Reconhecimentos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                    <circle cx="12" cy="8" r="7"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">1º Lugar no Hackathon do Magalu</h3>
                  <p className="text-muted-foreground">2019</p>
                </div>
              </div>
              <p>
                Liderança de equipe que desenvolveu solução inovadora para otimização logística,
                resultando em economia significativa e melhor experiência do cliente.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                    <circle cx="12" cy="8" r="7"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Vencedor do StartupWeekend</h3>
                  <p className="text-muted-foreground">2017</p>
                </div>
              </div>
              <p>
                Desenvolvimento de solução tecnológica inovadora para o setor de educação,
                reconhecida pelo potencial de impacto social e viabilidade comercial.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Top Contribuidor Open Source</h3>
                  <p className="text-muted-foreground">2018-2020</p>
                </div>
              </div>
              <p>
                Reconhecimento por contribuições significativas para projetos de código aberto
                relacionados a sistemas ERP e soluções empresariais baseadas em Linux.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mentoria Destaque</h3>
                  <p className="text-muted-foreground">2021</p>
                </div>
              </div>
              <p>
                Reconhecimento por resultados excepcionais na mentoria de profissionais
                em transição de carreira, com alta taxa de sucesso na inserção no mercado.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;
