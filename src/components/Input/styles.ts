import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

//exportando o tipo para usar no index.tsx e receber propriedades, para passar pro style components, primary e secondary, para receber duas variacoes dos components.
export type TypeProps = 'primary' | 'secondary';

type Props = {
    type: TypeProps;
}

//passando <Props> no attrs para desestruturar o theme e o type do Props
//placeholderTextColor  define a cor do placeholder do input, e utiliza o type para descobrir se e o primary ou secundario
//  ${({ theme, type }) => css` desestruturar o theme e o type do Props para usar com css, para utilizar em condicoes (tambem pode ser usado quando tem varias regras de utilizacao)
export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
    placeholderTextColor: type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50
})) <Props>`
    width: 100%;
    height: 56px;
    background-color: transparent;
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0;
    padding-left: 20px;
    margin-bottom: 16px;

    ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE};
    `}
`;