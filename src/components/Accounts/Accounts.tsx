import styles from "./Accounts.module.css";
import { useAccountContext } from "../../../contexts";
import { AccountDetails, Login, Register } from "..";
import React from "react";

type LoginOrRegister = "login" | "register";

function Accounts() {
    const [ unauthorizedActions, setUnauthorizedActions ] = React.useState<LoginOrRegister>("login");
    const context = useAccountContext();

    const register = async () => {
        // TODO
    }

    const login = async () => {
        context?.login({
            username: "",
            password: ""
        });
    }

    const result = context?.isLoggedIn ? <AccountDetails /> : (
        unauthorizedActions === "login" ? 
            <Login /> : 
            <Register />
    );

    return (
        <div className={styles.container}>
            <img src="/blank-profile.webp" />

            { result }
        </div>
    );
}

export default Accounts;
