import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<>
			<p className={styles.logo}>_daily tasker_</p>
			<nav className={styles.nav}>
				<Link to="/" className={styles.nav__link}>
					Task List
				</Link>
				<Link to="/visualisation" className={styles.nav__link}>
					Visualisation
				</Link>
				<Link to="/board" className={styles.nav__link}>
					Board
				</Link>
			</nav>
			<div className={styles.infoContainer}>
				<button type="button">⚙ settings</button>
			</div>
		</>
	);
}
