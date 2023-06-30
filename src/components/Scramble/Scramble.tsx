import styles from "./Scramble.module.css";

function Scramble() {
    return (
        <div className={styles.scrambleContainer}>
            <p className={styles.scrambleText}>A B C D E F G H I J K L M N O P</p>
        </div>
    );
}

export default Scramble;
