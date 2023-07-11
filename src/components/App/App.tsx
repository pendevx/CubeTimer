import styles from "./App.module.css";
import { Timer, Scramble } from "../../components";
import Scrambo from "scrambo";
import React from "react";

const scrambleGenerator = new Scrambo();

const generateScramble = () : string => {
    const getRandomNumber = (min : number, max : number) : number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    switch (scrambleGenerator.type()) {
        case "333": {
            scrambleGenerator.length(getRandomNumber(15, 21));
        } break;

        case "444": {
            scrambleGenerator.length(getRandomNumber(42, 48));
        } break;

        case "555": {
            scrambleGenerator.length(60);
        } break;

        case "666": {
            scrambleGenerator.length(80);
        } break;

        case "777": {
            scrambleGenerator.length(100);
        } break;
    }

    return scrambleGenerator.get(1)[0];
}

function App() {
    const [ showSettings, setShowSettings ] = React.useState<boolean>(false);
    const [ scramble, setScramble ] = React.useState<string>(generateScramble());

    const handleGenerateScramble = () => {
        setScramble(generateScramble());
    }

    const handleScrambleTypeChange = (type : string) => {
        const typeName : any = type[0].repeat(3);
        scrambleGenerator.type(typeName);

        handleGenerateScramble();
    }

	return (
		<div className={styles.container}>
            <div>
                <Timer generateScramble={handleGenerateScramble}
                    showScrambleSettings={showSettings}
                    setScrambleType={type => handleScrambleTypeChange(type)} />
            </div>
            <Scramble scramble={scramble}
                flipShowScrambleSettings={() => setShowSettings(!showSettings)}/>
		</div>
	);
}

export default App;
