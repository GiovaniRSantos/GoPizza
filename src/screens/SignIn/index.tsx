import React from "react";
import { Container } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//placerholder email define o input como tipo email, type define o tipo do input, autoCorrect como false remove o corretor do teclado, autoCapitalize define a primeira letra sempre como minuscula, secureTextEntry define o input tipo senha,escondendo os caracteres
export function SignIn() {
    return (
        <Container>
            <Input placeholder="E-mail"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none" />

            <Input placeholder="Senha"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry />

            <Button
                title="Entrar"
                type="secondary"
                isLoading={true}
            />
        </Container>
    );
}