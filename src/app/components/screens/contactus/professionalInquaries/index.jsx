import React from "react";
import { ProfessionalInquiriesWrapper } from './style'

export default function ProfessionalInquiries({ professionalInquiries = {} }) {
    const {
        title = '',
        address = '',
        email = '',
        phone = '' 
    } = professionalInquiries

    return (
        <ProfessionalInquiriesWrapper>
            <label className="title-text"> {title} </label>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Visit Us :</label>
                <label className="details-inquiries-value">{address}</label>
            </div>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Drop us :</label>
                <label className="details-inquiries-value">{email}</label>
            </div>
            <div className="details-inquiries">
                <label className="details-inquiries-text">Call us :</label>
                <label className="details-inquiries-value">{phone}</label>
            </div>
        </ProfessionalInquiriesWrapper>
    )
}