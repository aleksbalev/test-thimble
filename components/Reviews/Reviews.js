import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section className={styles.Reviews}>
      <img src='/assets/images/about_us_lukas.jpg' alt='image of reviewer' />
      <div className={styles.ReviewsTextWrapper}>
        <h3>Lukáš Hurych - Twisto.cz</h3>
        <p>
          ,,UX bez kompromisu postavené na solidním uživatelském průzkumu a
          testování. Technologie na spičkové úrovni včetně otevřené komunikace s
          vývojáři - navrhovaná řešení jsou vždy skvěle popsaná a doporučená pro
          daný problém a potřeby klienta."
        </p>
        <span>,,</span>
      </div>
    </section>
  );
};

export default Reviews;
