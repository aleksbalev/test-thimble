import styles from './Navbar.module.scss';

import NavItems from './NavItems/NavItems';

const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <a href='#'>
        <img
          src='/assets/svg/logo.svg'
          alt='Thimble logo'
          width='79'
          height='36'
        />
      </a>
      <div className={styles.NavbarWeapper}>
        <NavItems />
        <a href='#' className={styles.NavbarLang}>
          <img
            src='/assets/svg/en_lang_icon.svg'
            alt='change language icon'
            width='25'
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
