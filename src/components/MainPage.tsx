import { type FC } from "react";
import styles from './MainPage.module.scss'
import AddFormPanel from "./FormBuilderWidget/sub-components/AddFormPanel/AddFormPanel";
import FormPanel from "./FormBuilderWidget/sub-components/FormPanel/FormPanel";
import { FormContentContext } from "./FormBuilderWidget/FormBuilderContext/FormContentContext";

const MainPage: FC = () => {

    return (
        <>
            <div className={styles.background}>

            </div>
            <main className={styles.main}>
                <p className={styles.main__logo}>_design your own form_</p>
                <section className={styles.main__formBuilderPlace}>
                    <FormContentContext.Provider value={null}>
                        <AddFormPanel />
                        <FormPanel />
                    </FormContentContext.Provider>
                </section>
                
            </main>
        </>
    )
}

export default MainPage