import { InitiateAuthCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
import React from "react";

export type EmailString = `${string}@${string}.${string}`;

interface AccountContextProps {
    children? : JSX.Element | JSX.Element[];
}

interface AccountContextType {
    isLoggedIn: boolean;
    userDetails: IUser | null;
    login: (details: ILoginDetails) => void;
    logout: () => void;
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
    name: string;
}

interface IUser {
    name: string;
    email: EmailString;
}

const Context = React.createContext<AccountContextType | null>(null);

export function AccountContext({ children } : AccountContextProps) {
    const [ userDetails, setUserDetails ] = React.useState<IUser | null>(null);
    const [ isLoggedIn, setIsLoggedIn ] = React.useState<boolean>(false);
    const [ credentials, setCredentials ] = React.useState<InitiateAuthCommandOutput | null>(null);

    const login = async ({ username, password } : ILoginDetails): Promise<void> => {









        /*
        
        USE
        PKCE
        INSTEAD
        OF
        COGNITOCLIENT
        
        */









        


        const res = await fetch(`https://api.cubetimer.pendevx.com/login?username=${username}&password=${password}`);

        if (!res.ok) {
            return;
        }
        
        const responseCredentials : InitiateAuthCommandOutput = await res.json();
        setCredentials(responseCredentials);
        
        // set the value of the username, name, email, etc. below
        const fetchUserDetails = await fetch(`https://api.cubetimer.pendevx.com/getuser?accessToken=${responseCredentials.AuthenticationResult?.AccessToken}`, {
            headers: {
                "Authorization": `Bearer ${responseCredentials.AuthenticationResult?.IdToken}`
            }
        });

        if (!fetchUserDetails.ok) {
            return;
        }

        // Extract parts of the user detail
        const { name, email } = await fetchUserDetails.json();
        const userDetails : IUser = { name, email };

        console.log(userDetails);
        setIsLoggedIn(true);
        setUserDetails(userDetails);
    }

    const logout = async () : Promise<void> => {
        
    }

    const register = async ({ username, password, email, name } : IRegisterDetails) : Promise<void> => {
        console.log(username, password, email, name);
        
        // TODO
    }

    return (
        <Context.Provider value={{
            isLoggedIn,
            userDetails,
            login,
            logout,
            register
        }}>
            {children}
        </Context.Provider>
    );
}

export const useAccountContext = () => React.useContext(Context);
