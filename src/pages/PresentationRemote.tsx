import { io } from 'socket.io-client';
import { Button } from '@/components/ui/button';

const socket = io('http://localhost:3001');

const PresentationRemote = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
    <Button onClick={() => socket.emit('prevSlide')}>Anterior</Button>
    <Button onClick={() => socket.emit('nextSlide')}>Próximo</Button>
  </div>
);

export default PresentationRemote;
