import styles from "./Scramble.module.css";

interface ScrambleProps {
    scramble: string;
}

function Scramble(props: ScrambleProps) {
    return (
        <div className={styles.scrambleContainer}>
            <p className={styles.scrambleText}>{props.scramble}</p>
        </div>
    );
}

export default Scramble;
