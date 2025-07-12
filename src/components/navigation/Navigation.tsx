import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import ButtonBordered from "../ui/buttons/ButtonBordered";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import ButtonText from "../ui/buttons/ButtonText";

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
				<ButtonText>⚙ settings</ButtonText>
			</div>
		</>
	);
}
