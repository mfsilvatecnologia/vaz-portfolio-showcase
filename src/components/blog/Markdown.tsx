
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        a: ({ node, ...props }: any) => (
          <a
            {...props}
            className="text-portfolio-primary hover:text-portfolio-primary/80 underline"
            target="_blank"
            rel="noopener noreferrer"
          />
        ),
        h2: ({ node, ...props }: any) => (
          <h2 {...props} className="text-2xl font-bold mt-8 mb-4" />
        ),
        h3: ({ node, ...props }: any) => (
          <h3 {...props} className="text-xl font-bold mt-6 mb-3" />
        ),
        p: ({ node, ...props }: any) => (
          <p {...props} className="mb-4 leading-relaxed" />
        ),
        ul: ({ node, ...props }: any) => (
          <ul {...props} className="list-disc pl-5 mb-4" />
        ),
        ol: ({ node, ...props }: any) => (
          <ol {...props} className="list-decimal pl-5 mb-4" />
        ),
        li: ({ node, ...props }: any) => (
          <li {...props} className="mb-1" />
        ),
        blockquote: ({ node, ...props }: any) => (
          <blockquote
            {...props}
            className="border-l-4 border-portfolio-primary pl-4 italic my-4"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
