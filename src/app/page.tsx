'use client'
import '../app/luxarybook.theme.css'
import HomeLandingPage from './components/home/index'
import {HomePageContainer} from './home.page'

export default function Home() {
  return (
    <>
      <HomePageContainer >
        <HomeLandingPage/>
      </HomePageContainer>
    </>
  );
}