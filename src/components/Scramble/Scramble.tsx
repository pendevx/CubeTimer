import React from "react";
import styles from "./Scramble.module.css";

interface ScrambleProps {
    scramble: string;
    flipShowScrambleSettings(): void;
}

function Scramble(props: ScrambleProps) {
    const buttonRef = React.createRef<HTMLButtonElement>();

    const handleShowSettings = () : void => {
        props.flipShowScrambleSettings();
        buttonRef.current?.blur();
    }

    return (<>
        <div className={styles.scrambleContainer} style={{backgroundColor:"#555555"}}>
            <p className={styles.scrambleText}>{props.scramble}</p>
            <button className={styles.toggleButton} onClick={handleShowSettings} ref={buttonRef} >
                <img src="/toggle-button.webp"></img>
            </button>
        </div>
    </>);
}

export default Scramble;
