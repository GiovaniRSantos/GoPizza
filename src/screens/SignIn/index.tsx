import React, { useState } from "react";
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
import { UseAuth } from '@hooks/auth';
//placerholder email define o input como tipo email, type define o tipo do input, autoCorrect como false remove o corretor do teclado, autoCapitalize define a primeira letra sempre como minuscula, secureTextEntry define o input tipo senha,escondendo os caracteres

//KeyboardAvoidingView define que se o usuario abrir o teclado, o layout acompanha. Somente necessario no ios pois android faz isso nativamente, por isso foi passado "undefined no final de behavior"
export function SignIn(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, isLogging } = UseAuth();

    //onChangeText recebe o estado de set (email e senha)   
    // o btn receba o isLoading (metodo que executa o loading no botao, quando estiver tentando logar)
    function handleSignIn() {
        signIn(email, password);
    }
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
                        autoCapitalize="none"
                        onChangeText={setEmail}
                    />

                    <Input placeholder="Senha"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <ForgotPasswordButton>
                        <ForgotPasswordLabel>
                            Esqueci minha senha
                        </ForgotPasswordLabel>
                    </ForgotPasswordButton>
                    <Button
                        title="Entrar"
                        type="secondary"
                        onPress={handleSignIn}
                        isLoading={isLogging}
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}