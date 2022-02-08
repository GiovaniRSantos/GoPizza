import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";

type AuthContextData = {
    signIn: (email: string, password: string) => Promise<void>;
    isLogging: boolean
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    //cria um estado para a acao de login
    const [isLogging, setIsLogging] = useState(false);
    async function signIn(email: string, password: string) {
        //caso o email e a senha nao seja preenchido, dispara o alerta
        if (!email || !password) {
            return Alert.alert('Login', 'Informe o e-mail e a senha.')
        }

        setIsLogging(true);

        auth().signInWithEmailAndPassword(email, password).then(account => {
            //pega o retorno da conta logada
            console.log(account)
        }).catch(error => {
            //caso ocorra algum erro, desencapsula o erro
            const { code } = error;
            //valida se a senha foi digitada errado ou usuario nao encontrado
            if (code === 'auth/user-not-found' || 'auth/wrong-password') {
                return Alert.alert('Login', 'E-mail e/ou senha invalida.')
            } else {
                //erro generico
                return Alert.alert('Login', 'Não foi possivel realizar o login.')
            }
        }).finally(() => {
            //caso nao faca login, define o setIsLogging com falso
            setIsLogging(false);
        })
    }


    return (
        <AuthContext.Provider value={{
            signIn,
            isLogging
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function UseAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, UseAuth } 