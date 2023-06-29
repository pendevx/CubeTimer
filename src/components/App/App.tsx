import styles from "./App.module.css";
import { Timer, InfoCard, Scramble } from "../../components";

function App() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Scramble />
			</div>
			<div className={styles.layout}>
				<div>
					<InfoCard />
				</div>
				<div>
					<Timer />
				</div>
			</div>
		</div>
	);
}

export default App;
