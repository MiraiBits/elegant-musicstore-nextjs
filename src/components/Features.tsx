import Image from "next/image";
import styles from "./Features.module.css";

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h2>Simply split.</h2>
                    <p>take a single microphone signal and split it cleanly into two isolated outputs. reliable signal distribution without noise, impedance mismatch, or ground-loop hum.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.featureItem}>
                        <div className={styles.imageWrapper}>
                            <Image src="/images/feature_placeholder.svg" alt="Clean Signal" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
                        </div>
                        <h3>Active Isolation</h3>
                        <p>prevent noise and signal degradation.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.imageWrapper}>
                            <Image src="/images/feature_placeholder.svg" alt="Wireless Control" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
                        </div>
                        <h3>Bluetooth LE</h3>
                        <p>modern wireless control via smartphone.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.imageWrapper}>
                            <Image src="/images/feature_placeholder.svg" alt="Robust Enclosure" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
                        </div>
                        <h3>Robust Enclosure</h3>
                        <p>black anodized aluminum with yellow accents.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
