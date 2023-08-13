"use client"

import { useUserStore } from "@/context/user";
import { checkAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "@/app/globals.css";
import styles from "@/app/globals.module.css";
import Header from "@/components/elements/header/header";
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from "@/lib/AntdRegistry";
 
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {        
    const { setAuth, auth } = useUserStore()
    const router = useRouter();
  
    const checkAuthHandler = async() => {
      try {
        const data = await checkAuth();
        setAuth(true)
      } catch (error) {
        router.replace('/auth')
        console.log(error);
      }
    }
  
    useEffect(()=>{
      checkAuthHandler()
    },[])
      
    return (
      <html lang="en" className={inter.className}>
        <body className={styles.body}>
        {auth &&
          <Header />
          }
          <main className={styles.wrapper}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

          </main>
          </body>
      </html>
    )
  }