
import React from "react";
import BannerContent from './bannerarea/index'
import AboutBook from './AboutBook/index'
import BookJourney from './BookJourney/index'
import {HomeData} from './home.data'
import noop from 'lodash/noop'
import {HomeScreenContainer} from './style'

export default function HomeLandingPage(props) {
    const {
        learnMoreClick = noop,
      } = props.actions || {}
      const {
        bannerData=[], 
        aboutBook = {}, 
        bookJourney = []
    } = HomeData.result
    return (

        <HomeScreenContainer>
        <BannerContent bannerData={bannerData}/>
        <AboutBook learnMoreClick={learnMoreClick} aboutBook={aboutBook}/>
        <BookJourney bookJourney={bookJourney}/>
        </HomeScreenContainer>
    )
}