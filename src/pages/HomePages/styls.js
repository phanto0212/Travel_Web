import styled from "styled-components";
import { SearchOutlined } from '@ant-design/icons';

export const TitleTour = styled.h2`
    color: #212121;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom:44px;
    margin-top: 40px;
`
export const Container = styled.div`
    color: #fff;
    left: 50%;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 1160px;
    z-index: 800;
    `;

export const ContainerTitleText = styled.h1`
    font-size: 60px;
    font-weight: 700;
    line-height: 1.32;
    margin-bottom: 2px;
    min-width: 750px;
    color: #fff;
`;

export const ContainerH2Text = styled.h2`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin: 0 0 20px;
    color: #fff;
    `;

export const ContainerKhamPha = styled.div`

    align-items: center;
    background: #fff;
    border: 1px solid transparent;
    border-radius: 12px;
    box-sizing: border-box;
    color: #212121;
    display: flex;
    height: 56px;
    padding: 0 3px 0 16px;
    position: relative;
    width: 800px;
    z-index: 5;`;

export const ContainerInput = styled.div`

    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 6px;
    box-sizing: border-box;
    caret-color: #ff5722;
    color: #212121;
    font-size: 16px;
    font-size: 18px;
    font-weight: 400;
    height: 54px;
    line-height: 1.5;
    overflow: hidden;
    padding: 15px 0;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    z-index: 400;`;



export const ContainerButton = styled.div`
align-items: center;
    background: #ff5b00;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex: none;
    font-size: 16px;
    font-weight: 500;
    height: 48px;
    line-height: 1.5;
    margin-left: 16px;
    padding: 0 40px;
    `;
export const SearchOutlinedCustom = styled(SearchOutlined)`
font-size:16px;
color: #c9c9c9;
`
export const ButtonMoreTour = styled.button`
    margin: 42px 0 40px 455px;
    background-color: transparent;
    min-width: 320px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
    min-width: 320px;
    padding: 7px 12px;
    cursor: pointer;
    align-items: center;
    border: 1px solid #4a4a4a;
    color: #212121;
`;