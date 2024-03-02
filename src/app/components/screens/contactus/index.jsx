import React from "react";
import { ContactUsWrapper } from './style';
import AuthorImage from './AboutAuthor/index';
import ProfessionalInquiriesWrapper from './professionalInquaries/index';
import FAQs from './faqs/index';
import {ContactusData} from '../../../contactus/Contactus.Data'

export default function ContactUsLandingPage(){
      const {
        title='', 
        imageUrl = '', 
        description = '',
        faqs = [],
        professionalInquiries= {}
    } = ContactusData.result

    return(
        <ContactUsWrapper>

            <AuthorImage imageUrl={imageUrl} title={title} description={description}/>
            <FAQs faqs={faqs}/>
            <ProfessionalInquiriesWrapper professionalInquiries={professionalInquiries}/>

        </ContactUsWrapper>
    )
}