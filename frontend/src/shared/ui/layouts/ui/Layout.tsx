import { Navigation } from "@shared/ui/navigation";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<div className={styles.gradientBackground}></div>
			<div className={styles.layout}>
				<header className={styles.layout__header}>
					<Navigation />
				</header>
				<aside className={styles.layout__sidebar}>
					<Navigation />
				</aside>
				<main className={styles.layout__main}>
					<Outlet />
				</main>
			</div>
		</>
	);
}
