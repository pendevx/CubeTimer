import styles from "./Scramble.module.css";
import { ScrambleEditor } from "../ScrambleEditor";
import { ScrambleEditorProps } from "../ScrambleEditor";

interface ScrambleProps extends ScrambleEditorProps {
    scramble: string;
    fontSize: string;
}

function Scramble(props: ScrambleProps) {
    return (
        <div className={styles.scrambleContainer}>
            <p className={styles.scrambleText} style={{fontSize:`${props.fontSize}`}}>{props.scramble}</p>
            <ScrambleEditor switchScramble={props.switchScramble} setScrambleType={props.setScrambleType} />
        </div>
    );
}

export default Scramble;
