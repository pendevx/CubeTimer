import './App.css';
import { Timer, InfoCard, Scramble } from "./components";

function App() {
	return (
		<div className="page-container">
			<div className="header">
				<Scramble />
			</div>
			<div className="layout">
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
