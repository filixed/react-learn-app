import Navbar from "../Navbar/Navbar";
import React, { ReactNode } from 'react'
import styles from './Layout.module.scss';
import LeftPanel from "../LeftPanel/LeftPanel";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.layout}>
            <header>
                <div className={styles.navbarWrapper}>
                    <Navbar />
                </div>
            </header>
            <div className={styles.layoutBody}>
                <aside className={styles.leftPanel}>
                    <LeftPanel />
                </aside>
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;