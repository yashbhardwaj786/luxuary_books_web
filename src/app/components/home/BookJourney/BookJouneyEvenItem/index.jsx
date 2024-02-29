import React from "react";
import { BookJourneyEvenItemWrapper } from './style'

export default function BookJourneyEvenItem({journey = {}}) {
    const { bookImageUrl = '', title = '', description = '', cta = {} } = journey || {}
    const {text = '', link = ''} = cta || {}
    return (
        <BookJourneyEvenItemWrapper>
            <img className="book-item-image" src="/images/bookimg_odd.png" />

            <div className="book-details-container">
                <label className="book-journey-title">{title}</label>
                <label className="book-journey-subtitle">{description}</label>
                <div className="book-journey-button-container">
                    <label className="book-journey-button-text">{text}</label>
                </div>
            </div>

        </BookJourneyEvenItemWrapper>
    )
}