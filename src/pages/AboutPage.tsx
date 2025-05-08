
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutMe from '@/components/about/AboutMe';
import Skills from '@/components/about/Skills';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 dark:bg-gray-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
            <p className="text-xl text-muted-foreground">
              Conheça mais sobre minha trajetória, formação e experiências
            </p>
          </div>
        </div>
        
        <AboutMe />
        
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-6">Formação Acadêmica</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-muted-foreground mb-4">Universidade XYZ, 2014-2016</p>
              <p>
                Formação completa em desenvolvimento de software, com foco em linguagens de programação, 
                banco de dados e métodos ágeis de desenvolvimento.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bacharelado em Administração de Empresas</h3>
              <p className="text-muted-foreground mb-4">Universidade ABC, 2010-2014</p>
              <p>
                Formação em gestão empresarial com ênfase em empreendedorismo e inovação, 
                proporcionando uma visão ampla de negócios que complementa minha atuação em tecnologia.
              </p>
            </div>
          </div>
        </div>
        
        <Skills />
        
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-6">Método PPA</h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">O que é o Método PPA?</h3>
            <p className="mb-4">
              O Método PPA (Planejamento, Prática e Acompanhamento) é uma metodologia que desenvolvi
              para auxiliar pessoas em transição de carreira para a área de tecnologia. Baseado em mais
              de uma década de experiência no setor, o método oferece um caminho estruturado para 
              adquirir as habilidades técnicas e comportamentais necessárias para ingressar e progredir
              no mercado de tecnologia.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Como funciona?</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Planejamento:</strong> Etapa inicial de definição de objetivos, mapeamento de habilidades
                necessárias e criação de um roteiro personalizado de aprendizado.
              </li>
              <li>
                <strong>Prática:</strong> Foco em projetos práticos e exercícios que simulam situações reais
                do mercado, permitindo aplicação imediata dos conhecimentos adquiridos.
              </li>
              <li>
                <strong>Acompanhamento:</strong> Mentoria contínua e ajustes no plano conforme o progresso,
                garantindo adaptação às necessidades e superação de obstáculos.
              </li>
            </ul>
            
            <p>
              Através da combinação dessas três etapas, o Método PPA tem ajudado centenas de profissionais
              a fazer uma transição bem-sucedida para a área de tecnologia, com resultados tangíveis e
              duradouros.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
