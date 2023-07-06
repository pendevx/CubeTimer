import React from "react";
import styles from "./ScrambleEditor.module.css";

export interface ScrambleEditorProps {
    switchScramble() : void;
    setScrambleType(type : string) : void;
}

function ScrambleEditor(props : ScrambleEditorProps) {
    const buttonRef = React.createRef<HTMLButtonElement>();
    const selectRef = React.createRef<HTMLSelectElement>();

    const handleScrambleTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        selectRef.current?.blur();
        props.setScrambleType(e.target.value);
    }

    const handleGenerateScramble = () : void => {
        buttonRef.current?.blur();
        props.switchScramble();
    }

    return (
        <div className={styles.container}>
            <button className={styles.switchButton} onClick={handleGenerateScramble} ref={buttonRef}>Switch scramble</button>
            <select className={styles.scrambleSelector} onChange={e => handleScrambleTypeChange(e)} ref={selectRef}>
                {
                    [3, 4, 5, 6, 7].map(x => (
                        <option key={x}>{`${x}x${x}`}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default ScrambleEditor;
