
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsList from '@/components/projects/ProjectsList';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 dark:bg-gray-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h1>
            <p className="text-xl text-muted-foreground">
              Conheça os principais projetos que desenvolvi ao longo da minha carreira
            </p>
          </div>
        </div>
        
        <ProjectsList />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
