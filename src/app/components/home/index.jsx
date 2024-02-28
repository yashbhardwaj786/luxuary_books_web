
import React from "react";
import BannerContent from './bannerarea/index'
import AboutBook from './AboutBook/index'
import {HomeData} from './home.data'
import noop from 'lodash/noop'
import {HomeScreenContainer} from './style'

export default function HomeLandingPage(props) {
    const {
        learnMoreClick = noop,
      } = props.actions || {}
      const {bannerData=[], aboutBook = {}} = HomeData.result
    return (

        <HomeScreenContainer>
        <BannerContent bannerData={bannerData}/>
        <AboutBook learnMoreClick={learnMoreClick} aboutBook={aboutBook}/>
        </HomeScreenContainer>
    )
}