import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h4>yellow audio</h4>
                        <Link href="/products" className={styles.link}>products</Link>
                        <Link href="#" className={styles.link}>now</Link>
                        <Link href="/store" className={styles.link}>store</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>support</h4>
                        <Link href="#" className={styles.link}>downloads</Link>
                        <Link href="#" className={styles.link}>guides</Link>
                        <Link href="/contact" className={styles.link}>contact</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>company</h4>
                        <Link href="/about" className={styles.link}>about us</Link>
                        <Link href="#" className={styles.link}>press</Link>
                        <Link href="#" className={styles.link}>career</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>newsletter</h4>
                        <p className={styles.newsletterDesc}>subscribe for updates and new releases.</p>
                        <form className={styles.newsletterForm}>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className={styles.emailInput} 
                                required 
                            />
                            <button type="button" className={styles.subscribeBtn} aria-label="Subscribe">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} yellow audio. all rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}