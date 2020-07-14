import styled, { css } from "styled-components";

interface ContainerProps {
    IsFocused: boolean;
    IsFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: 0 10px;
    margin-bottom: 10px;
    height: 45px;
    width: 70%;
    background: #dbdbdb;
    color: #000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.2s ease;

    span {
        background-color: transparent;
        font-size: 14px;
        font-weight: 400;
        color: #636363;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
        z-index: 101;
        transition: all 0.2s ease;
    }

    input {
        background-color: transparent;
        font-size: 16px;
        font-weight: 700;
        height: 100%;
        border: 0;
        border-radius: 5px;
        padding-left: 10px;
        transition: all 0.2s ease;
    }

    ${(props) =>
        props.IsFocused &&
        css`
            border: 1px solid #dbac3d;

            & {
                height: 60px;
            }

            & span {
                font-weight: bold;
                position: relative;
                transform: translateY(-25px);
            }
        `}

    ${(props) =>
        props.IsFilled &&
        css`
            & {
                height: 60px;
            }

            & span {
                position: relative;
                transform: translateY(-25px);
            }
        `}
`;
