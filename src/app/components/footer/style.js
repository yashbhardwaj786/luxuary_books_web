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
    margin-top: 24px;
  }

  .social-icon {
    margin-right: 32px;
  }
`;

export const MenuItem = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 18.93px;
    margin-right: 70px;
    font-family: ${(props) =>
      props.isActive
        ? 'primary font bold, sans-serif'
        : 'primary font, sans-serif'};
`;