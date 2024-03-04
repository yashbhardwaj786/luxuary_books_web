import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  height: 241px;
  font-family: 'primary font', sans-serif;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: var(--brand-navbar-background-color);

  .image {
    width: 244px;
    height: 40px;
    align-self: center;
  }

  .option-container {
    align-self: center;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }
  .image-container {
    align-self: center;
    display: flex;
    flex-direction: row;
    margin-top: 21px;
    @media (min-width: 768px) {
      margin-top: 24px;
    }
  }

  .social-icon {
    margin-right: 17px;
    cursor: pointer;
    @media (min-width: 768px) {
      margin-right: 32px;
    }
  }
`;

export const MenuItem = styled.p`
    font-size: 8px;
    font-weight: 300;
    line-height: 9.46px;
    margin-bottom: 10px;
    cursor: pointer;
    font-family: ${(props) =>
    props.isactive
      ? 'primary font bold, sans-serif'
      : 'primary font, sans-serif'};

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 18.93px;
    margin-right: 70px;
    cursor: pointer;
    font-family: ${(props) =>
    props.isactive
      ? 'primary font bold, sans-serif'
      : 'primary font, sans-serif'};
  }
`;