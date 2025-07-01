import styles from "@/asset/css/layout.module.css";
import Sidebar from "./Sider";
import Header from "./Header";
import { useState } from "react";

export default function AdminLayout({ breadcrumb, title, redirect, children }: any) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={styles.wrapper}>
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`${styles.mainContent} ${!isSidebarOpen ? styles.full : ''}`}>
                <Header
                    onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                    breadcrumb={breadcrumb}
                    title={title}
                    redirect={redirect}
                />
                <div className={styles.pageContent}>{children}</div>
            </div>
        </div>
    );
}
