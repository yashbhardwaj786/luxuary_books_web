import React from "react";
import { AboutUsWrapper } from './style';
import AuthorImage from './AboutAuthor/index';
import UseFulLinkPage from './usefulllinks/index'
import OtherInfo from './OtherInfo/index';
import { AboutUsData } from '../../../aboutus/aboutus.data';
import { commonMethod } from '@/app/utils/Utility';

export default function AboutUsLandingPage(){
      const {
        title='', 
        imageUrl = '', 
        description = '',
        usefulLinks = [],
        otherInfo = {}
    } = AboutUsData.result
    const isMobile = commonMethod();
    return(
        <AboutUsWrapper>
            <AuthorImage imageUrl={imageUrl} title={title} description={description}/>
            <UseFulLinkPage isMobile={isMobile} usefulLinks={usefulLinks}/>
            <OtherInfo otherInfo={otherInfo}/>

        </AboutUsWrapper>
    )
}