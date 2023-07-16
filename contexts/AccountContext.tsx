import React from "react";

interface AccountContextProps {
    children? : JSX.Element | JSX.Element[];
}

interface AccountContextType {
    username: string;
    setUsername: (val: string) => void;
    name: string;
    setName: (val: string) => void;
    email: string;
    setEmail: (val: string) => void;
}

const Context = React.createContext<AccountContextType | null>(null);

export function AccountContext({ children } : AccountContextProps) {
    const [ username, setUsername ] = React.useState<string>("");
    const [ name, setName ] = React.useState<string>("");
    const [ email, setEmail ] = React.useState<string>("");

    return (
        <Context.Provider value={{
            username,
            setUsername,
            name,
            setName,
            email,
            setEmail
        }}>
            {children}
        </Context.Provider>
    );
}

export const useAccountContext = () => React.useContext(Context);
