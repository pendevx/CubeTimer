import './App.css'

function App() {
	return (
		<div className="page-container">
			<div className="header">
				<p>A B C D E F G H I J K L M N O P</p>
			</div>
			<div className="layout">
				<div>
					<div className="info">
						<ul>
							<li>
								<div className="account-card"> { /* Default should render this unless logged in. */}
									<img src="./images/blank-profile.webp" alt="Account image" />
									<button className="account-button">Register</button>
									<button className="account-button">Log in</button>
								</div>
							</li>
							<li>
								<div className="timesList">
									<table>
										<th>Latest 10 times</th>
									</table>
								</div>
							</li>
							<li><button>View all times</button></li>
						</ul>
					</div>
				</div>
				<div>
					<div className="timer">
						<p id="time">0:00.00</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
