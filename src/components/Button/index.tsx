import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Tittle, Load, TypeProps } from './styles';

// setando title como obrigatorio, type e loading do button como opcional
type Props = RectButtonProps & {
    title: string;
    type?: TypeProps;
    isLoading?: boolean;
};

export function Button({ title, type = 'primary', isLoading = false, ...rest }: Props) {
    return (
        <Container type={type} enabled={!isLoading} {...rest} >
            {isLoading ? <Load /> : <Tittle>{title}</Tittle>}
        </Container>
    )
}