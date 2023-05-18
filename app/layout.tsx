"use client";

import { Noto_Sans } from 'next/font/google';
import Footer from './Footer'
import NavMenu from './NavMenu'
import './globals.css'
import Rain, { RainTypeString } from './components/Rain';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Visual Novel Thing',
  description: 'By Shokkunn',
}

const Noto = Noto_Sans({   
  weight: '400',
  subsets: ['latin'],
 });

interface RainEvent extends Event {
  detail: RainTypeString;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [rain, setRain] = useState<RainTypeString>("none");

  useEffect(() => {
    const handleRainEvent = (event: RainEvent) => {
      setRain(event.detail);
    };

    window.addEventListener("rainEvent", handleRainEvent as EventListener);


    return () => {
      window.removeEventListener("rainEvent", handleRainEvent as EventListener);
    };
  }, []); 

  return (
    <html lang="en">
      <body className={Noto.className}>
        <NavMenu/>
        {children}
        <Footer/>
        {rain !== "none" && <Rain type={rain}/>}
      </body>
    </html>
  );
}