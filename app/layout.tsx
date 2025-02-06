import { Inter } from 'next/font/google';
import { DashboardNav } from '@/components/dashboard-nav';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import type React from 'react';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SolarAdmin Dashboard',
  description: 'Advanced solar panel management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen>
          <div className="min-h-screen flex flex-col bg-sunset-gradient">
            <div className="border-b border-border/40">
              <div className="flex h-16 items-center px-4">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <UserNav />
                </div>
              </div>
            </div>
            <div className="flex-1 flex">
              <DashboardNav />
              <main className="flex-1 p-8">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

import './globals.css';
