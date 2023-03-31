import styled from "styled-components";

const StyledForm = styled.form`
    display: grid;
    grid-gap: 45px;
    width: 90%;
    max-width: 460px;
    margin:203px auto 0;
    @media (max-width:768px){
        max-width: 332px;
        margin: 236px auto 0;
    }
`;

const Title = styled.h1`
    font-family: 'Noto Sans', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 58px;
    text-align: center;
    letter-spacing: 0.5px;
    @media (max-width:768px){
        font-size: 24px
    }
`;

const SubTitle = styled.h3`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    letter-spacing: -0.3px;
    color: rgba(117, 108, 108, 0.57);
    @media (max-width:768px){
        font-size: 24px;
    }
`;

const Total = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;
`;

const InputGroup = styled.div`
    display: grid;
    grid-gap: 33px;
`;

export { StyledForm, Title, SubTitle, Total, InputGroup };