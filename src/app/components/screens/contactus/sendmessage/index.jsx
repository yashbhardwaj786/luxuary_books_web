import React, { useState } from "react";
import { SendMessgerWrapper, StyledSVG } from './style';
import UserIcon from './UserIcon';
import EmailIcon from './EmailIcon';
import PhoneIcon from './PhoneIcon'
import MessageIcon from './MessageIcon'



export default function SendMessge() {
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [phoneText, setPhoneText] = useState('');
    const [messageText, setMessageText] = useState('');

    const Message = ({ width, height }) => {
        return (
            <StyledSVG
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                width="14"
                height="14">
                <MessageIcon />
            </StyledSVG>
        );
    };

    // Function to handle changes in the input field
    const handleChangeName = (event) => {
        setNameText(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmailText(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhoneText(event.target.value);
    };

    const handleChangeMessage = (event) => {
        setMessageText(event.target.value);
    };

    return (
        <SendMessgerWrapper>

            <div className="name-email-container">
                <div className="name-container">
                    <UserIcon />
                    <input
                        className="name-input-text"
                        type="text"
                        value={nameText}
                        placeholder="Name"
                        onChange={handleChangeName} />
                </div>

                <div className="email-container">
                    <EmailIcon />
                    <input
                        className="name-input-text"
                        type="text"
                        value={emailText}
                        placeholder="Email"
                        onChange={handleChangeEmail} />
                </div>

            </div>

            <div className="phone-container">
                <PhoneIcon />
                <input
                    className="name-input-text"
                    type="text"
                    value={phoneText}
                    placeholder="Phone"
                    onChange={handleChangePhone} />
            </div>

            <div className="message-container">
                <Message />
                <textarea
                    className="message-input-area"
                    type="text"
                    value={messageText}
                    placeholder="Message"
                    onChange={handleChangeMessage} />
            </div>

        </SendMessgerWrapper>
    )
}