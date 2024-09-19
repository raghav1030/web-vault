
import { AccountSidebar } from '@/components/core/wallet/account-sidebar';
import AccountSidebarDemo from '@/components/core/wallet/account-sidebar-demo';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-purple-950/10 '>

      <AccountSidebarDemo/>

      {children  }
      
      </div>
  )
}

export default layout