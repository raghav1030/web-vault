
import { AccountSidebar } from '@/components/core/wallet/account-sidebar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full'>
      <AccountSidebar>
      {children  }
      </AccountSidebar>
      
      </div>
  )
}

export default layout