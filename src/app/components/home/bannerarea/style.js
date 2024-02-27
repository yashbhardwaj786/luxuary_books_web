import styled from 'styled-components'
export const StyledHappyCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/images/homepage_bg.png');
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

    margin-left: 10px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    
    .book__img img {
      object-fit: contain;
      border-radius: 1.25rem;
      width: 100%;
      height: 130px;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    .book-title {
      color: var(--book-title-color);
      font-size: 12px;
      line-height: 14.44px;
      font-family: 'primary font', sans-serif;
      font-weight: var(--brand-font-weight-medium-dark);
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
      background: var(--brand-navbar-background-color);
      border-radius: 24.5px;
      padding-top: 15px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 30px;
      margin-bottom: 50px;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 16px;
      line-height: 19.25px;
      font-family: 'primary font', sans-serif;
      font-weight: var(--brand-font-weight-medium-dark);
    
    }

    @media (min-width: 768px) {

      .book__img img {
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        height: 250px;
        width: 690px;
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
        margin-bottom: 15px;
      }

    }
  `;