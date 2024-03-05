import React from "react";
import { AuthorImageWrapper } from './style'
import ImageCircle from './ImageCircle'
import { commonMethod } from '../../../../utils/Utility'

export default function AuthorImage({ imageUrl = '', title = '', description = '' }) {

    const isMobile = commonMethod()
    return (
        <AuthorImageWrapper>
            <div className="image-outer-container ">
                <div className="bg-circle-container">
                    <div className="bg-author-image">
                        <img src="/images/author_img.png" />
                    </div>
                    <ImageCircle isMobile={isMobile} />
                </div>
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