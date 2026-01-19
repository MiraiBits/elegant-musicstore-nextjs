import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        {/* Logo Placeholder: Replace /images/logo.svg with your logo file */}
                        <Image
                            src="/images/logo.svg"
                            alt="Yellow Audio Logo"
                            width={24}
                            height={24}
                            className={styles.logoImage}
                        />
                        <span>yellow audio</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/products">products</Link>
                    <Link href="/store">store</Link>
                </nav>

                <div className={styles.cart}>
                    <ThemeToggle />
                    <Link href="/cart" className={styles.cartLink}>cart (0)</Link>
                </div>
            </div>

            <div className={styles.breadcrumbs}>
                <span>Channel Splitter</span>
                <span className={styles.separator}>/</span>
                <span>overview</span>
            </div>
        </header>
    );
}
