import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
    Container,
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel
} from "./styles";
import brandImg from '@assets/brand.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//placerholder email define o input como tipo email, type define o tipo do input, autoCorrect como false remove o corretor do teclado, autoCapitalize define a primeira letra sempre como minuscula, secureTextEntry define o input tipo senha,escondendo os caracteres

//KeyboardAvoidingView define que se o usuario abrir o teclado, o layout acompanha. Somente necessario no ios pois android faz isso nativamente, por isso foi passado "undefined no final de behavior"
export function SignIn() {
    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Content>
                    <Brand source={brandImg} />
                    <Title>
                        Login
                    </Title>
                    <Input placeholder="E-mail"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none" />

                    <Input placeholder="Senha"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry />

                    <ForgotPasswordButton>
                        <ForgotPasswordLabel>
                            Esqueci minha senha
                        </ForgotPasswordLabel>
                    </ForgotPasswordButton>
                    <Button
                        title="Entrar"
                        type="secondary"
                        isLoading={false}
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}