import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

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

