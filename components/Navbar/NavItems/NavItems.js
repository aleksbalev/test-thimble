import styles from './NavItems.module.scss';

const NavItems = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  return (
    <nav>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <a href='#'>Reference</a>
        </li>
        <li className={styles.ListItem}>
          <a href='#'>O nás</a>
        </li>
        <li className={styles.ListItem}>
          <a href='#'>Co děláme</a>
        </li>
        <li className={styles.ListItem}>
          <a href='#'>
            Kariéra{' '}
            <span className={styles.ListItemsCount}>{randomNumber()}</span>
          </a>
        </li>
        <li className={styles.ListItem}>
          <a href='#'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
