import React from "react";
import { AboutUsWrapper } from './style';
import AuthorImage from './AboutAuthor/index';
import { AboutUsData } from '../../../aboutus/aboutus.data';

export default function AboutUsLandingPage(){
      const {
        title='', 
        imageUrl = '', 
        description = '',
    } = AboutUsData.result
    return(
        <AboutUsWrapper>
            <AuthorImage imageUrl={imageUrl} title={title} description={description}/>

        </AboutUsWrapper>
    )
}