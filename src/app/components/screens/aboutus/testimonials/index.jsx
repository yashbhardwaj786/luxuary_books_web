import React from "react";
import { TestiMonialsWrapper, TestimonialItem } from './style';
import Slider from "../../../home/Slider/index";

export default function TestimonialsPage({ testimonials = {} }) {

    const { title = '', reviews = [] } = testimonials || {}
    return (
        <TestiMonialsWrapper>
            <div className="blur-background"></div>
            <label className="title-text ">{title}</label>

            <Slider slidesToShow={1} slidesToScroll={1} hideBlur={true}>
                {reviews.map((review, index) => {
                    if (!reviews) return null
                    const { name = '', occupation = '', reviewerImage = '', description = '', rating = '' } = reviews

                    return (
                        <TestimonialItem key={index}>

                        </TestimonialItem>
                    )

                })}
            </Slider>
        </TestiMonialsWrapper>
    )
}