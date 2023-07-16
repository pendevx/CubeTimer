import styles from "./Help.module.css";

interface IHelp {
    close: () => void;
}

function Help(props: IHelp) {
    return (
        <div className={styles.container}>
            <div className={styles.help}>
                <button className={styles.close} onClick={props.close}>✖</button>

                
            </div>
        </div>
    );
}

export default Help;
