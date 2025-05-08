
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  subject: z.string().min(5, { message: 'O assunto deve ter pelo menos 5 caracteres.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      console.log('Form data:', data);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      form.reset();
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="section container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-muted-foreground">
          Tem um projeto em mente ou quer discutir uma possível colaboração?
          Entre em contato comigo e vamos conversar!
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-portfolio-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-portfolio-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <a href="mailto:contato@johnnnyvaz.com" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                contato@johnnnyvaz.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-portfolio-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-portfolio-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Telefone</h3>
              <a href="tel:+5500999999999" className="text-muted-foreground hover:text-portfolio-primary transition-colors">
                +55 (00) 99999-9999
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-portfolio-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-portfolio-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Localização</h3>
              <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu.email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Assunto da mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Digite sua mensagem aqui..." 
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-portfolio-primary hover:bg-portfolio-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
