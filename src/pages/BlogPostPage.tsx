
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogPost from '@/components/blog/BlogPost';

const BlogPostPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BlogPost />
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
