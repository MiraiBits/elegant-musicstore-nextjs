import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./store.module.css";

export default function StorePage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Store</h1>
                    <p className={styles.subtitle}>Purchase direct from Yellow Audio. Free worldwide shipping.</p>
                </div>

                <div className={styles.grid}>
                    {/* Main Product */}
                    <div className={styles.productCard}>
                        <div className={styles.imageContainer}>
                            <Image 
                                src="/images/hero_product.svg" 
                                alt="Yellow Channel Splitter" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.image} 
                            />
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.details}>
                                <h2 className={styles.name}>Channel Splitter</h2>
                                <p className={styles.description}>professional-grade active signal isolation utility.</p>
                                <ul className={styles.features}>
                                    <li>Active isolation circuitry</li>
                                    <li>Bluetooth LE control</li>
                                    <li>Anodized aluminum enclosure</li>
                                    <li>Includes USB-C charging cable</li>
                                </ul>
                                <span className={styles.price}>$199.00 USD</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.addToCart}>Add to Cart</button>
                                <p className={styles.stockStatus}>In Stock. Ships in 1-2 business days.</p>
                            </div>
                        </div>
                    </div>

                    {/* Accessory */}
                    <div className={styles.accessoryCard}>
                        <div className={styles.accessoryImageContainer}>
                            <div className={styles.placeholderBox}></div>
                        </div>
                        <div className={styles.accessoryInfo}>
                            <h3 className={styles.accessoryName}>Protective Case</h3>
                            <p className={styles.accessoryDesc}>custom-fit EVA foam hard case.</p>
                            <span className={styles.price}>$39.00 USD</span>
                            <button className={styles.addAccessory}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
