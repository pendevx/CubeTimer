import styles from "./App.module.css";
import { Timer, InfoCard, Scramble } from "../../components";
import Scrambo from "scrambo";
import React from "react";

const scrambleGenerator = new Scrambo();
const generateScramble = () : string => {
    return scrambleGenerator.get(1)[0];
}

function App() {
    const [ scramble, setScramble ] = React.useState<string>(generateScramble());

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Scramble scramble={scramble} />
			</div>
			<div className={styles.layout}>
				<div>
					<InfoCard />
				</div>
				<div>
					<Timer generateScramble={() => setScramble(generateScramble())} />
				</div>
			</div>
		</div>
	);
}

export default App;
