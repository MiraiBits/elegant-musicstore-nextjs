import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Channel Splitter</h1>
                <p className={styles.subtitle}>professional-grade audio utility.</p>

                <div className={styles.actions}>
                    <button className={styles.buyButton}>Buy Now</button>
                    <span className={styles.price}>$199</span>
                </div>
            </div>

            <div className={styles.imageContainer}>
                {/* Product Image Placeholder: Replace 'public/images/hero_product.svg' with your actual image */}
                <Image
                    src="/images/hero_product.svg"
                    alt="Yellow Channel Splitter"
                    fill
                    priority
                    className={styles.image}
                />
            </div>
        </section>
    );
}
