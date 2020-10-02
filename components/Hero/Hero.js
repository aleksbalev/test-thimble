import styles from './Hero.module.scss';

import Button from '../UI/Button/Button';

const Hero = () => (
  <section className={styles.Hero}>
    <ul className={styles.HeroLocations}>
      <li className={styles.HeroLocationsItem}>
        <span>
          <img
            src='/assets/svg/location_on.svg'
            alt='location svg icon'
            width='13'
            height='12'
          />
        </span>
        Prague
      </li>
      <li className={styles.HeroLocationsItem}>
        <span>
          <img
            src='/assets/svg/location_on.svg'
            alt='location svg icon'
            width='13'
            height='12'
          />
        </span>
        New York
      </li>
    </ul>
    <p className={styles.HeroSmallTitle}>Digitální agentura</p>
    <h1 className={styles.HeroTitle}>
      Tvoříme moderní weby, e-shopy a aplikace s důrazem na UI/UX
    </h1>
    <Button>Kontaktujte nás</Button>
  </section>
);

export default Hero;
