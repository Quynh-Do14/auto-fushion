import styles from "@/asset/css/admin/layout.module.css";
import Link from "next/link";
import logo from "@/asset/img/logo.png"
import Image from "next/image";
import Constants from "@/core/common/constants";
import { Tooltip } from "antd";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <h2 className={styles.logo}>
                <Image src={logo} alt="autofusion" />
            </h2>
            <nav>
                <ul className={styles.menu}>
                    {
                        Constants.Menu.PrivateList.map((item, index) => {
                            return (
                                <Tooltip title={item.text} key={index}>
                                    <li className="text-truncate"><i className={item.icon}></i>  <Link href={item.url}>{item.text}</Link></li>
                                </Tooltip>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
}

