import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

//extendendo componente de LinearGradient, no Container criado
//attrs para atribuir as cores do gradiente atraves do styled components da pasta themes.
export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    //define o comeco e o fim das cores do gradiente
    start: { x: 0, y: 1 },
    end: { x: 0.5, y: 0.5 }
}))`
    flex: 1;
    justify-content: center;
`
//getBottomSpace  serve para ter um "espaco" na margem da tela, para caso o usuario tenha de "scrollar"
export const Content = styled.ScrollView.attrs({
    showsVerticalScrollsIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    }
})`
    width: 100%;
    padding: 0 32px;
`

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 24px;
    align-self: flex-start;
    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE};
    `}
`

//componente para utilizar a imagem da pizza na screen SignIn
export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 340px;
    margin-top: 64px;
    margin-bottom: 32px;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-self: flex-end;
    margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
    font-size:14px;
    ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
    `}
`





