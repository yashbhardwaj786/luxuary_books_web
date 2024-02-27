import React from "react";
import { AboutBookContainer } from './style'
import LeftBook from './LeftBook'
import RightBook from './RightBook'

export default function AboutBook() {
    return (
        <AboutBookContainer>

            <div className="book-img">
                <LeftBook />
            </div>
            <div className="text-container">
                <img className="image"
                    src='/images/logo1.png'
                    alt="Logo" />
                <div className="button-container-aboutbook">
                    <label className="button-text-aboutbook">Learn More</label>
                </div>
            </div>
            <div className="book-img">
                <RightBook />
            </div>
        </AboutBookContainer>
    )
}