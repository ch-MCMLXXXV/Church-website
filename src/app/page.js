import Image from 'next/image';
import Navbar from '@/components/nav';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <div>
        <h1>Welcome to Mt. Lovely Baptist Church!</h1>
      </div>
    </main>
  );
}
