import React from "react";

interface AccountContextProps {
    children? : JSX.Element | JSX.Element[];
}

const Context = React.createContext({});

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
