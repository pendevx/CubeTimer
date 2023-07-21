import styles from "./Login.module.css";
import React from "react";
import { IUnauthorizedAction } from "../Accounts";
import { useAccountContext } from "../../../contexts";

type Fields = "username" | "password";

function Login(props: IUnauthorizedAction) {
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ infoText, setInfoText ] = React.useState<string>("");
    const accCtx = useAccountContext();

    const login = async () => {
        if (!username) {
            setInfoText("Please enter a valid username!");
            return;
        }
        
        if (!password) {
            setInfoText("Please enter a valid password!");
            return;
        }

        await accCtx?.login({
            username,
            password
        });
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, type : Fields) => {
        switch (type) {
            case "username": {
                setUsername(e.target.value);
            } break;

            case "password": {
                setPassword(e.target.value);
            } break;

            default: {
                // ensure all possibilities for the parameter 'type' are fully handled
                const n: never = type;
                n;
            }
        }

        if (infoText) {
            setInfoText("");
        }
    }

    const handleCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            login();
        }
    }

    return (<>
        <input type="text" placeholder="Username" onChange={e => handleTextChange(e, "username")} onKeyDown={e => handleCheckEnter(e)} />
        <input type="text" placeholder="Password" onChange={e => handleTextChange(e, "password")} onKeyDown={e => handleCheckEnter(e)} />
        <button onClick={login}>Login</button>
        <p style={{ height: "1rem", "verticalAlign": "top" }}>{infoText}</p>
        <p className={styles.switch} onClick={props.switchAuthAction}>New here? Register an account</p>
    </>);
}

export default Login;
