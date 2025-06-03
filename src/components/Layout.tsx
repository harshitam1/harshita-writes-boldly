
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-orange-50">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
