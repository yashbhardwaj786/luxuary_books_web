import styled from "styled-components";

export const StyledNavigationContainer = styled.div`
/* p {
    &:active {
      font-weight: 800;
    }
} */
ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }

  p {
    font-weight: normal; /* Reset font weight */
  }

  .active p {
    font-weight: bold;
  }
    height: 112px;
    display: flex;
    flex-direction: column;
    background-color: var(--brand-navbar-background-color);

   
`;

export const StyledNavItem = styled.p`

        font-size: 20px;
        font-family: var(--brand-font-family);
        /* font-weight: var(--brand-font-weight-light); */
        color: var(--brand-primary-white-color);
    
`;