'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import HomeLandingPage from './components/home/index'
import  HomePageSkelton  from './skeltonhomepage';
import { HomePageContainer } from './home.page'
import { useRouter } from 'next/navigation';
import Footer from './components/footer/Footer';

export default function Home() {
  const router = useRouter();
  const learnMoreClick = useCallback((url: string) => {
    router.push(url)
  }, [])

  const exploreBookClick = useCallback((url: string) => {
    router.push(url)
  }, [])
  
  const homePageActions = useMemo(() => {
    return {
      learnMoreClick,
      exploreBookClick
      
    }
  }, [
    learnMoreClick,
    exploreBookClick
  ])
  const [isLoading, setIsLoading] = useState(true)
  const timeOutRef = useRef<NodeJS.Timer | null>(null)
  useEffect( () => {
    timeOutRef.current = setTimeout(() => {
        setIsLoading(false)
    },500)

  }, []);

if(isLoading){
  return <HomePageSkelton>
  </HomePageSkelton>
}

  return (
    <>
    
      <HomePageContainer >
        <HomeLandingPage actions={homePageActions}/>
      </HomePageContainer>
      <Footer/>
    </>
  );
}