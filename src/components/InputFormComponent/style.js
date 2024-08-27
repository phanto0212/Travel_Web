import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 12px;
    display: inline-flex;
    font-size: 16px;
    min-height: 44px;
    position: relative;
    transition: border .24s cubic-bezier(.22,0,.08,1);
    width: 100%;
    color: #212121;
    margin-top:10px;
`;