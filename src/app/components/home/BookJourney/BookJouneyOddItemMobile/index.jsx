import React from 'react';
import {BookJourneyOddItemWrapper} from './style'

export default function BookJourneyOddComponent({journey = {}}) {
    const { bookImageUrl = '', title = '', description = '', cta = {} } = journey || {}
    const {text = '', link = ''} = cta || {}
    return(
        <BookJourneyOddItemWrapper>

            <img src="/images/book_img_mobile.png" className='book-item-image'/>
            <label className="book-journey-title">{title}</label>
            <label className="book-journey-subtitle">{description}</label>
            <div className="book-journey-button-container">
                    <label className="book-journey-button-text">{text}</label>
                </div>
        </BookJourneyOddItemWrapper>
    )
}