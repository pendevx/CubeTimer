import React from "react";
import styles from "./ScrambleEditor.module.css";

interface ScrambleEditorProps {
    switchScramble() : void;
    setScrambleType(type : string) : void;
    selected: number;
    setSelected(val: number): void;
}

function ScrambleEditor(props : ScrambleEditorProps) {
    const buttonRef = React.createRef<HTMLButtonElement>();
    const selectRef = React.createRef<HTMLSelectElement>();
    const [ scrambleTypes, setScrambleTypes ] = React.useState<number[]>([]);

    const handleScrambleTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        selectRef.current?.blur();
        props.setScrambleType(e.target.value);
        props.setSelected(parseInt(e.target.value[0]));
    }

    const handleGenerateScramble = () : void => {
        buttonRef.current?.blur();
        props.switchScramble();
    }

    React.useEffect(() => {
        let _scrambleTypes: number[] = [];
        _scrambleTypes.push(props.selected);

        for (let i: number = 3; i <= 7; i++) {
            if (_scrambleTypes.find(x => x === i)) {
                continue;
            }

            _scrambleTypes.push(i);
        }

        setScrambleTypes(_scrambleTypes);
    });

    return (
        <div className={styles.container}>
            <button className={styles.switchButton} onClick={handleGenerateScramble} ref={buttonRef}>Switch scramble</button>
            <select className={styles.scrambleSelector} onChange={e => handleScrambleTypeChange(e)} ref={selectRef}>
                {
                    scrambleTypes.map(x => (
                        <option key={x}>{`${x}x${x}`}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default ScrambleEditor;
