import styles from "./Accounts.module.css";
import { useAccountContext } from "../../../contexts";
import { AccountDetails, Login, Register } from "..";
import React from "react";

type LoginOrRegister = "login" | "register";

export interface IUnauthorizedAction {
    switchAuthAction: () => void;
}

function Accounts() {
    const [ unauthorizedActions, setUnauthorizedActions ] = React.useState<LoginOrRegister>("login");
    const context = useAccountContext();

    return (
        <div className={styles.container}>
            <img src="/blank-profile.webp" />

            {
                context?.isLoggedIn ? <AccountDetails /> : (
                    unauthorizedActions === "login" ?
                        <Login switchAuthAction={() => setUnauthorizedActions("register")} /> :
                        <Register switchAuthAction={() => setUnauthorizedActions("login")} />
                )
            }
        </div>
    );
}

export default Accounts;
