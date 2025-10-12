/* eslint-disable react/no-unescaped-entities */
'use client';

import IntroSection from '@/components/IntroSection';
import MapSection from '@/components/MapSection';
import SetlistSection from '@/components/SetlistSection';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setMounted(true);
    sessionStorage.setItem('isBooked', 'false');
  }, []);

  return (
    mounted && (
      <main className='main-container gap-2 flex flex-col items-center justify-center pb-24 overflow-x-hidden'>
        <Fade direction='up' triggerOnce className='w-full'>
          <IntroSection />
          <SetlistSection />
          <MapSection isMobile={isMobile} />
        </Fade>
      </main>
    )
  );
}
