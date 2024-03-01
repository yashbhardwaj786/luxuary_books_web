import React from "react";
import { AuthorImageWrapper } from './style'
import ImageCircle from './ImageCircle'
import {commonMethod} from '../../../../utils/Utility'

export default function AuthorImage() {
    const isMobile = commonMethod()
    return (
        <AuthorImageWrapper>
            <div className="image-outer-container ">
                <div className="bg-circle-container">
                    <div className="bg-author-image">
                        <img src="/images/author_img.png"/>
                    </div>
                    <ImageCircle isMobile={isMobile}/>
                </div>
            </div>
            <label className="title-text">Get in Touch</label>
            <label className="description-text">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers. You can connect with us with these details.</label>
        </AuthorImageWrapper>
    )
}