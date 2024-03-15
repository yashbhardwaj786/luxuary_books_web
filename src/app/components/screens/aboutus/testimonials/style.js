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
     width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    object-fit: contain;


    .inner-cover-area{
        display: flex;
        flex-direction: column;
        background-image:  url('/images/Rectangle.svg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 238px;
        margin: 10px 96px 0px 96px;
        border-radius: 10px;
        align-items: center;
    }

    .review-title {
      color: var(--black-color);
      font-size: 8px;
      font-family: 'Gayathri font', sans-serif;
      text-align: center;
      z-index: 1;
      margin-top: 5px;
      margin-left: -3px;

    }

    .quote-image {
        margin-top: -65px;
        margin-right: -14px;
    }

    .text-container {
        display: flex;
        flex-direction: row;
        margin: 10px 13px;
    }

    .user-info-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

    }

    .user-image{
        height: 20px;
        width: 20px;
    }

    .about-user{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 4px;
    }

    .user-name {
      color: var(--book-title-color);
      font-size: 8px;
      font-family: 'primary font light2', sans-serif;
      
    }

    .user-occupation {
      color: var(--book-title-color);
      font-size: 3px;
      font-family: 'primary font light2', sans-serif;
      margin-top: 2px;
    }


    

    @media (min-width: 768px) {
        padding: 50px; 
        
        .inner-cover-area{
            width: 727px;
            background-image:  url('/images/Rectangle.svg');
            margin: 13px 162px 0px 177px;
            border-radius: 20px;
            padding: 30px;
        }

        .review-title {
            font-size: 16px;
            margin-left: 2px;
            margin-top: 5px;
        }

        .text-container {
            display: flex;
            flex-direction: row;
            margin: 20px 47px;
        }
        .quote-image {
            margin-top: -105px;
            margin-right: -22px;
        }
        .user-info-container {
            margin-bottom: 30px;

        }
        .user-image{
            height: 50px;
            width: 50px;
        }
        .about-user{
            margin-top: 8px;
            margin-left: 10px;
        }
        .user-name {
            font-size: 16px;
        }

        .user-occupation {
            font-size: 8px;
            
        }
        
    }
`;