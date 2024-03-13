import React from "react";
import { BookJourneyOddItemWrapper } from './style'

export default function BookJourneyOddItem({journey = {}}) {

    const { bookImageUrl = '', title = '', description = '', cta = {} } = journey || {}
    const {text = '', link = ''} = cta || {}

    return (
        <BookJourneyOddItemWrapper>


            <div className="book-details-container">
                <label className="book-journey-title">{title}</label>
                <label className="book-journey-subtitle">{description}</label>
                <div className="book-journey-button-container">
                    <label className="book-journey-button-text">{text}</label>
                </div>
            </div>


            <img className="book-item-image" src={bookImageUrl} />

        </BookJourneyOddItemWrapper>
    )
}