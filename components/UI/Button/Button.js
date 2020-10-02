import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <a href='#' className={styles.Button}>
      {props.children}
    </a>
  );
};

export default Button;
