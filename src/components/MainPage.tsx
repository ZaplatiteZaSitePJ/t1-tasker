import React, { type FC } from "react";
import styles from './MainPage.module.scss'
import AddFormPanel from "./FormByilderWidget/sub-components/AddFormPanel/AddFormPanel";

const MainPage: FC = () => {

    return (
        <main className={styles.main}>
            <p className={styles.main__logo}>_design your own form_</p>
            <section className={styles.main__formBuilderPlace}>
                <AddFormPanel />
            </section>
            
        </main>
    )
}

export default MainPage