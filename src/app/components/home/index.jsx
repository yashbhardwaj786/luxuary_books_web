
import React from "react";
import BannerContent from './bannerarea/index'
import AboutBook from './AboutBook/index'
import {HomeData} from './home.data'

export default function HomeLandingPage() {
    const {bannerData=[]} = HomeData.result

    return (

        <div>
        <BannerContent bannerData={bannerData}/>
        <AboutBook/>
        </div>
    )
}