import React from "react";
import { TextInputProps } from 'react-native';

import { Container, TypeProps } from './styles';

type Props = TextInputProps & {
    type?: TypeProps;
}


// Input type = 'primary' define o padrao como primary, ...rest pega todo o resto das Props
export function Input({ type = 'primary', ...rest }: Props) {
    return <Container type={type} {...rest} />
} 