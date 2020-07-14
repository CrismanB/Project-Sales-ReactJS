import styled, { keyframes } from "styled-components";
import BackgroundSignIn from "../../assets/background-signIn.jpg";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

const WelcomeAnimation = keyframes`
 0% { transform: translateY(20px) }
 30% { transform: translateY(0px)}
 60% { transform: translateY(-20px)  }
 100% { transform: translateY(20px)  }
`;

const BackgroundAnimation = keyframes`
  0% { opacity: 1}
 30% { opacity: 0.4 }
 60% {  opacity: 0.6 }
 100% { opacity: 1 }
`;

export const SignInForm = styled.form`
    height: 100%;
    width: 100%;
    max-width: 500px;
    background-color: #233657;
    background: -webkit-linear-gradient(to right, #2c446d, #233657, #1d2d49);
    background: linear-gradient(to right, #2c446d, #233657, #1d2d49);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 25px;
        font-family: "Jost", sans-serif;
        font-weight: 700;
        font-size: 36px;
        text-decoration: overline;
        text-transform: uppercase;
        color: gold;
    }

    h2 {
        margin-bottom: 20px;
    }

    a {
        margin-top: 20px;
        color: #fff;
    }
`;

export const Background = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    z-index: -1;

    background: url(${BackgroundSignIn}) no-repeat center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;

    animation-name: ${BackgroundAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;

    section {
        width: 70%;
        height: max-content;
        margin: 0 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        animation-name: ${WelcomeAnimation};
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    h1 {
        font-size: 36px;
        font-weight: 700;
        white-space: nowrap;
    }

    h3 {
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 26px;
        }
    }

    @media (max-width: 500px) {
        display: none;
    }
`;
