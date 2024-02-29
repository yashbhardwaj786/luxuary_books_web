import styled from "styled-components";

export const BookJourneyOddItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-repeat: no-repeat;
    background-image: url('/images/book_bg_odd_mobile.png');
    background-position: left center;
    align-items: center; /* Vertically center items */
    justify-content: center; /* Horizontally center items */

    .book-item-image {
        height: fit-content;
        width: 130px;
        margin-top: -10px;
        align-self: center;
    }

    .book-journey-title {
        font-size: 19px;
        font-family: 'primary font', sans-serif;
        margin: 0px 67px 0px 67px;
        text-align: center;
        color: var(--brand-primary-white-color);
    }
    .book-journey-subtitle {
        font-size: 9px;
        font-family: 'Gayathri font', sans-serif;
        margin: 5px 67px 8px 67px;
        color: var(--brand-primary-white-color);
    }

    .book-journey-button-container {
        display: flex;
        height: 26px;
        width: 133px;
        border-radius: 13.4px;
        background-color: var(--brand-yellow-color);

        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 8px;
        margin-top: 9px;
        margin-bottom: 9px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

`;