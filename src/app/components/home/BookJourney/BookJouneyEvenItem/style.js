import styled from "styled-components";

export const BookJourneyEvenItemWrapper = styled.div`
    display: flex;
    margin-left: 126px;

    .book-image-wrapper{
        flex: 1;
    }

    .book-item-image {
        height: 300px;
        width: 237px;
        margin-top: 121px;
    }

    .book-details-container {
        display: flex;
        flex-direction: column;
        height: 410px;
        width: fit-content;
        margin-top: 34px;
        margin-left: 80px;
        background-repeat: no-repeat;
        background-image: url('/images/book_bg_odd_1.png');
        background-size: auto 100%;
        background-position: right center;
    }
    /* .topBgContainer{
        background-image: url('/images/WaveOdd.svg');
        background-repeat: no-repeat;
        margin-left: 70px;
    } */
    .book-journey-title {
        font-size: 35px;
        font-family: 'primary font', sans-serif;
        margin-top: 80px;
        margin-left: 25px;
        margin-right: 100px;
        color: var(--brand-primary-white-color);

    }
    .book-journey-subtitle {
        font-size: 16px;
        font-family: 'Gayathri font', sans-serif;
        margin-top: 10px;
        margin-left: 25px;
        margin-right: 106px;
        color: var(--brand-primary-white-color);
        margin-bottom: 10px;
    }

    .book-journey-button-container {
        display: flex;
        height: 49px;
        width: 243px;
        border-radius: 24.5px;
        background-color: var(--brand-yellow-color);
        margin-top: 10px;
        margin-left: 25px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 16px;
        margin-top: 18px;
        margin-bottom: 17px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

    
`;