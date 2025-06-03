
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-cream-50 bg-dots relative">
      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-8 h-8 bg-navy-200 rounded-full opacity-40 animate-float-1 hidden lg:block"></div>
      <div className="fixed top-40 right-20 w-6 h-6 bg-sage-300 rounded-organic opacity-30 animate-float-2 hidden lg:block"></div>
      <div className="fixed bottom-32 left-20 w-10 h-10 bg-navy-100 rounded-blob opacity-25 animate-float-3 hidden lg:block"></div>
      <div className="fixed bottom-20 right-32 w-4 h-4 bg-cream-400 rounded-full opacity-40 animate-bounce-gentle hidden lg:block"></div>
      
      <Navigation />
      <main className="relative z-10">{children}</main>
      
      {/* Bottom decorative wave */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-50/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Layout;
