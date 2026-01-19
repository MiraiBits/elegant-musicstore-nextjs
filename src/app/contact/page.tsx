import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.desc}>
                            Have a question about the Channel Splitter? Need support?
                            Reach out to us directly.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span>Email</span>
                                <a href="mailto:hello@yellowaudio.com">hello@yellowaudio.com</a>
                            </div>
                            <div className={styles.detailItem}>
                                <span>Press</span>
                                <a href="mailto:press@yellowaudio.com">press@yellowaudio.com</a>
                            </div>
                            <div className={styles.detailItem}>
                                <span>Social</span>
                                <a href="#">@yellow_audio</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <form className={styles.form}>
                            <div className={styles.field}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="YOUR NAME" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="YOUR EMAIL" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={6} placeholder="HOW CAN WE HELP?"></textarea>
                            </div>
                            <button type="button" className={styles.submit}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
