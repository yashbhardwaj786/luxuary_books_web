import React from "react"
import { BookJouneyWrapper } from './style';
import BookJourneyOddItem from './BookJouneyOddItem/index'
import BookJourneyEvenItem from './BookJouneyEvenItem/index'
import BookJourneyEvenComponent from './BookJouneyEvenItemMobile/index'
import BookJourneyOddComponent from './BookJouneyOddItemMobile/index'
import { commonMethod } from '../../../utils/Utility'
import noop from 'lodash/noop'

export default function BookJourney({
    bookJourney = [],
    learnMoreClick = noop
}) {

    const isMobile = commonMethod();

    return (
        <BookJouneyWrapper >
            {isMobile ? (
                <div className="bgContainer">
                    {bookJourney.map((journey, index) => {
                        if (!journey) return null
                        const isEven = index % 2 == 0
                        return (
                            <div key={index}>
                                {isEven ? (
                                    <BookJourneyEvenComponent journey={journey} learnMoreClick={learnMoreClick}/>
                                )
                                    :
                                    (
                                        <BookJourneyOddComponent journey={journey} learnMoreClick={learnMoreClick}/>
                                    )}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="bgContainer">
                    {bookJourney.map((journey, index) => {
                        if (!journey) return null
                        const isEven = index % 2 == 0
                        return (
                            <div key={index}>
                                {isEven ? (
                                    <BookJourneyEvenItem journey={journey} learnMoreClick={learnMoreClick}/>
                                )
                                    :
                                    (
                                        <BookJourneyOddItem journey={journey} learnMoreClick={learnMoreClick}/>
                                    )}
                            </div>
                        )
                    })}
                </div>
            )}
        </BookJouneyWrapper>
    )
}