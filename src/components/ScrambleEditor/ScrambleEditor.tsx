import styles from "./ScrambleEditor.module.css";

export interface ScrambleEditorProps {
    switchScramble() : void;
    setScrambleType(type : string) : void;
}

function ScrambleEditor(props : ScrambleEditorProps) {
    return (
        <div className={styles.container}>
            <button className={styles.switchButton} onClick={props.switchScramble}>Switch scramble</button>
            <select className={styles.scrambleSelector} onChange={e => props.setScrambleType(e.target.value)}>
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
