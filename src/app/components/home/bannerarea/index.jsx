import React, {useEffect, useState } from "react";
import Slider from "../Slider/index";
import { StyledHappyCustomerWrapper, ItemContainer } from './style'
import CustomCarousel from '../../CustomCarousel/index'
import {commonMethod} from '../../../utils/Utility'

export default function BannerContent({bannerData = []}) {

    const isMobile = commonMethod();

    return (

        <StyledHappyCustomerWrapper>
            {
                isMobile ? (
                <CustomCarousel scrollWidth={1} scrollDuration={100}>
                    {bannerData.map((banner, index) => {
                            if (!banner) return null
                            const { bookImage = '', title = '', description = '', cta = {} } = banner
                            const {text = '', link = ''} = cta
                            const bookimg = '/images/Layer1.png'
                            return (
                                <ItemContainer key={index}>
                                    <div className="book__img">
                                        <img src={bookimg} alt="happy-customer" />
                                    </div>
                                    <label className="book-title">{title}</label>
                                    <label className="book-subtitle">{description}</label>
                                    <div className="button-container">
                                        <label className="button-text">{text}</label>
                                    </div>
                                </ItemContainer>
                            )
                        })}
                </CustomCarousel>
                ) : 
                (
                <Slider slidesToShow={1} slidesToScroll={1} hideBlur={true}>
                    {bannerData.map((banner, index) => {
                            if (!banner) return null
                            const { bookImage = '', title = '', description = '', cta = {} } = banner
                            const {text = '', url = ''} = cta
                            const bookimg = '/images/Layer1.png'

                            return (
                                <ItemContainer key={index}>
                                    <div className="book__img">
                                        <img src={bookimg} alt="luxary-book" />
                                    </div>
                                    <label className="book-title">{title}</label>
                                    <label className="book-subtitle">{description}</label>
                                    <div className="button-container">
                                        <label className="button-text">{text}</label>
                                    </div>
                                </ItemContainer>
                            )
                        })}
                </Slider>
                )}
            
        </StyledHappyCustomerWrapper>
    )
}