import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { slides } from '@/data/slides';

const socket = io('http://localhost:3001');

const PresentationPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    socket.on('slideUpdate', setIndex);
    return () => {
      socket.off('slideUpdate', setIndex);
    };
  }, []);

  const slide = slides[index] || { title: 'Fim', content: '' };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">{slide.title}</h1>
      <p className="text-xl">{slide.content}</p>
    </div>
  );
};

export default PresentationPage;
