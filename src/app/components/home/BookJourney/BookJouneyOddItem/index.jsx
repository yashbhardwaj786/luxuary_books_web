import React, { useCallback } from "react";
import { BookJourneyOddItemWrapper } from './style'
import noop from 'lodash/noop'


export default function BookJourneyOddItem({
    journey = {},
    learnMoreClick = noop
}) {

    const { bookImageUrl = '', title = '', description = '', cta = {} } = journey || {}
    const { text = '', link = '' } = cta || {}
    const handleClick = useCallback((link) => {
        learnMoreClick(link)
    }, []);
    console.log('hh yashal odd')
    return (
        <BookJourneyOddItemWrapper>

            <div className="book-details-container">
                <label className="book-journey-title">{title}</label>
                <label className="book-journey-subtitle">{description}</label>
                <div className="book-journey-button-container"
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        handleClick(link)
                    }}>
                    <label className="book-journey-button-text">{text}</label>
                </div>
            </div>

            <img className="book-item-image" src={bookImageUrl} />

        </BookJourneyOddItemWrapper>
    )
}