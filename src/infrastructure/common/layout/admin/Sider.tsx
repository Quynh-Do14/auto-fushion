import styles from "@/asset/css/layout.module.css";
import Link from "next/link";
import logo from "@/asset/img/logo.png"
import Image from "next/image";
import Constants from "@/core/common/constants";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <h2 className={styles.logo}>
                <Image src={logo} alt="autofushion" width={180} height={60} />
            </h2>
            <nav>
                <ul className={styles.menu}>
                    {
                        Constants.Menu.PrivateList.map((item, index) => {
                            return (
                                <li key={index}><Link href={item.url}>{item.text}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
}

