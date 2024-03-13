import React from "react";
import { OtherInfoWrapper } from './style';

export default function OtherInfo({otherInfo = {}}){
      const {description = '', cta = {}} = otherInfo || {}
      const {text = '', link = ''} = cta || {}
    return(
        <OtherInfoWrapper>
            
            <label className="description">{description}</label>
            <div className="button-container">
                <label className="button-text">{text}</label>
            </div>
        </OtherInfoWrapper>
    )
}