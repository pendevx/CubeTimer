import styles from "./InfoCard.module.css";

interface InfoCardProps {
    children: JSX.Element[] | JSX.Element;
    close: () => void;
}

function InfoCard({ close, children } : InfoCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.infocard}>
                {children}
                <button className={styles.closeButton} onClick={close}></button>
            </div>
        </div>
    );
}

export default InfoCard;
