import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import ButtonText from "../ui/buttons/ButtonText";
import cn from "classnames";

export default function Navigation() {
	return (
		<>
			<p className={styles.logo}>_daily tasker_</p>
			<nav className={styles.nav}>
				<NavLink
					to="/"
					className={({ isActive }) =>
						cn(styles.nav__link, {
							[styles.nav__active]: isActive,
						})
					}
				>
					Main
				</NavLink>
				<NavLink
					to="/visualisation"
					className={({ isActive }) =>
						cn(styles.nav__link, {
							[styles.nav__active]: isActive,
						})
					}
				>
					Visualisation
				</NavLink>
				<NavLink
					to="/board"
					className={({ isActive }) =>
						cn(styles.nav__link, {
							[styles.nav__active]: isActive,
						})
					}
				>
					Board
				</NavLink>
			</nav>
			<div className={styles.infoContainer}>
				<ButtonText>⚙ info</ButtonText>
			</div>
		</>
	);
}
