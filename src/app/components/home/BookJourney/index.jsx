import React from "react"
import { BookJouneyWrapper } from './style';
import BookJourneyOddItem from './BookJouneyOddItem/index'
import BookJourneyEvenItem from './BookJouneyEvenItem/index'

export default function BookJourney({ bookJourney = [] }) {

    return (
        <BookJouneyWrapper>
            <div className="bgContainer">
                {bookJourney.map((journey, index) => {
                    if (!journey) return null
                    const isEven = index % 2 == 0
                    return (
                        <>
                            {isEven ? (
                                <BookJourneyEvenItem journey={journey}/>
                            )
                                :
                                (
                                    <BookJourneyOddItem journey={journey}/>
                                )}
                        </>
                    )
                })}

            </div>



        </BookJouneyWrapper>
    )
}