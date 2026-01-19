import styles from "./Features.module.css";

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h2>100 new features.</h2>
                    <p>rebuilt from the ground up. stereo throughout. bluetooth midi. 24 hour battery life.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.featureItem}>
                        <div className={styles.placeholder}>Detail Shot 1</div>
                        <h3>Thin Aluminum Body</h3>
                        <p>precision machined from a single block.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.placeholder}>Detail Shot 2</div>
                        <h3>High Res Display</h3>
                        <p>flush mounted oled with 60fps graphics.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.placeholder}>Detail Shot 3</div>
                        <h3>New Field System</h3>
                        <p>refined interaction for faster workflows.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
