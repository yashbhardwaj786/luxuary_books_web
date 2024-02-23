import styled from "styled-components";

export const StyledNavigationContainer = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    background-color: var(--brand-navbar-background-color) !important;

  p {
    font-weight: normal; 
  }

  .active p {
    font-weight: bold;

  }
  
`;

export const StyledNavItem = styled.p`

        font-size: 20px;
        font-family: var(--brand-font-family);
        color: var(--brand-primary-white-color);
    
`;