import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav';
import Bfoot from '@/components/foot';
import Hero from '@/components/hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mt. Lovely Baptist Church',
  description: 'Church website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow '>{children}</main>

        <Bfoot />
      </body>
    </html>
  );
}
