import React from "react"
import { BookJouneyWrapper } from './style';
import BookJourneyOddItem from './BookJouneyOddItem/index'
import BookJourneyEvenItem from './BookJouneyEvenItem/index'
import BookJourneyEvenComponent from './BookJouneyEvenItemMobile/index'
import BookJourneyOddComponent from './BookJouneyOddItemMobile/index'
import { commonMethod } from '../../../utils/Utility'

export default function BookJourney({ bookJourney = [] }) {

    const isMobile = commonMethod();

    return (
        <BookJouneyWrapper isMobile={isMobile}>
            {isMobile ? (
                <div className="bgContainer">
                    {bookJourney.map((journey, index) => {
                        if (!journey) return null
                        const isEven = index % 2 == 0
                        return (
                            <>
                                {isEven ? (
                                    <BookJourneyEvenComponent journey={journey} />
                                )
                                :
                                (
                                    <BookJourneyOddComponent journey={journey} />
                                )}
                            </>
                        )
                    })}
                </div>
            ) : (
                <div className="bgContainer">
                    {bookJourney.map((journey, index) => {
                        if (!journey) return null
                        const isEven = index % 2 == 0
                        return (
                            <>
                                {isEven ? (
                                    <BookJourneyEvenItem journey={journey} />
                                )
                                :
                                (
                                    <BookJourneyOddItem journey={journey} />
                                )}
                            </>
                        )
                    })}

                </div>
            )}




        </BookJouneyWrapper>
    )
}