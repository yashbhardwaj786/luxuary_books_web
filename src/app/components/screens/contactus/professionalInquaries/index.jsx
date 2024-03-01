import React from "react";
import {ProfessionalInquiriesWrapper} from './style'

export default function ProfessionalInquiries(){

    return(
        <ProfessionalInquiriesWrapper>
            <label className="title-text"> For Professional Inquiries </label>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Visit Us :</label>
                <label className="details-inquiries-value">No: 09a, Downtown, San Diego, USA.</label>
            </div>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Drop us :</label>
                <label className="details-inquiries-value">support@pages.com</label>
            </div>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Call us :</label>
                <label className="details-inquiries-value">1-800-123-9999</label>
            </div>
        </ProfessionalInquiriesWrapper>
    )
}