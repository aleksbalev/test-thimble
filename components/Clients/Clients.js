import styles from './Clients.module.scss';

const Clients = () => {
  return (
    <section className={styles.Clients}>
      <ul className={styles.ClientsList}>
        <li className={styles.ClientsText}>our clients...</li>
        <li className={styles.ClientsLogo}>
          <img
            src='/assets/images/Academie.png'
            alt='academy of scienc in czech republick logo'
          />
        </li>
        <li className={styles.ClientsLogo}>
          <img src='/assets/images/Twisto.png' alt='Twisto logo' />
        </li>
        <li className={styles.ClientsLogo}>
          <img src='/assets/images/Cola.png' alt='Cola logo' />
        </li>
        <li className={styles.ClientsLogo}>
          <img src='/assets/images/Tesco.png' alt='Tesco logo' />
        </li>
        <li className={styles.ClientsLogo}>
          <img src='/assets/images/Fortuna.png' alt='Fortuna logo' />
        </li>
        <li className={styles.ClientsLogo}>
          <img src='/assets/images/Novartis.png' alt='Novartis logo' />
        </li>
      </ul>
    </section>
  );
};

export default Clients;
