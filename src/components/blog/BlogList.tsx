
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Extract unique categories
  const allCategories = ['all', ...new Set(blogPosts.flatMap(post => post.categories))];
  
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.categories.includes(activeCategory));
    
  return (
    <section className="section container">
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {allCategories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "bg-portfolio-primary hover:bg-portfolio-primary/90" : ""}
          >
            {category === 'all' ? 'Todos' : category}
          </Button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <Card key={post.slug} className="overflow-hidden border card-hover gradient-border">
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </Link>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
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
              
              <Link to={`/blog/${post.slug}`} className="block">
                <h3 className="text-xl md:text-2xl font-bold mb-2 hover:text-portfolio-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span className="flex items-center mr-4">
                  <Calendar size={14} className="mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" /> {post.readingTime} min de leitura
                </span>
              </div>
              
              <Button variant="ghost" size="sm" className="text-portfolio-primary" asChild>
                <Link to={`/blog/${post.slug}`} className="flex items-center group">
                  Ler mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum artigo encontrado nesta categoria.</p>
        </div>
      )}
    </section>
  );
};

export default BlogList;
