import React from "react";
import { ContactUsWrapper } from './style'
import AuthorImage from './AboutAuthor/index'
import ProfessionalInquiriesWrapper from './professionalInquaries/index'

export default function ContactUsLandingPage(){

    return(
        <ContactUsWrapper>

            <AuthorImage/>
            <ProfessionalInquiriesWrapper/>

        </ContactUsWrapper>
    )
}