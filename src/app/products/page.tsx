import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./products.module.css";

export default function ProductsPage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Products</h1>

                <div className={styles.grid}>
                    <Link href="/" className={styles.productCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/hero_product.svg"
                                alt="Channel Splitter"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.info}>
                            <h2 className={styles.name}>Yellow Channel Splitter</h2>
                            <span className={styles.price}>$199</span>
                        </div>
                        <p className={styles.tagline}>professional active signal isolation.</p>
                    </Link>

                    {/* Placeholder for future products */}
                    <div className={styles.comingSoon}>
                        <div className={styles.imagePlaceholder}></div>
                        <div className={styles.info}>
                            <h2 className={styles.name}>Yellow Loop Station</h2>
                            <span className={styles.price}>TBA</span>
                        </div>
                        <p className={styles.tagline}>coming 2026.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
