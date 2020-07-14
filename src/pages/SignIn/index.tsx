import React from "react";

import { Container, SignInForm, Background } from "./styles";
import Input from "./../../components/InputDefault";
import Button from "./../../components/ButtonDefault";

const SignIn: React.FC = () => {
    return (
        <Container>
            <SignInForm autoComplete="off">
                <h1>Dash</h1>
                <h2>Faça seu login</h2>
                <Input name="E-mail" placeholder="Seu e-mail" />
                <Input
                    name="Password"
                    type="password"
                    placeholder="Sua senha"
                />
                <Button>Entrar</Button>
                <a href="teste">Criar conta gratuito.</a>
            </SignInForm>
            <Background>
                <section>
                    <h1>Your Sales Dashboard!</h1>
                    <h3>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                    </h3>
                </section>
            </Background>
        </Container>
    );
};

export default SignIn;
