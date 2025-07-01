import styles from "@/asset/css/layout.module.css";
import avatar from "@/asset/img/avatar.png"
import Image from "next/image";
import BreadCrumb from "../../breadcrumb/BreadCrumb";
type Props = {
    breadcrumb: string
    title: string
    redirect: string
    onToggleSidebar: () => void
}
export default function Header(props: Props) {
    const { breadcrumb, title, redirect, onToggleSidebar } = props
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: breadcrumb,
            url: redirect,
        },
        {
            text: title
        },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <button onClick={onToggleSidebar} className={styles.toggleBtn}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            </div>

            <div className={styles.headerRight}>
                <Image src={avatar} alt="avatar" width={50} height={50} />
            </div>
        </header>
    );
}