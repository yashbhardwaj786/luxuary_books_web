import React from "react";
import { AuthorImageWrapper } from './style'
import ImageCircle from './ImageCircle'
import { commonMethod } from '../../../../utils/Utility'

export default function AuthorImage({ imageUrl = '', title = '', description = '' }) {

    const isMobile = commonMethod()
    return (
        <AuthorImageWrapper>
            <div className="bg-circle-container">
                <img src="/images/author_img.png" className="bg-author-image" />
                <ImageCircle ismobile={isMobile} />
            </div>

            <label className="title-text">{title}</label>
            {description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    <label className="description-text">{line}</label>
                </React.Fragment>
            ))}

        </AuthorImageWrapper>
    )
}