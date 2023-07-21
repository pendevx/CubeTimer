import styles from "./Register.module.css";
import React from "react";
import { IUnauthorizedAction } from "../Accounts";
import { EmailString, useAccountContext } from "../../../contexts";

type Fields = "username" | "password" | "email" | "nickname";

const testEmail = (str: string) : str is EmailString => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str) as boolean;
}

function Register(props: IUnauthorizedAction) {
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ email, setEmail ] = React.useState<string | EmailString>("");
    const [ nickname, setNickname ]= React.useState<string>("");
    const [ infoText, setInfoText ]= React.useState<string>("");
    const acctCtx = useAccountContext();

    const register = async () => {
        if (infoText) {
            setInfoText("");
        }

        if (!username) {
            setInfoText("Please enter a valid username!");
        }

        if (!password) {
            setInfoText("Please enter a valid password!");
        }

        if (!email || !testEmail(email)) {
            setInfoText("Please enter a valid email!");
        } else {
            await acctCtx?.register({
                username,
                password,
                email,
                nickname
            });
        }
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, type : Fields) => {
        const text = e.target.value;

        switch (type) {
            case "username": {
                setUsername(text);
            } break;

            case "password": {
                setPassword(text);
            } break;
            
            case "email": {
                setEmail(text);
            } break;

            case "nickname": {
                setNickname(text);
            } break;

            default: {
                const n: never = type;
                n;
            }
        }
    }

    const handleEnterCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            register();
        }
    }

    return (<>
        <input type="text" placeholder="Username" onChange={e => handleTextChange(e, "username")} onKeyDown={e => handleEnterCheck(e)} />
        <input type="text" placeholder="Password" onChange={e => handleTextChange(e, "password")} onKeyDown={e => handleEnterCheck(e)} />
        <input type="text" placeholder="Email" onChange={e => handleTextChange(e, "email")} onKeyDown={e => handleEnterCheck(e)} />
        <input type="text" placeholder="Nickname" onChange={e => handleTextChange(e, "nickname")} onKeyDown={e => handleEnterCheck(e)} />
        <button onClick={register}>Register</button>
        <p style={{ height: "1rem" }}>{infoText}</p>
        <p className={styles.switch} onClick={props.switchAuthAction}>Login instead</p>
    </>);
}

export default Register;
