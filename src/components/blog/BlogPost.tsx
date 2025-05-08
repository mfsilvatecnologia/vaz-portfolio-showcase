
import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import Markdown from '@/components/blog/Markdown';
import NotFound from '@/pages/NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo(() => {
    return blogPosts.find(p => p.slug === slug);
  }, [slug]);
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <article className="container max-w-4xl py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/blog" className="flex items-center group mb-4">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o blog
          </Link>
        </Button>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category, i) => (
            <Badge 
              key={i} 
              variant="secondary" 
              className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20"
            >
              <Tag size={12} className="mr-1" /> {category}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center text-muted-foreground mb-8">
          <span className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" /> {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1" /> {post.readingTime} min de leitura
          </span>
        </div>
        
        {post.coverImage && (
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <Markdown content={post.content} />
      </div>
    </article>
  );
};

export default BlogPost;
