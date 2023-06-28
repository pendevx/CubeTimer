function InfoCard() {
    return (
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
    );
}

export default InfoCard;
