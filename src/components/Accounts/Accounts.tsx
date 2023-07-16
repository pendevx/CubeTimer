import { default as register } from "../../../config/cognitoClient";
import styles from "./Accounts.module.css";

function Accounts() {
    async function tryRegister() {
        const res = await register({
            username: "xx",
            password: "Testtest1234!@#$",
            email: "guanghengxian@hotmail.com",
            name: "name"
        });
    }

    return (
        <div className={styles.container}>
            <img src="/blank-profile.webp" />

            {/* <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input> */}

            {/* <button onClick={tryRegister}>Register</button> */}
            <button onClick={() => window.location.href="https://cubetimer-pendevx-login.auth.us-east-1.amazoncognito.com/login?client_id=5n06uskf3p4ouo3rhv0g3jm3n8&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F"}>sample login</button>
            <button onClick={() => window.location.href="https://cubetimer-pendevx-login.auth.us-east-1.amazoncognito.com/logout?client_id=5n06uskf3p4ouo3rhv0g3jm3n8&logout_uri=http%3A%2F%2Flocalhost%3A5173%2F"}>sample logout</button>
        </div>
    )
}

export default Accounts;
