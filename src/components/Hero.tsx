import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>TX-1 Field</h1>
                <p className={styles.subtitle}>the portable synthesizer field system.</p>

                <div className={styles.actions}>
                    <button className={styles.buyButton}>Buy Now</button>
                    <span className={styles.price}>$1999</span>
                </div>
            </div>

            <div className={styles.imageContainer}>
                {/* Placeholder for now if image is missing */}
                <div className={styles.placeholderImage}>
                    TX-1 Field Top View
                </div>
                {/* Undo comment when image is available
        <Image 
          src="/images/tx1_top_view.webp" 
          alt="TX-1 Field Top View" 
          fill 
          priority
          className={styles.image}
        />
        */}
            </div>
        </section>
    );
}
