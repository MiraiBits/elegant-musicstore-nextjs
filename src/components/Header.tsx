import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.logo}>
                    <Link href="/">teenage engineering</Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/products">products</Link>
                    <Link href="/store">store</Link>
                </nav>

                <div className={styles.cart}>
                    <Link href="/cart">cart (0)</Link>
                </div>
            </div>

            <div className={styles.breadcrumbs}>
                <span>TX-1 Field</span>
                <span className={styles.separator}>/</span>
                <span>overview</span>
            </div>
        </header>
    );
}
