import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProjectProvider from './projectProvider';
import LinksProvider from './linksProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BUmashankar Pandey',
  description: 'I am Umashankar, a Front-End developer, ready to embark on new challenges. With a solid foundation in Front-End technologies like JavaScript, React, and Redux I excel at creating efficient Web applications.Frontend: JavaScript, React, Redux, BootstrapTools & Methods: Git, GitHub, Chrome Dev Tools.Professional: Remote Pair-Programing, Teamwork, Mentoring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><ProjectProvider><LinksProvider>{children}</LinksProvider></ProjectProvider></body>
    </html>
  );
}
