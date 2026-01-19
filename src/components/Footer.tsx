import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.column}>
                    <h4>yellow audio</h4>
                    <p>products</p>
                    <p>now</p>
                    <p>store</p>
                </div>
                <div className={styles.column}>
                    <h4>support</h4>
                    <p>downloads</p>
                    <p>guides</p>
                    <p>contact</p>
                </div>
                <div className={styles.column}>
                    <h4>company</h4>
                    <p>about us</p>
                    <p>press</p>
                    <p>career</p>
                </div>
                <div className={styles.column}>
                    <h4>newsletter</h4>
                    <p>subscribe for updates</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>©2026 yellow audio. all rights reserved.</p>
            </div>
        </footer>
    );
}
