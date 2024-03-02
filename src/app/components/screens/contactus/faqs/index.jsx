import React from "react";
import { FAQsWrapper } from './style'
import FaqItem from './faqitem/index'

export default function FAQs({faqs = []}) {
    return (
        <FAQsWrapper>
            <label className="title-text">FAQS</label>
            <div className="faq-list-conainer">
                {faqs.map((faq, index) => {
                    if (!faq) return null
                    return (
                        <FaqItem key={index} faq={faq}>
                        </FaqItem>
                    )
                })}
            </div>

        </FAQsWrapper>
    )
}
