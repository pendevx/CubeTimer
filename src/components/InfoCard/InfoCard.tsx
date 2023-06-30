import styles from "./InfoCard.module.css";

function InfoCard() {
    return (
        <div className={styles.container}>
            <ul className={styles.info}>
                <li>
                    <div className={styles.accountCard}> { /* Default should render this unless logged in. */}
                        <img src="./blank-profile.webp" alt="Account image" />
                        <button className={styles.accountButton}>Register</button>
                        <button className={styles.accountButton}>Log in</button>
                    </div>
                </li>
                <li>
                    <div className={styles.timesList}>
                        <table>
                            <th>Latest 10 times</th>
                        </table>
                    </div>
                </li>
                <li><button>View all times</button></li>
            </ul>
        </div>
    );
}

export default InfoCard;
