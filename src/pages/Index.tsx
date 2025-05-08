
import Hero from '@/components/home/Hero';
import ProjectsHighlight from '@/components/home/ProjectsHighlight';
import AboutMe from '@/components/about/AboutMe';
import Skills from '@/components/about/Skills';
import ContactForm from '@/components/contact/ContactForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsHighlight />
        <AboutMe />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
