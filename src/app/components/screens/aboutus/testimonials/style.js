import styled from 'styled-components'

export const TestiMonialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background-image:  url('/images/outline_bg_mobile.svg'); */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    background-color: rgba(179, 179, 179, 1);
    padding: 20px;
    justify-items: center;
    align-items: center; /* Center vertically */
    min-height: 200px;
    ::selection {
        background-color: rgba(179, 179, 179, 1);
    }

    .title-text {
        color: var(--brand-navbar-background-color);
        font-size: 8px;
        font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px;
        /* background-image:  url('/images/Outline_Bg.svg'); */
        min-height: 400px;
        
        .title-text {
            font-size: 25px;
        }
    }
`;

export const TestimonialItem = styled.div`
    display: flex;
    flex-direction: column;
    /* background-image:  url('/images/Rectangle.svg');
    background-size: cover;
    background-repeat: no-repeat; */
    min-height: 140px;
    margin: 10px 96px 0px 96px;
    border-radius: 10px;
    background-color: rgba(255, 251, 251, 1);

    @media (min-width: 768px) {
        min-height: 242px;
        min-width: 727px;
        /* background-image:  url('/images/Rectangle.svg'); */
        background-size: cover;
        background-repeat: no-repeat;
        margin: 28px 177px 0px 177px;
        border-radius: 20px;
    }
`;