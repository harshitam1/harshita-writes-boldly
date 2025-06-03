
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-cream-50 bg-paper relative">
      <Navigation />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
