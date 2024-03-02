import styled from 'styled-components'

export const AuthorImageWrapper =  styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;

    .image-outer-container {
        display: flex;
        margin: 30px 0px 30px 0px;
    }
    .bg-circle-container{
        display: flex;
        margin: 45px 8px 0px 8px;
    }
    

    .bg-author-image{
        z-index: 999;
        position: absolute;
        height: 237px;
        width: 209px;
        margin-top: -45px;
        margin-left: -6px;
    }

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
    }

    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        text-align: center;
        margin: 6px 65px 6px 65px;
    }

    @media (min-width: 768px) {
        .image-outer-container {
            display: flex;
            margin: 50px 0px 26px 0px;
        }
        .bg-circle-container{
            display: flex;
            margin: 82px 15px 0px 15px;
        }
        .bg-author-image{
            z-index: 999;
            position: absolute;
            height: 430px;
            width: 380px;
            margin-top: -85px;
            margin-left: -20px;
        }

        .title-text {
            font-size: 25px;
        }

        .description-text {
            font-size: 16px;
            margin: 16px 242px 16px 242px;
        }

    }
`;