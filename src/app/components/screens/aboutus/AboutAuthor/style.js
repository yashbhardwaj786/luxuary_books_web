import styled from 'styled-components'

export const AuthorImageWrapper =  styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding-bottom: 6px;

    .image-outer-container {
        display: flex;
        margin: 30px 0px 30px 0px;
    }
    .bg-circle-container{
        display: flex;
        margin: 30px 8px 0px 8px;
    }
    

    .bg-author-image{
        z-index: 99;
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
        margin-bottom: 8px;
    }

    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        text-align: left;
        margin: 0px 65px 0px 65px;
    }

    @media (min-width: 768px) {
        padding-bottom: 16px;
        
        .image-outer-container {
            display: flex;
            margin: 50px 0px 26px 0px;
        }
        .bg-circle-container{
            display: flex;
            margin: 82px 15px 0px 15px;
        }
        .bg-author-image{
            z-index: 99;
            position: absolute;
            height: 430px;
            width: 380px;
            margin-top: -85px;
            margin-left: -20px;
        }

        .title-text {
            font-size: 25px;
            margin-bottom: 8px;
        }

        .description-text {
            font-size: 16px;
            line-height: 19.53px;
            text-align: left;
            margin: 8px 242px 8px 242px;
        }

    }
`;