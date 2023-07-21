import { InitiateAuthCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
import React from "react";

export type EmailString = `${string}@${string}.${string}`;

interface AccountContextProps {
    children? : JSX.Element | JSX.Element[];
}

interface AccountContextType {
    isLoggedIn: boolean;
    username: string;
    nickname: string;
    email: EmailString;
    login: (details: ILoginDetails) => void;
    register: (details: IRegisterDetails) => void;
}

interface ILoginDetails {
    username: string;
    password: string;
}

interface IRegisterDetails {
    username: string;
    password: string;
    email: EmailString;
    nickname: string;
}

const Context = React.createContext<AccountContextType | null>(null);

export function AccountContext({ children } : AccountContextProps) {
    const [ username, setUsername ] = React.useState<string>("");
    const [ nickname, setNickname ] = React.useState<string>("");
    const [ email, setEmail ] = React.useState<EmailString>("example@example.com");
    const [ isLoggedIn, setIsLoggedIn ] = React.useState<boolean>(false);

    const login = async ({ username, password } : ILoginDetails): Promise<void> => {
        const res = await fetch(`https://api.cubetimer.pendevx.com/login?username=${username}&password=${password}`);

        if (res.status < 200 || res.status > 299) {

            return;
        }
        
        const credentials : InitiateAuthCommandOutput = await res.json();

        // set the value of the username, name, email, etc. below
    }

    const logout = async (): Promise<void> => {

    }

    const register = async ({ username, password, email, nickname } : IRegisterDetails) => {
        console.log(username, password, email, nickname);
        
        // TODO
    }

    return (
        <Context.Provider value={{
            isLoggedIn,
            username,
            nickname,
            email,
            login,
            register
        }}>
            {children}
        </Context.Provider>
    );
}

export const useAccountContext = () => React.useContext(Context);
