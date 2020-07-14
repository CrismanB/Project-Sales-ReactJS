import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
    width: 70%;
    height: 45px;

    border: 0;
    border-radius: 4px;
    background-color: #dbac3d;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.2s ease;

    margin-top: 10px;

    &:hover {
        background-color: ${shade(0.2, "#dbac3d")};
        font-weight: 700;
        font-size: 22px;
    }
`;
