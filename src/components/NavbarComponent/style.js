import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 250px;
`;

export const WrapperLableText = styled.h4`
    font-size: 16px;
    color: #38383d;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const WrapperTextValue  = styled.div`
    font-size: 14px;
    color: ${(props) => (props.isSelected ? '#fff' : '#38383d')};
    font-weight: 500;
    padding: 8px;
    background-color: ${(props) => (props.isSelected ? '#ff5b00' : '#f5f5f5')};
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.isSelected ? '#ff5b00' : '#ebebeb')};
    }
`;

export const WrapperContent  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 20px;
`;
