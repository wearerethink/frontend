import Link from "next/link"
import { useState } from "react"
import styles from "../styles/components/NavBar.module.scss"

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => setIsOpen(!isOpen);

    return (

        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    FORUM
                </div>

                <div 
                className={styles.navbar__menu}
                onClick={openMenu}
                >
                    Menu
                </div>
            </div>

            <div className={!isOpen ? styles.menu + ' ' + styles.close : styles.menu}>
                <div 
                className={styles.menu__close}
                onClick={openMenu}
                >
                    <p>X</p>
                </div>

                <div className={styles.menu__navbar}>
                    <div className={styles.section}>
                        <p className={styles.section__title}>Perfil</p>
                        <Link href={"/profile/tickets"} className={styles.section__link}>
                            Mis boletos
                        </Link>

                        <Link href={"/profile"} className={styles.section__link}>
                            Mi perfil
                        </Link>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.section__title}>Forum</p>
                        <Link href={"/"} className={styles.section__link}>
                            Eventos
                        </Link>

                        <Link href={"#"} className={styles.section__link}>
                            Como llegar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    
    )

}