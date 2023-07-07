import styles from "./App.module.css";
import { Timer, InfoCard, Scramble } from "../../components";
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

const getFontSize = (scrambleType : string) : string => {
    switch (scrambleType) {
        case "333": return "3rem";
        case "444":
        case "555": return "2.6rem";
        case "666": return "2rem";
        case "777": return "1.8rem";
    }

    return "";
}

function App() {
    const [ scrambleFont, setScrambleFont ] = React.useState<string>("3rem");
    const [ scramble, setScramble ] = React.useState<string>(generateScramble());

    const handleGenerateScramble = () => {
        setScramble(generateScramble());
        setScrambleFont(getFontSize(scrambleGenerator.type()));
    }

    const handleScrambleTypeChange = (type : string) => {
        const typeName : any = type[0].repeat(3);
        scrambleGenerator.type(typeName);

        handleGenerateScramble();
    }

	return (
		<div className={styles.container}>
            <div>
                <Timer generateScramble={handleGenerateScramble} />
            </div>
            <Scramble scramble={scramble}
                switchScramble={() => handleGenerateScramble()}
                setScrambleType={type => handleScrambleTypeChange(type)}/>
		</div>
	);
}

export default App;
