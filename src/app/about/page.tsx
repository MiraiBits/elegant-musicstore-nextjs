import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Simply split.</h1>

                    <div className={styles.section}>
                        <p className={styles.lead}>
                            Yellow Audio builds professional-grade utilities for musicians who demand reliability without the noise.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.column}>
                            <h3>Our Mission</h3>
                            <p>
                                To eliminate the technical friction between a musician and their sound.
                                We believe in single-purpose tools, built to last a lifetime, with an aesthetic that respects the stage.
                            </p>
                        </div>
                        <div className={styles.column}>
                            <h3>Design Philosophy</h3>
                            <p>
                                Industrial precision meets human warmth. We use anodized aluminum, tactile switches,
                                and high-contrast displays to ensure our gear performs in the darkest clubs and the brightest studios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
