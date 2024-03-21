import styled from 'styled-components'

export const MarketPlaceWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--black-color);
        align-self: center;
    }

    .selection-container {
        display: flex;
        flex-direction: row;
    }

    .select-book {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 12px 30px 32px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }
    .select-book-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);
        align-self: center;
        flex: 1;
        background-image: url('./images/arrowIconMobile.svg');
        background-repeat: no-repeat;
        background-position: right center;
        appearance: none; // Hide default arrow icon
        -webkit-appearance: none; // For Safari
        -moz-appearance: none;
        background-color: transparent;
    }

    .select-option-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);

    }

    .select-country {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 13px 30px 0px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }

    @media (min-width: 768px) {

        .title-text {
            font-size: 25px;
        }

        .select-book {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 44px 50px 145px;
        }

        .select-country {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 145px 50px 0px;
        }

        .select-book-text {
            font-size: 16px;
            background-image: url('./images/arrowIconWeb.svg');
            background-repeat: no-repeat;
            background-position: right center;
        }

        .select-option-text {
            font-size: 16px;
            font-family: 'primary font light2', sans-serif;
            color: var(--book-subtitle-color);

        }

    }
`;