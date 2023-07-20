import styles from "./Accounts.module.css";

interface IRegistrationUser {
    username: string;
    password: string;
    email: `${string}@${string}.${string}`;
    name: string;
}

function Accounts() {
    const register = async () => {

    }

    const login = async () => {
        
    }

    return (
        <div className={styles.container}>
            <img src="/blank-profile.webp" />
        </div>
    )
}

export default Accounts;
