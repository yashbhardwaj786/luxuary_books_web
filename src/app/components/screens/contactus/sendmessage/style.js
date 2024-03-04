import styled from 'styled-components'

export const SendMessgerWrapper = styled.div`

    display: flex;
    flex-direction: column;
    margin: 50px 0px 50px 0px;
    align-items: center;

    .name-email-container {
        display: flex;
        flex-direction: row;
    }

    .name-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 10px 0px 90px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 440px;
        padding: 20px 60px 20px 60px;
        align-items: center;
    }

    .name-input-text {
      font-size: 16px;
      flex: 1;
      margin-left: 10px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      height: fit-content;
      border: none;
      outline: none;
      background-color: transparent

    }

    .email-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 90px 0px 10px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 440px;
        padding: 20px 60px 20px 60px;
        align-items: center;
    }

    .phone-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 20px 90px 0px 90px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 900px;
        padding: 20px 60px 20px 60px;
        align-items: center;
    }

    .message-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 20px 90px 0px 90px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 900px;
        min-height: 194px;
        padding: 20px 60px 20px 60px;
    }

    .message-input-area {
      font-size: 16px;
      width: 100%;
      height: 190px;
      margin-left: 10px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      border: none;
      outline: none;
      background-color: transparent;
      resize: none;

    }



`;
export const StyledSVG = styled.svg`
  margin-top: 6px;
`;