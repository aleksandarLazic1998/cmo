import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'CMO OS Mentor', description: 'Interaktivni AI mentor CMO OS kurikuluma' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn">
      <body>
        <header className="topbar">
          <a href="/" className="brand">CMO OS · Mentor</a>
          <span className="persona">William James Moriarty</span>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
