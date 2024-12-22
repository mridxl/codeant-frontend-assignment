import React from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col justify-center md:flex-row md:overflow-y-clip">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
