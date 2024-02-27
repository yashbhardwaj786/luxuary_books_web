import styled from "styled-components";

export const AboutBookContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--brand-navbar-background-color);
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;

    .book-img {
        height: 150px;
        margin: 20px
    }
    .text-container {
        flex: 1;
        display: flex ;
        flex-direction: column;
        justify-content: center;
    }
    .image {
        width: 322px;
        height: 51px;
        margin-top: 69px;
        margin-bottom: 20px;
        align-self: center;
    }
    .button-container-aboutbook {
        display: flex;
        background: var(--brand-yellow-color);
        border-radius: 24.5px;
        padding-bottom: 15px;
        padding-top: 15px;
        padding-left: 30px;
        padding-right: 30px;
        width: 243px;
        align-self: center;
        margin-bottom: 60px;
    }

    .button-text-aboutbook {
      color: var(--brand-navbar-background-color);
      font-size: 16px;
      width: 100%;
      line-height: 19.25px;
      text-align: center;
      align-self: center;
      font-family: 'primary font bold', sans-serif;
      font-weight: var(--brand-font-weight-medium-dark);
    
    }

`;