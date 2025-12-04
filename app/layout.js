import './globals.css';
import { Fredoka, Space_Grotesk } from 'next/font/google';

const headingFont = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  title: 'Alejandro De La Mora | AI Solutions Architect',
  description:
    'Resume site for Alejandro De La Mora focused on agentic workflows, GenAI platform engineering, and automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.className} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
