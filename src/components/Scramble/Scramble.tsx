import styles from "./Scramble.module.css";
import { ScrambleEditor } from "../ScrambleEditor";
import { ScrambleEditorProps } from "../ScrambleEditor";
import React from "react";

interface ScrambleProps extends ScrambleEditorProps {
    scramble: string;
}

function Scramble(props: ScrambleProps) {
    const [ showSettings, setShowSettings ] = React.useState<boolean>();

    return (<>
        <div className={styles.scrambleContainer} style={{backgroundColor:"#555555"}}>
            <p className={styles.scrambleText}>{props.scramble}</p>
            <button className={styles.toggleButton} onClick={() => setShowSettings(!showSettings)}>
                <img src="/toggle-button.webp"></img>
                <div className={styles.settingsDropdown}>
                    { showSettings && 
                        <ScrambleEditor switchScramble={props.switchScramble} setScrambleType={props.setScrambleType} />
                    }
                </div>
            </button>
        </div>
    </>);
}

export default Scramble;
