import styled from 'styled-components'
export const StyledHappyCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image:  ${(props) =>
    props.ismobile  ? "url('/images/homepage_bg_mobile.png')" : "url('/images/homepage_bg.png')"}; 
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

`;

export const ItemContainer = styled.div`

    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    
    .book__img img {
      object-fit: contain;
      border-radius: 1.25rem;
      width: auto;
      height: 141px;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .book-title {
      color: var(--book-title-color);
      font-size: 12px;
      line-height: 14.44px;
      font-family: 'primary font bold', sans-serif;
      margin-top: 10px;

    }

    .book-subtitle {
      color: var(--book-subtitle-color);
      font-size: 16px;
      line-height: 19.53px;
      font-family: 'Gayathri font', sans-serif;
      font-weight: var(--brand-font-weight-roman);
      margin-top: 10px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 15px;
      margin-right: 40px;
      margin-left: 40px;

    }

    .button-container {
      display: flex;
      background: var(--brand-navbar-background-color);
      width: 119px;
      border-radius: 24.5px;
      padding: 8px 0px;
      margin: 8px 0px 15px;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 8px;
      text-align: center;
      margin-left: 16px;
      font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
      padding: 50px; 

      .book__img img {
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        height: 450px;
        width: auto;
      }

      .book-title {
        font-size: 25px;
        line-height: 30.8px;
        margin-top: 20px;
      }

      .book-subtitle {

        font-size: 16px;
        line-height: 19.53px;
        margin-top: 10px;
        margin-right: 215px;
        margin-left: 215px;
        text-align: center;
        text-transform: capitalize;
      }

      .button-container {
        width: 243px;
        padding: 17px 34px;
        margin: 18px 0px 0px;
      }

      .button-text {
        font-size: 16px;
        line-height: 19.25px;
        margin-left: 0px;
      }

    }
  `;