import styled from "styled-components";

export const BookJouneyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-repeat: repeat;
    padding-bottom: 10px;
    background-image: ${(props) =>
    props.isMobile  ? "url('/images/background_list_mobile.png')" : "url('/images/background_list.png')"}; 

    .bgContainer{
        display: flex;
        flex-direction: column;
        background-image: url('/images/FullWaveMobile.svg');
        background-repeat: repeat-y;
    }

    @media (min-width: 768px) {
        padding-bottom: 0px;
        .bgContainer{
            display: flex;
            background-image: url('/images/fullwave.svg');
            margin-left: 70px;
            height: fit-content;
        }
    
    }
`;