'use client'
import '../app/luxarybook.theme.css'
import React, { useCallback, useMemo } from "react";
import HomeLandingPage from './components/home/index'
import { HomePageContainer } from './home.page'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const learnMoreClick = useCallback((url: string) => {
    router.push(url)
  }, [])
  const reorderPageActions = useMemo(() => {
    return {
      learnMoreClick,
      
    }
  }, [
    learnMoreClick
  ])
  return (
    <>
      <HomePageContainer >
        <HomeLandingPage actions={reorderPageActions}/>
      </HomePageContainer>
    </>
  );
}