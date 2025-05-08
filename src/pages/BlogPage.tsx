
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogList from '@/components/blog/BlogList';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 dark:bg-gray-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Artigos, tutoriais e reflexões sobre tecnologia, desenvolvimento e empreendedorismo
            </p>
          </div>
        </div>
        
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
