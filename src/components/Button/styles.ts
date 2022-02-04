import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

export type TypeProps = 'primary' | 'secondary'

type ContainerProps = {
    type: TypeProps
}

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const Container = styled(RectButton) < ContainerProps> `
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    backgroundColor: ${({ theme, type }) => type === 'primary' ? theme.COLORS.PRIMARY_900 : theme.COLORS.SUCCESS_900};
`;

export const Tittle = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONTS.TITLE};
    `}
`;

//cria loading no button ()
export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
    colors: theme.COLORS.TITLE
}))``;